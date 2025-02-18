import Ajv from "ajv/dist/jtd";
import { Model } from "./model/model";

const ajv = new Ajv();

const relationSchema = {
    properties: {
        template: { type: "string" },
        to: { type: "string" }
    },
    optionalProperties: {
        id: { type: "string", nullable: true },
        templatedFields: {
            values: {},
            nullable: true
        }
    }
};

const relationPartnerProperties = {
    template: { type: "string" }
};

const relationPartnerOptionalProperties = {
    id: { type: "string", nullable: true },
    templatedFields: {
        values: {},
        nullable: true
    },
    name: { type: "string", nullable: true },
    description: { type: "string", nullable: true },
    version: { type: "string", nullable: true },
    relations: {
        elements: relationSchema,
        nullable: true
    }
};

const interfaceSchema = {
    properties: {
        ...relationPartnerProperties
    },
    optionalProperties: {
        ...relationPartnerOptionalProperties
    }
};

const intraComponentDependencySpecificationSchema = {
    properties: {
        outgoing: {
            elements: { type: "string" }
        },
        incoming: {
            elements: { type: "string" }
        }
    },
    optionalProperties: {
        id: { type: "string", nullable: true },
        name: { type: "string", nullable: true },
        description: { type: "string", nullable: true },
        type: { type: "string", nullable: true }
    }
};

const componentSchema = {
    properties: {
        ...relationPartnerProperties
    },
    optionalProperties: {
        ...relationPartnerOptionalProperties,
        interfaces: {
            values: interfaceSchema,
            nullable: true
        },
        icds: {
            elements: intraComponentDependencySpecificationSchema,
            nullable: true
        }
    }
};

const modelSchema = {
    properties: {
        ref: {
            values: { type: "string" }
        },
        components: {
            values: componentSchema
        },
        name: { type: "string" }
    },
    optionalProperties: {
        description: { type: "string", nullable: true },
        id: { type: "string", nullable: true }
    }
};

export const validateModel = ajv.compile<Model>(modelSchema);
