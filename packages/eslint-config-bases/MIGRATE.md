# From v5 to V6

**Release v6.0.0**: typescript-eslint v8 and typescript 5.6 support.

## Upgrade steps

### Install the latest

> Tip: If using nextjs, you might want force resolutions of `eslint-plugin-react` to `^5.0.0` to avoid conflicts.
> This can be done using the package.json resolutions (yarn) or overrides (npm, pnpm) field:
>
> ```json
> {
>   "resolutions": {
>     "eslint-plugin-react-hooks": "5.0.0"
>   }
> }
> ```
>

Then upgrade @eblgattitude/eslint-config-bases

```bash
yarn add --dev eslint@^8.57.0 @belgattitude/eslint-config-bases prettier

# In monorepos, better to explicitly install the following
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser

yarn install && yarn dedupe
```

### Update the config file

Be sure your `eslintrc.config.cjs` is up to date with the latest version of the config.
The important part is to have the parserOptions that have been changed:

```js
// eslint-disable-next-line @typescript-eslint/no-restricted-types
const {
  getDefaultIgnorePatterns,
} = require('@belgattitude/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  // settings: {},
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    // Group 1: recommended always
    '@belgattitude/eslint-config-bases/typescript',
    '@belgattitude/eslint-config-bases/simple-import-sort',
    '@belgattitude/eslint-config-bases/import-x',
    '@belgattitude/eslint-config-bases/regexp',
    '@belgattitude/eslint-config-bases/jest', // jest or similar (ie: vitest)

    // Group 2: Helps to avoid complexity (cyclomatic...)
    '@belgattitude/eslint-config-bases/sonar',

    // Group 3: When working with react
    '@belgattitude/eslint-config-bases/react',
    '@belgattitude/eslint-config-bases/react-query',
    '@belgattitude/eslint-config-bases/rtl',

    // Group 4: Performance related (ie: set vs includes...)
    '@belgattitude/eslint-config-bases/performance',

    // Group 5: Various tools (per project)
    '@belgattitude/eslint-config-bases/tailwind',
    '@belgattitude/eslint-config-bases/storybook',
    // '@belgattitude/eslint-config-bases/playwright',
    // "@belgattitude/eslint-config-bases/graphql-schema",

    // Group 6: Framework specifics
    'next/core-web-vitals',
    // - remix:  '@remix-run/eslint-config',
    // ...

    // '@belgattitude/eslint-config-bases/mdx',

    // Group 7: Visual/Sort consistency
    // Not recommended but can by applied on some projects
    // see https://github.com/azat-io/eslint-plugin-perfectionist
    //
    // "@belgattitude/eslint-config-bases/perfectionist",
    // "@belgattitude/eslint-config-bases/perfectionist-jsx",

    // Group 8: Formatter
    // Post configure the prettier base and run prettier
    // without conflicts thx to eslint-plugin-prettier
    '@belgattitude/eslint-config-bases/prettier-plugin',
    // Alternatively to the above if you're already running prettier
    // we can get a speed up by using on eslint-prettier-config
    // "@belgattitude/eslint-config-bases/prettier-config",
  ],
  rules: {
    // 'jsx-a11y/mouse-events-have-key-events': 'off',
  },
  overrides: [
  ],
};
```

### Run a lint test

```bash
yarn eslint . --ext .ts,.tsx,.js,.jsx,.mjs,.cjs,.mts,.cts
```

### Apply auto fixes


```bash
yarn eslint . --ext .ts,.tsx,.js,.jsx,.mjs,.cjs,.mts,.cts --fix
```
