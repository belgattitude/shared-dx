# @belgattitude/eslint-config-bases

Composable eslint config bases for [my personal projects](https://github.com/belgattitude) and others.

[![npm](https://img.shields.io/npm/v/@belgattitude/eslint-config-bases?style=for-the-badge)](https://www.npmjs.com/package/@belgattitude/eslint-config-bases)
[![npm](https://img.shields.io/npm/dm/@belgattitude/eslint-config-bases?style=for-the-badge)](https://www.npmjs.com/package/@belgattitude/eslint-config-bases?activeTab=versions)

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

> PS: To keep the size low, if you use the following plugins: 
> - **graphql**: `yarn add --dev @graphql-eslint/eslint-plugin` 
> - **mdx**: `yarn add --dev eslint-plugin-mdx`.
> - **tailwind**: `yarn add --dev eslint-plugin-tailwindcss`.
>
> In one line
> ```bash
> yarn add --dev @graphql-eslint/eslint-plugin \
>                eslint-plugin-mdx \
>                eslint-plugin-tailwindcss
> ```

## Usage

Create an `./apps/my-app/.eslintrc.cjs` 
file that extends any of the existing base configs. For example:

```javascript
// next line only required if you're using a monorepo
require("@belgattitude/eslint-config-bases/patch/modern-module-resolution");

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
  },
  ignorePatterns: ["**/node_modules", "**/.cache", "build", ".next"],
  extends: [
      
    // Group 1: recommended always  
      
    "@belgattitude/eslint-config-bases/typescript",
    "@belgattitude/eslint-config-bases/regexp",
    "@belgattitude/eslint-config-bases/jest", // jest or similar (ie: vitest)
      
    // Group 2: Helps to avoid complexity (cyclomatic...)
    "@belgattitude/eslint-config-bases/sonar",
      
    // Group 3: When working with react  
    "@belgattitude/eslint-config-bases/react",
    "@belgattitude/eslint-config-bases/react-query",
    "@belgattitude/eslint-config-bases/rtl",
      
    // Group 4: Performance related (ie: set vs includes...)
    "@belgattitude/eslint-config-bases/performance",
      
    // Group 5: Various tools (per project)
    // '@belgattitude/eslint-config-bases/tailwind',  
    // "@belgattitude/eslint-config-bases/storybook",
    // "@belgattitude/eslint-config-bases/playwright",
    // "@belgattitude/eslint-config-bases/graphql-schema",
    // "@belgattitude/eslint-config-bases/mdx",  

    // Group 6: Framework specifics
    // ie:
    // - nextjs: 'next/core-web-vitals',
    // - remix:  '@remix-run/eslint-config',
    // ...

    // Group 7: Visual/Sort consistency  
    // Not recommended but can by applied on some projects
    // see https://github.com/azat-io/eslint-plugin-perfectionist
    //  
    // "@belgattitude/eslint-config-bases/perfectionist",
    // "@belgattitude/eslint-config-bases/perfectionist-jsx",


    // Group 8: Formatter  
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

    // https://typescript-eslint.io/rules/consistent-type-definitions/  
    // '@typescript-eslint/consistent-type-definitions': 'error'  
  },
  overrides: [
    // Specific file rules for your app or package
    /*  
    {
      files: ['next.config.mjs'],
      rules: {
          'import/order': 'off',
          '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['tailwind.config.ts'],
      rules: {
          '@typescript-eslint/naming-convention': 'off',
      },
    },    
    */
  ],
};
```

Ensure your tsconfig.json includes the .eslintrc.cjs file:

```json5
{
  "exclude": ["**/node_modules", "**/.*/*"],
  "include": [
    ".eslintrc.*s", // <-- add this
    // rest of the includes
  ]
}
```


> **Tip:** 
> 
> - **Prettier**: `@belgattitude/eslint-config-bases/prettier-plugin` and `@belgattitude/eslint-config-bases/prettier-config` are
>   mutually exclusives. Choose one. The `prettier-config` suppose that you run prettier independently. The `prettier-plugin`
>   will run prettier for you. Easiest the `prettier-plugin`, fastest `prettier-config` (this mostly depends
>   if you set up and persist caches as well)
> 
> - **Performance**: Some rules are known to be slow (ie: `import/namespace`...). Slowest identified rules are disabled depending
>   on context (ie: `*.test.tsx?` might not need everything). Depending on project
>   it's possible to disable entirely some slow rules (ie: `'import/namespace': 'off'`). A good tip
>   run eslint with the `TIMING=1` to identify slow rules.
> 

## Bases

You can find the bases in [./src/bases](./src/bases).

| Base                                                | Match convention                  | Scope                                                           |
|:----------------------------------------------------| :-------------------------------- |:----------------------------------------------------------------|
| [typescript](./src/bases/typescript.js)             | _all_                             | Naming conventions, consistent imports, import sorting...       |
| [sonar](./src/bases/sonar.js)                       | `*.{js,jsx,ts,tsx}`               | Keep levels of code complexity sane. (excl test and stories)    |
| [regexp](./src/bases/regexp.js)                     | `*.{js,jsx,jsx,tsx}`              | Keep regexp consistent and safer.                               |
| [react](./src/bases/react.js)                       | `*.{jsx,tsx}`                     | Recommendations for react, react-hooks and jsx projects.        |
| [react-query](./src/bases/react-query.js)           | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Enforce "recommended" react-query usage.                        |
| [jest](./src/bases/jest.js)                         | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Catch inconsistencies or error in jest tests.                   |
| [rtl](./src/bases/rtl.js)                           | `**/?(*.)+(test).{js,jsx,ts,tsx}` | Potential errors / deprecations in react-testing-library tests. |
| [graphql-schema](./src/bases/graphql-schema.js)     | `*.graphql`                       | Ensure validity of graphql schema files.                        |
| [mdx](./src/bases/mdx.js)                           | _all_                             | Mdx validation                                                  |
| [storybook](./src/bases/storybook.js)               | `*.stories.{ts,tsx,mdx}`          | Potential errors / deprecations in stories.                     |
| [playwright](./src/bases/playwright.js)             | `**/e2e/**/*.test.{js,ts}`        | Keep "recommended" playwright usage.                            |
| [prettier-plugin](./src/bases/prettier-plugin.js)   | _all_                             | Post configure eslint for prettier compatibility.               |

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

## Cyclic deps

Due to performance considerations the [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md) isn't enabled by default. This rule
can prevent subtle and hard to debug bugs. Depending on the project you can enable it either
by setting and env variable `ESLINT_IMPORT_NO_CYCLE=true yarn lint` (will default to `import/no-cycle: 2`) or by adding it
to the extended rules.

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

### Mdx

To tune the behaviour, you can add setting in the top level config 

```js
module.exports = {
    settings: {
        'mdx/code-blocks': true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        'mdx/language-mapper': {},
    },
}
```

### Etc

...
