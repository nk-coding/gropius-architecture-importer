import { Client } from "../graphql/client";
import { ComponentInfoFragment, UpdateComponentInput } from "../graphql/generated";
import { Component } from "../model/component";
import { patchInterface } from "./interface";
import { getIdOrFail, patchList } from "./util";
import { getTemplatedFields, updateTemplatedNode } from "./templatedNode";

export async function patchComponent(
    client: Client,
    context: { ref?: string; projectId: string; templateIdLookup: Map<string, string> },
    current?: ComponentInfoFragment,
    expected?: Component
) {
    if (expected != undefined) {
        let newCurrent: ComponentInfoFragment;
        const newName = (expected.name ?? context.ref) || "Component";
        const newDescription = expected.description ?? "";
        const newVersion = expected.version ?? "1.0.0";
        if (current == undefined) {
            const res = await client.createComponent({
                input: {
                    template: getIdOrFail(expected.template, context.templateIdLookup),
                    templatedFields: getTemplatedFields(expected),
                    name: newName,
                    description: newDescription,
                    versions: [
                        {
                            version: newVersion,
                            tags: [],
                            templatedFields: []
                        }
                    ]
                }
            });
            newCurrent = res.createComponent.component.versions.nodes[0];
            expected.id = newCurrent.id;
            await client.addComponentVersionToProject({
                input: {
                    componentVersion: newCurrent.id,
                    project: context.projectId
                }
            });
        } else {
            if (newVersion != current.version) {
                await client.updateComponentVersion({
                    input: {
                        id: current.id,
                        version: newVersion
                    }
                });
            }
            const update: UpdateComponentInput = {
                id: current.component.id,
                ...updateTemplatedNode(current.component, expected, context.templateIdLookup)
            };
            if (current.component.name != newName) {
                update.name = newName;
            }
            if (current.component.description != newDescription) {
                update.description = newDescription;
            }
            if (Object.keys(update).length > 1) {
                await client.updateComponent({ input: update });
            }
            newCurrent = current;
        }
        await patchList(
            client,
            {
                componentVersionId: newCurrent.id,
                componentId: newCurrent.component.id,
                templateIdLookup: context.templateIdLookup
            },
            newCurrent.interfaceDefinitions.nodes,
            Object.entries(expected.interfaces ?? {}),
            (node) => ({ id: node.visibleInterface!.id, current: node }),
            ([ref, expected]) => ({ additionalContext: { ref }, expected }),
            patchInterface
        );
    } else if (current != undefined) {
        await client.removeComponentVersionFromProject({
            input: {
                componentVersion: current.id,
                project: context.projectId
            }
        });
    }
}
