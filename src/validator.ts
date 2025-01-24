import Ajv from "ajv/dist/jtd";
import { Model } from "./model/model";

const ajv = new Ajv();

const relationSchema = {
    type: "object",
    properties: {
        id: { type: "string", nullable: true },
        template: { type: "string" },
        templatedFields: {
            type: "object",
            additionalProperties: { type: "string" },
            nullable: true
        },
        to: { type: "string" }
    },
    required: ["template", "to"],
    additionalProperties: false
};

const relationPartnerProperties = {
    id: { type: "string", nullable: true },
    template: { type: "string" },
    templatedFields: {
        type: "object",
        additionalProperties: { type: "string" },
        nullable: true
    },
    name: { type: "string", nullable: true },
    description: { type: "string", nullable: true },
    version: { type: "string", nullable: true },
    relations: {
        type: "array",
        items: relationSchema,
        nullable: true
    }
};

const interfaceSchema = {
    type: "object",
    properties: {
        ...relationPartnerProperties
    },
    required: ["template"],
    additionalProperties: false
};

const intraComponentDependencySpecificationSchema = {
    type: "object",
    properties: {
        name: { type: "string", nullable: true },
        description: { type: "string", nullable: true },
        outgoing: {
            type: "array",
            items: { type: "string" }
        },
        incoming: {
            type: "array",
            items: { type: "string" }
        }
    },
    required: ["outgoing", "incoming"],
    additionalProperties: false
};

const componentSchema = {
    type: "object",
    properties: {
        ...relationPartnerProperties,
        interfaces: {
            type: "object",
            additionalProperties: interfaceSchema
        },
        icds: {
            type: "array",
            items: intraComponentDependencySpecificationSchema
        }
    },
    required: ["interfaces", "icds"],
    additionalProperties: false
};

const modelSchema = {
    type: "object",
    properties: {
        ref: {
            type: "object",
            additionalProperties: { type: "string" }
        },
        components: {
            type: "object",
            additionalProperties: componentSchema
        },
        name: { type: "string" },
        description: { type: "string", nullable: true },
        id: { type: "string", nullable: true }
    },
    required: ["ref", "components", "name"],
    additionalProperties: false
};

export const validateModel = ajv.compile<Model>(modelSchema);
