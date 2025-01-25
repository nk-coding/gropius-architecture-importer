# Gropius Architecture Generator

## Usage
```sh
npm i
npm run build
npm start <file_path> <client_id> <client_secret> [gropius_endpoint]
```

Note: this script modifies the provided file! Do not remove the automatically inserted ids, these are necessary for lookup. Removing them in most cases removes the old element and creates a new one.
Limitation: updating the target of a relation is currently not supported. In this case, remove the id to force the script to generate a new relation and remove the old one.

## Example

Note: template ids need to be entered manually

```yaml
name: ExampleProject
ref:
  Microservice: TODO
  REST: TODO
  Calls: TODO
components:
  HelloWorld:
    template: Microservice
    interfaces:
      REST:
        template: REST
      REST2:
        template: REST
    icds:
      - outgoing:
          - REST
        incoming:
          - REST2
  GoodbyeWorld:
    template: Microservice
    relations:
      - to: HelloWorld
        template: Calls
      - to: HelloWorld.REST
        template: Calls
```