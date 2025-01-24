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

const relationPartnerSchema = {
    type: "object",
    properties: {
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
    },
    required: ["template"],
    additionalProperties: false
};

const componentSchema = {
    ...relationPartnerSchema
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
        name: { type: "string"},
        description: { type: "string", nullable: true },
        id: { type: "string", nullable: true }
    },
    required: ["ref", "components", "name"],
    additionalProperties: false
};

export const validateModel = ajv.compile<Model>(modelSchema);
