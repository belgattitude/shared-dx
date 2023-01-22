# @belgattitude/eslint-config-bases

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
