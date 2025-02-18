import { Client } from "../graphql/client";
import { ComponentInfoFragment, InterfaceInfoFragment, ProjectInfoFragment } from "../graphql/generated";
import { Component } from "../model/component";
import { Interface } from "../model/interface";
import { Model } from "../model/model";
import { patchComponent } from "./component";
import { patchIntraComponentDependencySpecification } from "./intraComponentDependencySpecification";
import { patchList } from "./util";
import { patchRelation } from "./relation";

export async function patchProject(client: Client, expected: Model) {
    const current =
        expected.id != undefined
            ? ((await client.getProject({ id: expected.id })).node as ProjectInfoFragment)
            : undefined;
    let newCurrent: ProjectInfoFragment;
    const newName = expected.name;
    const newDescription = expected.description ?? "";
    if (current == undefined) {
        const res = await client.createProject({
            input: {
                name: newName,
                description: newDescription
            }
        });
        newCurrent = res.createProject.project;
        expected.id = newCurrent.id;
    } else {
        const update = {
            id: current.id,
            name: newName,
            description: newDescription
        };
        await client.updateProject({ input: update });
        newCurrent = current;
    }
    const templateIdLookup = new Map(Object.entries(expected.ref));
    await patchList(
        client,
        {
            projectId: newCurrent.id,
            templateIdLookup
        },
        newCurrent.components.nodes,
        Object.entries(expected.components),
        (node) => ({ id: node.id, current: node }),
        ([ref, expected]) => ({ additionalContext: { ref }, expected }),
        patchComponent
    );
    newCurrent = (await client.getProject({ id: newCurrent.id })).node as ProjectInfoFragment;
    const relationPartnerIdLookup = new Map<string, string>();
    const expectedRelationPartners: (Component | Interface)[] = [];
    for (const [componentRef, component] of Object.entries(expected.components)) {
        relationPartnerIdLookup.set(componentRef, component.id!);
        expectedRelationPartners.push(component);
        for (const [interfaceRef, inter] of Object.entries(component.interfaces ?? {})) {
            relationPartnerIdLookup.set(`${componentRef}.${interfaceRef}`, inter.id!);
            expectedRelationPartners.push(inter);
        }
    }
    const currentRelationPartnerLookup = new Map<
        string,
        ComponentInfoFragment | InterfaceInfoFragment["visibleInterface"]
    >();
    for (const node of newCurrent.components.nodes) {
        currentRelationPartnerLookup.set(node.id, node);
        for (const interfaceDefinition of node.interfaceDefinitions.nodes) {
            const inter = interfaceDefinition.visibleInterface;
            if (inter != null) {
                currentRelationPartnerLookup.set(inter.id, inter);
            }
        }
    }
    for (const relationPartner of expectedRelationPartners) {
        const current = currentRelationPartnerLookup.get(relationPartner.id!)!;
        await patchList(
            client,
            {
                relationPartnerId: relationPartner.id!,
                relationPartnerIdLookup,
                templateIdLookup
            },
            current.outgoingRelations.nodes,
            relationPartner.relations ?? [],
            (node) => ({ id: node.id, current: node }),
            (expected) => ({ expected, additionalContext: {} }),
            patchRelation
        );
    }
    for (const component of Object.values(expected.components)) {
        const current = currentRelationPartnerLookup.get(component.id!) as ComponentInfoFragment;
        await patchList(
            client,
            {
                componentVersionId: component.id!,
                interfaceIdLookup: new Map(
                    Object.entries(component.interfaces ?? {}).map(([ref, expected]) => [ref, expected.id!])
                ),
                templateIdLookup
            },
            current.intraComponentDependencySpecifications.nodes,
            component.icds ?? [],
            (node) => ({ id: node.id, current: node }),
            (expected) => ({ expected, additionalContext: {} }),
            patchIntraComponentDependencySpecification
        );
    }
}
