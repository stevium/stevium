---
tags: web development wiki
---

[Monorepo](#) A repository that includes all elements for an application (or multiple applications) inside of a single repository including frontend code, backend code, and infrastructure definition.


To manage monorepo use `yarn` workspaces within `package.json`:
```json
{
  "workspaces": [
    "infrastructure",
    "webapp",
    "services/*"
  ]
}
```
Every `dir` is a separate `workspace`, which has their own `package.json`
```json
{
  "name": "@ps-serverless/infrastructure",
  "version": "0.1.0",
  "bin": {
    "infrastructure": "bin/infrastructure.js"
  },
  "scripts": { },
  "devDependencies": { },
  "dependencies": { }
}
```

### Adding a dep within a specific workspace
```shell
yarn workspace <workspace name> add <package name>
```
### Adding a dev dep within a specific workspace
```shell
yarn workspace <workspace name> add <package name> -D
```
### Adding a dep to the root of the monorepo (must be in root dir)
```shell
yarn add <package name> -W
```
# Install all dependencies (must be in root directory)
```shell
yarn
```
