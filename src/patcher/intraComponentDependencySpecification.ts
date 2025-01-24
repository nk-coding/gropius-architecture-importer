import { Client } from "../graphql/client";
import { IntraComponentDependencySpecificationInfoFragment } from "../graphql/generated";
import { IntraComponentDependencySpecification } from "../model/intraComponentDependencySpecification";

export async function patchComponent(
    client: Client,
    current?: IntraComponentDependencySpecificationInfoFragment,
    expected?: IntraComponentDependencySpecification
) {
    if (current != undefined) {
        if (expected == undefined) {
            await client.deleteIntraComponentDependencySpecification({ id: current.id });
        } else {
            
        }
    }
}
