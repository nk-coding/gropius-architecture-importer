import { Client } from "../graphql/client";
import { InterfaceInfoFragment, UpdateInterfaceSpecificationInput } from "../graphql/generated";
import { Interface } from "../model/interface";
import { getTemplatedFields, updateTemplatedNode } from "./templatedNode";
import { getIdOrFail } from "./util";

export async function patchInterface(
    client: Client,
    context: { ref?: string; componentVersionId: string; componentId: string; templateIdLookup: Map<string, string> },
    current?: InterfaceInfoFragment,
    expected?: Interface
) {
    if (expected != undefined) {
        const newName = (expected.name ?? context.ref) || "Interface";
        const newDescription = expected.description ?? "";
        const newVersion = expected.version ?? "1.0.0";
        if (current == undefined) {
            const result = await client.createInterfaceSpecification({
                input: {
                    name: newName,
                    description: newDescription,
                    versions: [
                        {
                            version: newVersion,
                            templatedFields: [],
                            tags: []
                        }
                    ],
                    template: getIdOrFail(expected.template, context.templateIdLookup),
                    templatedFields: getTemplatedFields(expected),
                    component: context.componentId
                }
            });
            const versionId = result.createInterfaceSpecification.interfaceSpecification.versions.nodes[0].id;
            const interfaceResult = await client.addInterfaceSpecificationVersionToComponentVersion({
                componentVersion: context.componentVersionId,
                interfaceSpecificationVersion: versionId
            });
            expected.id =
                interfaceResult.addInterfaceSpecificationVersionToComponentVersion.componentVersion.interfaceDefinitions.nodes[0].visibleInterface!.id;
        } else {
            if (newVersion != current.interfaceSpecificationVersion.version) {
                await client.updateInterfaceSpecificationVersion({
                    input: {
                        id: current.interfaceSpecificationVersion.id,
                        version: newVersion
                    }
                });
            }
            const update: UpdateInterfaceSpecificationInput = {
                id: current.interfaceSpecificationVersion.interfaceSpecification.id,
                ...updateTemplatedNode(
                    current.interfaceSpecificationVersion.interfaceSpecification,
                    expected,
                    context.templateIdLookup
                )
            };
            if (current.interfaceSpecificationVersion.interfaceSpecification.name != newName) {
                update.name = newName;
            }
            if (current.interfaceSpecificationVersion.interfaceSpecification.description != newDescription) {
                update.description = newDescription;
            }
            if (Object.keys(update).length > 1) {
                await client.updateInterfaceSpecification({ input: update });
            }
        }
    } else if (current != undefined) {
        await client.deleteInterfaceSpecification({
            id: current.interfaceSpecificationVersion.interfaceSpecification.id
        });
    }
}
