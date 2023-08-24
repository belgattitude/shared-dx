# @belgattitude/eslint-config-bases

## 2.3.0

### Minor Changes

- [#333](https://github.com/belgattitude/shared-dx/pull/333) [`989f01e`](https://github.com/belgattitude/shared-dx/commit/989f01eec5cf2243838c8b18d18e34180277b277) Thanks [@belgattitude](https://github.com/belgattitude)! - Relax misused promises

- [#333](https://github.com/belgattitude/shared-dx/pull/333) [`989f01e`](https://github.com/belgattitude/shared-dx/commit/989f01eec5cf2243838c8b18d18e34180277b277) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

### Patch Changes

- [#333](https://github.com/belgattitude/shared-dx/pull/333) [`989f01e`](https://github.com/belgattitude/shared-dx/commit/989f01eec5cf2243838c8b18d18e34180277b277) Thanks [@belgattitude](https://github.com/belgattitude)! - Relax some strict rules for test files

## 2.2.0

### Minor Changes

- [#317](https://github.com/belgattitude/shared-dx/pull/317) [`7098b27`](https://github.com/belgattitude/shared-dx/commit/7098b27f3d171e310937396837339a8c3b0db256) Thanks [@belgattitude](https://github.com/belgattitude)! - Relax restrict-template-expressions to allow number, boolean, any, never and nullish

## 2.1.1

### Patch Changes

- [`d768869`](https://github.com/belgattitude/shared-dx/commit/d7688696d068dfbe26e420e40a9f382b0ac4ed94) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable typescript parser for mdx

## 2.1.0

### Minor Changes

- [#313](https://github.com/belgattitude/shared-dx/pull/313) [`bcf21d7`](https://github.com/belgattitude/shared-dx/commit/bcf21d79d78fb6c152885b9d23936b4a3294bb7e) Thanks [@belgattitude](https://github.com/belgattitude)! - Allow static in unbound-method

- [#312](https://github.com/belgattitude/shared-dx/pull/312) [`7f9b143`](https://github.com/belgattitude/shared-dx/commit/7f9b143090c8627744e6c4ff3d4a94a5bc4348d7) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable @typescript-eslint/unbound-method for test files

- [#312](https://github.com/belgattitude/shared-dx/pull/312) [`7f9b143`](https://github.com/belgattitude/shared-dx/commit/7f9b143090c8627744e6c4ff3d4a94a5bc4348d7) Thanks [@belgattitude](https://github.com/belgattitude)! - Add jest/unbound-method for test files

### Patch Changes

- [#314](https://github.com/belgattitude/shared-dx/pull/314) [`bffc1b1`](https://github.com/belgattitude/shared-dx/commit/bffc1b1ef67b9feedab4135e4e39456f5574aa22) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable type checked for mdx and mjs

## 2.0.0

### Major Changes

- [#310](https://github.com/belgattitude/shared-dx/pull/310) [`bb2a81e`](https://github.com/belgattitude/shared-dx/commit/bb2a81ed97bdfda4cc9a3837b156eceb9d65954c) Thanks [@belgattitude](https://github.com/belgattitude)! - Update to typescript eslint v6 strict

  ## Features

  See https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/

  The latest version activates the following recommendations:

  - @typescript-eslint/recommended-type-checked
  - @typescript-eslint/stylistic-type-checked

  By default [@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions/)
  has been disabled. To activate add it to the rules:

  ```javascript
  module.exports = {
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'error',
    },
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
    exclude: ['**/node_modules', '.next', '**/.*/*'],
    include: [
      '.eslintrc.*s',
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
    ],
  }
  ```

## 1.39.0

### Minor Changes

- [#298](https://github.com/belgattitude/shared-dx/pull/298) [`048e66b`](https://github.com/belgattitude/shared-dx/commit/048e66bfcf91f848c84f12ed5dcbe56bda1f25e9) Thanks [@belgattitude](https://github.com/belgattitude)! - Add .turbo and .out as default ignored patterns

## 1.38.0

### Minor Changes

- [#296](https://github.com/belgattitude/shared-dx/pull/296) [`a70be44`](https://github.com/belgattitude/shared-dx/commit/a70be44b9031da2384df0dc951caf9fa0919e04c) Thanks [@belgattitude](https://github.com/belgattitude)! - Remove naming conventions

## 1.37.0

### Minor Changes

- [#295](https://github.com/belgattitude/shared-dx/pull/295) [`f5151de`](https://github.com/belgattitude/shared-dx/commit/f5151de8c1a3c03522aa194fcbfa971350a2972e) Thanks [@belgattitude](https://github.com/belgattitude)! - Make "eslint-plugin-tailwindcss" optional

  To enable

  ```bash
  yarn add --dev eslint-plugin-tailwindcss
  ```

  In eslint config,

  ```
  module.exports = {
    extends: [
      // ....
      '@belgattitude/eslint-config-bases/tailwind',
      // ....
    ],
  };
  ```

- [#293](https://github.com/belgattitude/shared-dx/pull/293) [`1c1a931`](https://github.com/belgattitude/shared-dx/commit/1c1a9318261f37967aaf7ab13b9a5bbf60fc4fa2) Thanks [@belgattitude](https://github.com/belgattitude)! - Add example app to run lint test

- [#293](https://github.com/belgattitude/shared-dx/pull/293) [`1c1a931`](https://github.com/belgattitude/shared-dx/commit/1c1a9318261f37967aaf7ab13b9a5bbf60fc4fa2) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest eslint plugins

## 1.36.0

### Minor Changes

- [#282](https://github.com/belgattitude/shared-dx/pull/282) [`1908e87`](https://github.com/belgattitude/shared-dx/commit/1908e87a3f190e950bf35c7153c6d44d2452d11c) Thanks [@belgattitude](https://github.com/belgattitude)! - Add support for prettier 3.0

## 1.35.1

### Patch Changes

- [#273](https://github.com/belgattitude/shared-dx/pull/273) [`22d01ec`](https://github.com/belgattitude/shared-dx/commit/22d01eccda47b7e65b95c029e2910eabc715350d) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest eslint plugins patches

## 1.35.0

### Minor Changes

- [`c3c7204`](https://github.com/belgattitude/shared-dx/commit/c3c7204fa0290faff44a2437aa1e702b1500a76f) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest eslint plugins (minor)

## 1.34.0

### Minor Changes

- [#255](https://github.com/belgattitude/shared-dx/pull/255) [`aa16785`](https://github.com/belgattitude/shared-dx/commit/aa167851a94a541b0bfa4387b5f0ea787aa6a2a3) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest eslint plugin patch

## 1.33.0

### Minor Changes

- [`75963c8`](https://github.com/belgattitude/shared-dx/commit/75963c8ce2e096efaecd275a23e5e024ee7b1acf) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest eslint plugins

## 1.32.0

### Minor Changes

- [#236](https://github.com/belgattitude/shared-dx/pull/236) [`e7ebd5b`](https://github.com/belgattitude/shared-dx/commit/e7ebd5b54031f165c883cdbd641515049f000b6b) Thanks [@belgattitude](https://github.com/belgattitude)! - Update rushstack/eslint-patch to latest

## 1.31.0

### Minor Changes

- [#233](https://github.com/belgattitude/shared-dx/pull/233) [`e948649`](https://github.com/belgattitude/shared-dx/commit/e948649b393f73bbce6cc4444c3bd09f3e6f136d) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint plugins to latest

## 1.30.0

### Minor Changes

- [#198](https://github.com/belgattitude/shared-dx/pull/198) [`4545ba5`](https://github.com/belgattitude/shared-dx/commit/4545ba5537b66b716946129bcc6f8d9da47be148) Thanks [@belgattitude](https://github.com/belgattitude)! - Add storybook-static and .yarn as default ignored paths

## 1.29.0

### Minor Changes

- [#195](https://github.com/belgattitude/shared-dx/pull/195) [`6e26355`](https://github.com/belgattitude/shared-dx/commit/6e26355a64dec8ea04df6c6582180b12e677ba73) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest plugins

## 1.28.0

### Minor Changes

- [#189](https://github.com/belgattitude/shared-dx/pull/189) [`ea7923d`](https://github.com/belgattitude/shared-dx/commit/ea7923d2a12b25244be5bdf51960535e8ab2b4c5) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest plugin versions

## 1.27.0

### Minor Changes

- [#183](https://github.com/belgattitude/shared-dx/pull/183) [`c230248`](https://github.com/belgattitude/shared-dx/commit/c2302489fd625f2cfd95f7d7300854efce5b7a7d) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest eslint plugins

## 1.26.0

### Minor Changes

- [#174](https://github.com/belgattitude/shared-dx/pull/174) [`3336533`](https://github.com/belgattitude/shared-dx/commit/3336533ccf5d0cb41e0ccdd5f40eb88a1ef16b3b) Thanks [@belgattitude](https://github.com/belgattitude)! - Relax naming conventions for storybook files

- [#174](https://github.com/belgattitude/shared-dx/pull/174) [`3336533`](https://github.com/belgattitude/shared-dx/commit/3336533ccf5d0cb41e0ccdd5f40eb88a1ef16b3b) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest plugin deps

## 1.25.1

### Patch Changes

- [#172](https://github.com/belgattitude/shared-dx/pull/172) [`bbbdf1d`](https://github.com/belgattitude/shared-dx/commit/bbbdf1daee41f98107b7b94e6693d99b3909bec7) Thanks [@belgattitude](https://github.com/belgattitude)! - Fix some peer-ranges (avoid duplicates)

## 1.25.0

### Minor Changes

- [#170](https://github.com/belgattitude/shared-dx/pull/170) [`8e16bf5`](https://github.com/belgattitude/shared-dx/commit/8e16bf5109784ce5c22b10096cf19cc315127e45) Thanks [@belgattitude](https://github.com/belgattitude)! - Support for typescript 5

## 1.24.0

### Minor Changes

- [#163](https://github.com/belgattitude/shared-dx/pull/163) [`013fdf0`](https://github.com/belgattitude/shared-dx/commit/013fdf058aee6fbbe46531daf384312a0f958ed5) Thanks [@belgattitude](https://github.com/belgattitude)! - Make import/no-cycle opt-in through process.env.ESLINT_IMPORT_NO_CYCLE=true

  Due to performance considerations the [import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md) isn't enabled by default. This rule
  can prevent subtle and hard to debug bugs. Depending on the project you can enable it either
  by setting and env variable `ESLINT_IMPORT_NO_CYCLE=true yarn lint` (will default to `import/no-cycle: 2`) or by adding it
  to the extended rules.

- [#163](https://github.com/belgattitude/shared-dx/pull/163) [`013fdf0`](https://github.com/belgattitude/shared-dx/commit/013fdf058aee6fbbe46531daf384312a0f958ed5) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest versions of plugins

## 1.23.0

### Minor Changes

- [#156](https://github.com/belgattitude/shared-dx/pull/156) [`7d85bd1`](https://github.com/belgattitude/shared-dx/commit/7d85bd1c99e5c11e4db18603ebe8e39dc357e087) Thanks [@belgattitude](https://github.com/belgattitude)! - Add import/no-cycle by default

## 1.22.0

### Minor Changes

- [#154](https://github.com/belgattitude/shared-dx/pull/154) [`9b41d4c`](https://github.com/belgattitude/shared-dx/commit/9b41d4c8958910699e5a25f163bd0fc116a45583) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest linter deps

## 1.21.0

### Minor Changes

- [#149](https://github.com/belgattitude/shared-dx/pull/149) [`b8aca28`](https://github.com/belgattitude/shared-dx/commit/b8aca2837fd64074987de24599b212b719c00de8) Thanks [@belgattitude](https://github.com/belgattitude)! - Linters to latest

## 1.20.2

### Patch Changes

- [#137](https://github.com/belgattitude/shared-dx/pull/137) [`2c73f58`](https://github.com/belgattitude/shared-dx/commit/2c73f58eb542cc8c67252b32a06d6593e187aeaa) Thanks [@belgattitude](https://github.com/belgattitude)! - Fix mdx files override

## 1.20.1

### Patch Changes

- [#135](https://github.com/belgattitude/shared-dx/pull/135) [`ac8cc27`](https://github.com/belgattitude/shared-dx/commit/ac8cc27bf71de0fe73a168be1549f7119ab5a134) Thanks [@belgattitude](https://github.com/belgattitude)! - MDX, fix incompatibility with consistent import rules

## 1.20.0

### Minor Changes

- [#133](https://github.com/belgattitude/shared-dx/pull/133) [`597ea92`](https://github.com/belgattitude/shared-dx/commit/597ea92a4f9cfd4dc602bdd761ef68f8d22c9d21) Thanks [@belgattitude](https://github.com/belgattitude)! - Add support for eslint-plugin-mdx

## 1.19.0

### Minor Changes

- [#130](https://github.com/belgattitude/shared-dx/pull/130) [`78ff77e`](https://github.com/belgattitude/shared-dx/commit/78ff77e90f86035ae211ad23c8f2393820d96231) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest eslint plugins

## 1.18.0

### Minor Changes

- [#120](https://github.com/belgattitude/shared-dx/pull/120) [`eb56093`](https://github.com/belgattitude/shared-dx/commit/eb56093a391bcdc0cc3f56c6d9bc39d451201969) Thanks [@belgattitude](https://github.com/belgattitude)! - Update linters to latest

## 1.17.2

### Patch Changes

- [#111](https://github.com/belgattitude/shared-dx/pull/111) [`8779578`](https://github.com/belgattitude/shared-dx/commit/877957854cc6673246d04133e0fc6d4226103dca) Thanks [@belgattitude](https://github.com/belgattitude)! - Make tailwind peer-deps optional

## 1.17.1

### Patch Changes

- [#109](https://github.com/belgattitude/shared-dx/pull/109) [`49f23cc`](https://github.com/belgattitude/shared-dx/commit/49f23cca814a101fd059c402bc754586cefcdb81) Thanks [@belgattitude](https://github.com/belgattitude)! - Remove wrong deps on react-testing-library

- [#109](https://github.com/belgattitude/shared-dx/pull/109) [`49f23cc`](https://github.com/belgattitude/shared-dx/commit/49f23cca814a101fd059c402bc754586cefcdb81) Thanks [@belgattitude](https://github.com/belgattitude)! - Fix optional peer-dependencies on prettier

## 1.17.0

### Minor Changes

- [#102](https://github.com/belgattitude/shared-dx/pull/102) [`7bb12f7`](https://github.com/belgattitude/shared-dx/commit/7bb12f7a0f8f98ca61ddcb92ba5761ed80c52362) Thanks [@belgattitude](https://github.com/belgattitude)! - Performance by disabling import/namespace by default (up to 30%)

## 1.16.0

### Minor Changes

- [#100](https://github.com/belgattitude/shared-dx/pull/100) [`4836479`](https://github.com/belgattitude/shared-dx/commit/4836479c4d8a7cb9c4b90ea00b5a016ed04ca263) Thanks [@belgattitude](https://github.com/belgattitude)! - Stricter defaults for eslint-plugin-import

## 1.15.0

### Minor Changes

- [#98](https://github.com/belgattitude/shared-dx/pull/98) [`850da75`](https://github.com/belgattitude/shared-dx/commit/850da753decb2b505e1b90189a3dd6aa76c72719) Thanks [@belgattitude](https://github.com/belgattitude)! - Deps to latest

## 1.14.0

### Minor Changes

- [#91](https://github.com/belgattitude/shared-dx/pull/91) [`93b431a`](https://github.com/belgattitude/shared-dx/commit/93b431a3273b49b39529c31d94943c67b24608ff) Thanks [@belgattitude](https://github.com/belgattitude)! - Add support foo @tanstack/eslint-plugin-query

  ```js
  module.exports = {
    extends: [
      // ALL enabled
      '@belgattitude/eslint-config-bases/react',
      // ...
      // Simply add
      '@belgattitude/eslint-config-bases/react-query',
    ],
    rules: {},
    overrides: [],
  };
  ```

- [#91](https://github.com/belgattitude/shared-dx/pull/91) [`93b431a`](https://github.com/belgattitude/shared-dx/commit/93b431a3273b49b39529c31d94943c67b24608ff) Thanks [@belgattitude](https://github.com/belgattitude)! - Make @graphql-eslint/eslint-plugin an optional peer-dep

  This is to keep the installation light when you don't have
  usage of graphql.

## 1.13.0

### Minor Changes

- [#75](https://github.com/belgattitude/shared-dx/pull/75) [`31a903d`](https://github.com/belgattitude/shared-dx/commit/31a903deb8ee02c850fe9b9f46637dd381acb6fe) Thanks [@belgattitude](https://github.com/belgattitude)! - Support typescript 4.9

## 1.12.0

### Minor Changes

- [#58](https://github.com/belgattitude/shared-dx/pull/58) [`f1b1b48`](https://github.com/belgattitude/shared-dx/commit/f1b1b4886f2d7267232189d9a9e97938dbff3e46) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint to 8.28 and new minimum versions

## 1.11.0

### Minor Changes

- [#53](https://github.com/belgattitude/shared-dx/pull/53) [`8c4821c`](https://github.com/belgattitude/shared-dx/commit/8c4821c792c55f048ab851c5136f3f7d984d16b9) Thanks [@belgattitude](https://github.com/belgattitude)! - All dependencies to latest

## 1.10.0

### Minor Changes

- [#23](https://github.com/belgattitude/shared-dx/pull/23) [`d4cbdc1`](https://github.com/belgattitude/shared-dx/commit/d4cbdc105b62dc341c5b574fbeab46bd2ba0c7bc) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript eslint to latest

## 1.9.0

### Minor Changes

- [#19](https://github.com/belgattitude/shared-dx/pull/19) [`f0054fb`](https://github.com/belgattitude/shared-dx/commit/f0054fb6e53f5901fd0d696326755ffa8bbf87c7) Thanks [@belgattitude](https://github.com/belgattitude)! - rushstack patch to 1.2.0

## 1.8.0

### Minor Changes

- [#16](https://github.com/belgattitude/shared-dx/pull/16) [`3d609eb`](https://github.com/belgattitude/shared-dx/commit/3d609eb789c972b0cf59fd9b3f6cfe204a9bcfbf) Thanks [@belgattitude](https://github.com/belgattitude)! - Support for mjs files

## 1.7.0

### Minor Changes

- [#15](https://github.com/belgattitude/shared-dx/pull/15) [`94dbc02`](https://github.com/belgattitude/shared-dx/commit/94dbc0272482f694025827a85810a398d210a000) Thanks [@belgattitude](https://github.com/belgattitude)! - Enable eslint-prettier-plugin as option

### Patch Changes

- [`7b54f27`](https://github.com/belgattitude/shared-dx/commit/7b54f27713a8d2355b99b184321b07fc72d9a570) Thanks [@belgattitude](https://github.com/belgattitude)! - Add keywords, fix npm title

## 1.6.1

### Patch Changes

- [`69f8940`](https://github.com/belgattitude/shared-dx/commit/69f89407772d4432d41ccca2c864c5d8acc16494) Thanks [@belgattitude](https://github.com/belgattitude)! - Fix publishing in commonjs

## 1.6.0

### Minor Changes

- [`e51a82b`](https://github.com/belgattitude/shared-dx/commit/e51a82b5cbecaab29ded48249a403e0273af66ec) Thanks [@belgattitude](https://github.com/belgattitude)! - Publish to npm under belgattitude org

## 1.5.0

### Minor Changes

- [#2](https://github.com/belgattitude/shared-dx/pull/2) [`ea7cb8b`](https://github.com/belgattitude/shared-dx/commit/ea7cb8b58803402a87287b8816743fbbea89c869) Thanks [@belgattitude](https://github.com/belgattitude)! - Host in separate github repo

## 1.4.0

### Minor Changes

- [#552](https://github.com/belgattitude/perso/pull/552) [`d856606`](https://github.com/belgattitude/perso/commit/d856606941dc3a09c7d8d1e36ab02e476f50bf9f) Thanks [@belgattitude](https://github.com/belgattitude)! - Export '/patch/modern-module-resolution' based on @rushstack/eslint-patch

## 1.3.0

### Minor Changes

- [`757076d`](https://github.com/belgattitude/perso/commit/757076dd851310e7b2b2e47d91175bb0c6afc4a7) Thanks [@belgattitude](https://github.com/belgattitude)! - Improved eslint bases for typescript and jest

## 1.2.0

### Minor Changes

- [`4b8c9db`](https://github.com/belgattitude/nextjs-monorepo-example/commit/4b8c9db72f5048f3020005928992e19c926b0761) Thanks [@belgattitude](https://github.com/belgattitude)! - Support test.js without filename

## 1.1.1

### Patch Changes

- [#1673](https://github.com/belgattitude/nextjs-monorepo-example/pull/1673) [`135afc2`](https://github.com/belgattitude/nextjs-monorepo-example/commit/135afc2118847b0710404e2b86c27d86f806323c) Thanks [@belgattitude](https://github.com/belgattitude)! - Improve filename detection patterns

* [#1673](https://github.com/belgattitude/nextjs-monorepo-example/pull/1673) [`135afc2`](https://github.com/belgattitude/nextjs-monorepo-example/commit/135afc2118847b0710404e2b86c27d86f806323c) Thanks [@belgattitude](https://github.com/belgattitude)! - Improve documentation

- [#1673](https://github.com/belgattitude/nextjs-monorepo-example/pull/1673) [`135afc2`](https://github.com/belgattitude/nextjs-monorepo-example/commit/135afc2118847b0710404e2b86c27d86f806323c) Thanks [@belgattitude](https://github.com/belgattitude)! - Add base prettier configuration

## 1.1.0

### Minor Changes

- [#1656](https://github.com/belgattitude/nextjs-monorepo-example/pull/1656) [`9f2c2d0`](https://github.com/belgattitude/nextjs-monorepo-example/commit/9f2c2d049cfb87a3023a38b096f07f998862e3f6) Thanks [@belgattitude](https://github.com/belgattitude)! - Improved linter configs
