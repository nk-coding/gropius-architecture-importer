import { Client } from "../graphql/client";

export async function patchList<C, A, B, C2, A2, B2 extends { id?: string }>(
    client: Client,
    context: C,
    current: A[],
    expected: B[],
    currentExtractor: (node: A) => { id: string; current: A2 },
    expectedExtractor: (node: B) => { expected: B2; additionalContext: C2 },
    patch: (client: Client, context: C & Partial<C2>, current?: A2, expected?: B2) => Promise<void>
) {
    const currentMap = new Map(
        current.map((node) => {
            const { id, current } = currentExtractor(node);
            return [id, current];
        })
    );
    const mappedExpected = expected.map(expectedExtractor);
    const expectedMap = new Map(
        mappedExpected.filter((entry) => entry.expected.id != undefined).map((entry) => [entry.expected.id!, entry])
    );
    const ids = new Set([...currentMap.keys(), ...expectedMap.keys()]);
    for (const id of ids) {
        const currentItem = currentMap.get(id);
        const expectedEntry = expectedMap.get(id) ?? { expected: undefined, additionalContext: {} };
        await patch(client, { ...context, ...expectedEntry.additionalContext }, currentItem, expectedEntry.expected);
    }
    for (const entry of mappedExpected.filter((entry) => entry.expected.id == undefined)) {
        await patch(client, { ...context, ...entry.additionalContext }, undefined, entry.expected);
    }
}
