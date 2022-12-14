# @belgattitude/eslint-config-bases

Composable eslint config bases for [my personal projects](https://github.com/belgattitude) and others.

![npm](https://img.shields.io/npm/v/@belgattitude/eslint-config-bases?style=for-the-badge)

## Features

- **Monorepo friendly:** Each workspace can have its own config.
- **Composable:** Compose your workspace eslint config from pre-defined bases.
- **Peace of mind:** Plugins does not need to be installed per workspaces, thx to [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch).
- **Performance!:** Plugins enabled on file conventions patterns to increase perf.

## Install

Add the following devDependencies to workspace (apps/packages in monorepo) or main project package.json.

```bash
$ yarn add --dev eslint @belgattitude/eslint-config-bases
```

> PS: if you use graphql rules, add the `@graphql-eslint/eslint-plugin` as
> well (not done by default as it comes with many transitive deps you might not need)

## Usage

Create an `./apps/my-app/.eslintrc.js` or `./apps/my-app/.eslintrc.cjs` )
file that extends any of the existing base configs. For example:

```javascript
require("@belgattitude/eslint-config-bases/patch/modern-module-resolution");

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
  ignorePatterns: ["**/node_modules", "**/.cache", "build", ".next"],
  extends: [
    "@belgattitude/eslint-config-bases/typescript",
    "@belgattitude/eslint-config-bases/sonar",
    "@belgattitude/eslint-config-bases/regexp",
    "@belgattitude/eslint-config-bases/react",
    "@belgattitude/eslint-config-bases/react-query",  
    "@belgattitude/eslint-config-bases/jest",
    "@belgattitude/eslint-config-bases/rtl",       
    // "@belgattitude/eslint-config-bases/graphql-schema",
    // "@belgattitude/eslint-config-bases/storybook",
    // "@belgattitude/eslint-config-bases/playwright",

    // Add specific rules for your framework if needed.
    // ie:
    // - nextjs: 'next/core-web-vitals',
    // - remix:  '@remix-run/eslint-config',
    // ...

    // Post configure the prettier base and run prettier
    // without conflicts thx to eslint-plugin-prettier
    "@belgattitude/eslint-config-bases/prettier-plugin",
    // Alternatively to the above if you're already running prettier
    // we can get a speed up by using on eslint-prettier-config
    // "@belgattitude/eslint-config-bases/prettier-config",
  ],
  rules: {
    // Specific global rules for your app or package
    // Might help is next eslint plugin does not locate pages
    // https://nextjs.org/docs/messages/no-html-link-for-pages#pagesdir
    // '@next/next/no-html-link-for-pages': ['error', `${__dirname}/src/pages`],
  },
  overrides: [
    // Specific file rules for your app or package
  ],
};
```

> **Tip:** "@belgattitude/eslint-config-bases/prettier" must be set at the end to disable any
> conflicting rules.

## Bases

You can find the bases in [./src/bases](./src/bases).

| Base                                              | Match convention                  | Scope                                                           |
|:--------------------------------------------------| :-------------------------------- |:----------------------------------------------------------------|
| [typescript](./src/bases/typescript.js)           | _all_                             | Naming conventions, consistent imports, import sorting...       |
| [sonar](./src/bases/sonar.js)                     | `*.{js,jsx,ts,tsx}`               | Keep levels of code complexity sane. (excl test and stories)    |
| [regexp](./src/bases/regexp.js)                   | `*.{js,jsx,jsx,tsx}`              | Keep regexp consistent and safer.                               |
| [react](./src/bases/react.js)                     | `*.{jsx,tsx}`                     | Recommendations for react, react-hooks and jsx projects.        |
| [react-query](./src/bases/react-query.js)         | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Enforce "recommended" react-query usage.                        |
| [jest](./src/bases/jest.js)                       | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Catch inconsistencies or error in jest tests.                   |
| [rtl](./src/bases/rtl.js)                         | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Potential errors / deprecations in react-testing-library tests. |
| [graphql-schema](./src/bases/graphql-schema.js)   | `*.graphql`                       | Ensure validity of graphql schema files.                        |
| [storybook](./src/bases/storybook.js)             | `*.stories.{ts,tsx,mdx}`          | Potential errors / deprecations in stories.                     |
| [playwright](./src/bases/playwright.js)           | `**/e2e/**/*.test.{js,ts}`        | Keep "recommended" playwright usage.                            |
| [prettier-plugin](./src/bases/prettier-plugin.js) | _all_                             | Post configure eslint for prettier compatibility.               |

> **Notes**:
>
> - The order is important. Some bases will disable or tune previously defined
>   rules. For example the [react base](./src/bases/react.js) will tune the naming conventions
>   for function components and increase recommended cognitive complexity. The [typescript base](./src/bases/typescript.js)
>   will also relax conventions for javascript files.
>
> - Based on filename conventions some rules are relaxed or disabled to avoid false positives and
>   keep a good level of performance. For example the [sonar base](./src/bases/sonar.js) won't run on
>   test and storybook files. If you work on different conventions the patterns must be updated.

## Prettier integration

Two ways to work with prettier.

- `@belgattitude/eslint-config-bases/prettier-plugin` - eslint will run prettier under the hood 
- `@belgattitude/eslint-config-bases/prettier-config` - eslint will just disable some conflicting rules (so you'll need to run prettier after)

The first method is recommended for simplicity. For best perf use the cache option to run eslint. 

Tune the behaviour by creating a config in ` .prettierrc.js`

```javascript
// @ts-check
const {
  getPrettierConfig,
} = require("@belgattitude/eslint-config-bases/helpers");

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...getPrettierConfig(),
  overrides: [
    // whatever you need
  ],
};
```

> **Tip**: You can tune the provided [prettier.base.config](./src/prettier.base.config.js) for your own needs.

## Notes

### Typescript

Generic typescript project, mostly based on

| Type/Plugin                                                                                      | Comment                                                                      |
| :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| [eslint:recommended](https://eslint.org/docs/rules/)                                             | The basics for code linting.                                                 |
| [@typescript-eslint/recommended](https://typescript-eslint.io/rules/)                            | The basics for typescript.                                                   |
| [@typescript-eslint/consistent-type](https://typescript-eslint.io/rules/consistent-type-imports) | Use TS 3.8+ imports/exports, helps with [esbuild](https://esbuild.github.io) |
| [@typescript-eslint/naming-convention](https://typescript-eslint.io/rules/naming-convention)     |                                                                              |
| [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)                        | Order imports                                                                |

## Sonarjs

| Type/Plugin                                                                               | Comment                      |
| :---------------------------------------------------------------------------------------- | :--------------------------- |
| [eslint-plugin-sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs) | Help to keep complexity sane |

### React

| Type/Plugin                                                                                                             | Comment                                  |
| :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| [eslint-plugin-react/recommended](https://github.com/yannickcr/eslint-plugin-react)                                     |                                          |
| [eslint-plugin-react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) |                                          |
| [eslint-plugin-jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                              | Helps to produce accessibility-ready jsx |

### Jest

| Type/Plugin                                                                            | Comment                     |
| :------------------------------------------------------------------------------------- | :-------------------------- |
| [eslint-plugin-jest/recommended](https://github.com/jest-community/eslint-plugin-jest) | Jest recommended practices. |

### React Testing Library

| Type/Plugin                                                                                                   | Comment                               |
| :------------------------------------------------------------------------------------------------------------ | :------------------------------------ |
| [eslint-plugin-testing-library/recommended](https://github.com/testing-library/eslint-plugin-testing-library) | Ease when using react-testing-library |

### Regexp

| Type/Plugin                                                                           | Comment |
| :------------------------------------------------------------------------------------ | :------ |
| [eslint-plugin-regexp/recommended](https://github.com/ota-meshi/eslint-plugin-regexp) |         |

### Etc

...
