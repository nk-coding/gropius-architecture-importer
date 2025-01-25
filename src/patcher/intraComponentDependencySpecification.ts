import { Client } from "../graphql/client";
import {
    IntraComponentDependencySpecificationInfoFragment,
    UpdateIntraComponentDependencySpecificationInput
} from "../graphql/generated";
import { IntraComponentDependencySpecification } from "../model/intraComponentDependencySpecification";
import { getIdOrFail } from "./util";

export async function patchIntraComponentDependencySpecification(
    client: Client,
    context: { componentVersionId: string; interfaceIdLookup: Map<string, string> },
    current?: IntraComponentDependencySpecificationInfoFragment,
    expected?: IntraComponentDependencySpecification
) {
    if (expected != undefined) {
        const newName = expected.name || "ICDS";
        const newDescription = expected.description ?? "";
        const newOutgoing = new Set(expected.outgoing.map((p) => getIdOrFail(p, context.interfaceIdLookup)));
        const newIncoming = new Set(expected.incoming.map((p) => getIdOrFail(p, context.interfaceIdLookup)));
        if (current == undefined) {
            const res = await client.createIntraComponentDependencySpecification({
                input: {
                    componentVersion: context.componentVersionId,
                    outgoingParticipants: [...newOutgoing].map((id) => ({ interface: id })),
                    incomingParticipants: [...newIncoming].map((id) => ({ interface: id })),
                    name: newName,
                    description: newDescription
                }
            });
            expected.id = res.createIntraComponentDependencySpecification.intraComponentDependencySpecification.id;
        } else {
            const update: UpdateIntraComponentDependencySpecificationInput = {
                id: current.id
            };
            if (current.name != newName) {
                update.name = newName;
            }
            if (current.description != newDescription) {
                update.description = newDescription;
            }
            const removedOutgoing = current.outgoingParticipants.nodes.filter((p) => !newOutgoing.has(p.interface.id));
            if (removedOutgoing.length > 0) {
                update.removedOutgoingParticipants = removedOutgoing.map((p) => p.id);
            }
            const removedIncoming = current.incomingParticipants.nodes.filter((p) => !newIncoming.has(p.interface.id));
            if (removedIncoming.length > 0) {
                update.removedIncomingParticipants = removedIncoming.map((p) => p.id);
            }
            const currentOutgoing = new Set(current.outgoingParticipants.nodes.map((p) => p.interface.id));
            const addedOutgoing = [...newOutgoing].filter((p) => !currentOutgoing.has(p));
            if (addedOutgoing.length > 0) {
                update.addedOutgoingParticipants = addedOutgoing.map((id) => ({ interface: id }));
            }
            const currentIncoming = new Set(current.incomingParticipants.nodes.map((p) => p.interface.id));
            const addedIncoming = [...newIncoming].filter((p) => !currentIncoming.has(p));
            if (addedIncoming.length > 0) {
                update.addedIncomingParticipants = addedIncoming.map((id) => ({ interface: id }));
            }
            if (Object.keys(update).length > 1) {
                await client.updateIntraComponentDependencySpecification({ input: update });
            }
        }
    } else if (current != undefined) {
        await client.deleteIntraComponentDependencySpecification({ id: current.id });
    }
}
