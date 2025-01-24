import { Component } from "./component";

export interface Model {
    ref: Record<string, string>;
    components: Record<string, Component>;
    id?: string;
    name: string;
    description?: string;
}