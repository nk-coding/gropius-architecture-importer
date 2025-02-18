import { Node } from "./node";

export interface IntraComponentDependencySpecification extends Node {
    name?: string;
    description?: string;
    type?: string;
    outgoing: string[];
    incoming: string[];
}
