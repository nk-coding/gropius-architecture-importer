import { Relation } from "./relation";
import { TemplatedNode } from "./templatedNode";

export interface RelationPartner extends TemplatedNode {
    name?: string;
    description?: string;
    version?: string;
    relations?: Relation[];
}