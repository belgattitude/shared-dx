My shared dx

## Structure

```
.
└── packages
    └── eslint-config-bases
```

## Packages

| Name                                  | Description                                           | Version |
|---------------------------------------|-------------------------------------------------------| ------- |
| [@belgattitude/eslint-config-bases](https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases) | Opinionated eslint config bases for all project types | <img alt="Codecov" src="https://img.shields.io/npm/v/@belgattitude/eslint-config-bases.svg?style=for-the-badge&labelColor=000000" /> |


## Scripts

| Name                         | Description                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `yarn g:changeset`           | Add a changeset to declare a new version                                                                                             |
| `yarn g:typecheck`           | Run typechecks in all workspaces                                                                                                     |
| `yarn g:prettier-check`      | Run prettier checks                                                                                                                  |
| `yarn g:prettier-fix`        | Fix all prettier errors                                                                                                              |
| `yarn g:lint`                | Display linter issues in all workspaces                                                                                              |
| `yarn g:lint --fix`          | Attempt to run linter auto-fix in all workspaces                                                                                     |
| `yarn g:test`                | Run unit and e2e tests in all workspaces                                                                                             |
| `yarn g:test-unit`           | Run unit tests in all workspaces                                                                                                     |
| `yarn g:build`               | Run build in all workspaces                                                                                                          |
| `yarn g:clean`               | Clean builds in all workspaces                                                                                                       |
| `yarn g:check-dist`          | Ensure build dist files passes es2017 (run `g:build` first).                                                                         |
| `yarn g:check-size`          | Ensure build files are within size limit (run `g:build` first).                                                                      |
| `yarn g:build-doc`           | Build documentation (generally api doc)                                                                                              |
| `yarn clean:global-cache`    | Clean tooling caches (eslint, jest...)                                                                                               |
| `yarn deps:check --dep dev`  | Will print what packages can be upgraded globally (see also [.ncurc.yml](https://github.com/sortlist/packages/blob/main/.ncurc.yml)) |
| `yarn deps:update --dep dev` | Apply possible updates (run `yarn install && yarn dedupe` after)                                                                     |
| `yarn check:install`         | Verify if there's no peer-deps missing in packages                                                                                   |
| `yarn dedupe`                | Built-in yarn deduplication of the lock file                                                                                         |
