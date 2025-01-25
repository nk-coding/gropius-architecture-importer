import * as fs from "fs";
import { useClient } from "./graphql/client";
import { parse, stringify } from "yaml";
import { validateModel } from "./validator";
import { patchProject } from "./patcher/project";

function readFileSyncAsYAML(filePath: string): any {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return parse(fileContent);
}

if (process.argv.length !== 5 && process.argv.length !== 6) {
    console.error("Usage: npm start <file_path> <client_id> <client_secret> [gropius_endpoint]");
    process.exit(1);
}

const filePath = process.argv[2];
const clientId = process.argv[3];
const clientSecret = process.argv[4];
const url = process.argv[5] || "http://localhost:4200";

let model: any;

try {
    model = readFileSyncAsYAML(filePath);
} catch (error) {
    console.error("Error reading file:", error);
    process.exit(1);
}
if (!validateModel(model)) {
    throw validateModel.errors;
}
fetch(new URL("/auth/oauth/token", url).toString(), {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials"
    })
})
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Failed to authenticate: ${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then(async (data) => {
        const authToken = data.access_token as string;
        const client = useClient(authToken, new URL("/api/graphql", url).toString());
        try {
            await patchProject(client, model);
        } finally {
            fs.writeFileSync(filePath, stringify(model, null, 2));
        }
    })
    .catch((e) => {
        console.error("Error processing architecture:", e);
        process.exit(1);
    });
