import deepEqual from "deep-equal";
import { JsonFieldInput } from "../graphql/generated";
import { TemplatedNode } from "../model/templatedNode";
import { getIdOrFail } from "./util";

export function getTemplatedFields(node: TemplatedNode): JsonFieldInput[] {
    return Object.entries(node.templatedFields ?? []).map(([key, value]) => ({ name: key, value }));
}

export function updateTemplatedNode(
    current: {
        template: { id: string };
        templatedFields: { name: string; value?: any }[];
    },
    expected: TemplatedNode,
    templateIdLookup: Map<string, string>
): { template?: string; templatedFields?: JsonFieldInput[] } {
    const expectedTemplate = getIdOrFail(expected.template, templateIdLookup);
    const template = current.template.id != expectedTemplate ? expectedTemplate : undefined;
    const currentTemplatedFields = new Map(current.templatedFields.map((field) => [field.name, field.value]));
    const expectedTemplatedFields = new Set(Object.keys(expected.templatedFields ?? {}));
    const templatedFieldUpdates: JsonFieldInput[] = [];
    for (const name of expectedTemplatedFields) {
        const currentValue = currentTemplatedFields.get(name);
        const expectedValue = expected.templatedFields![name];
        if (!deepEqual(currentValue, expectedValue, { strict: true })) {
            templatedFieldUpdates.push({ name, value: expectedValue });
        }
    }
    for (const [name] of currentTemplatedFields) {
        if (!expectedTemplatedFields.has(name)) {
            templatedFieldUpdates.push({ name, value: null });
        }
    }
    return {
        template,
        templatedFields: templatedFieldUpdates.length > 0 ? templatedFieldUpdates : undefined
    };
}
