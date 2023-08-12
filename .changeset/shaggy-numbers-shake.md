---
'@belgattitude/eslint-config-bases': major
---

Update to typescript eslint v6 strict

## Features

See https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/

The latest version activates the following recommendations:

- @typescript-eslint/recommended-type-checked
- @typescript-eslint/stylistic-type-checked

By default [@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions/) 
has been disabled. To activate add it to the rules:

```javascript
module.exports = {
  "rules": {
    "@typescript-eslint/consistent-type-definitions": "error"
  }
};
```

## Upgrade

- update your `.eslintrc.cjs` to explicitly set `parser: '@typescript-eslint/parser'`.
- tsconfig.json: add `.eslintrc.*s`to your includes.
- if eslint is configured with cache -> clear it
- run `yarn lint` to list new errors.
- run `yarn lint --fix` to attempt an autofix.

## Troubleshoot

### Parser error

```
/<project>/.eslintrc.cjs
  0:0  error  Parsing error: ESLint was configured to run on `<tsconfigRootDir>/.eslintrc.cjs` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
```

Link: https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file

Add `.eslintrc.*s` to your tsconfig included files. For example:

```json5
{
  "exclude": ["**/node_modules", ".next", "**/.*/*"],
  "include": [
    ".eslintrc.*s",
    // "next-env.d.ts",
    // "**/*.ts",
    // "**/*.tsx",
    // "**/*.js",
    // "**/*.jsx",
    // "**/*.cjs",
    // "**/*.mjs",
    // "**/*.json",
    // ".next/types/**/*.ts",
    // ".storybook/**/*.ts",
    // ".storybook/**/*.tsx"
  ]
}
```


