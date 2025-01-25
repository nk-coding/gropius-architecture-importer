import { Client } from "../graphql/client";
import { RelationInfoFragment, UpdateRelationInput } from "../graphql/generated";
import { Relation } from "../model/relation";
import { getTemplatedFields, updateTemplatedNode } from "./templatedNode";
import { getIdOrFail } from "./util";

export async function patchRelation(
    client: Client,
    context: {
        relationPartnerId: string;
        relationPartnerIdLookup: Map<string, string>;
        templateIdLookup: Map<string, string>;
    },
    current?: RelationInfoFragment,
    expected?: Relation
) {
    if (expected != undefined) {
        if (current == undefined) {
            const res = await client.createRelation({
                input: {
                    template: getIdOrFail(expected.template, context.templateIdLookup),
                    templatedFields: getTemplatedFields(expected),
                    start: context.relationPartnerId,
                    end: getIdOrFail(expected.to, context.relationPartnerIdLookup)
                }
            });
            expected.id = res.createRelation.relation.id;
        } else {
            const update: UpdateRelationInput = {
                id: current.id,
                ...updateTemplatedNode(current, expected, context.templateIdLookup)
            };
            if (Object.keys(update).length > 1) {
                await client.updateRelation({ input: update });
            }
        }
    } else if (current != undefined) {
        await client.deleteRelation({ id: current.id });
    }
}
