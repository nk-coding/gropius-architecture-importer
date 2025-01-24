import { Client } from "../graphql/client";
import { ComponentInfoFragment } from "../graphql/generated";
import { Component } from "../model/component";

export async function patchComponent(client: Client, current?: ComponentInfoFragment, expected?: Component) {

}