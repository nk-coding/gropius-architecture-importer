import { Interface } from "./interface";
import { IntraComponentDependencySpecification } from "./intraComponentDependencySpecification";
import { RelationPartner } from "./relationPartner";

export interface Component extends RelationPartner {
    interfaces?: Record<string, Interface>;
    icds?: IntraComponentDependencySpecification[];
}
