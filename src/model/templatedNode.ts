import { Node } from "./node";

export interface TemplatedNode extends Node {
    template: string;
    templatedFields?: Record<string, string>;
}