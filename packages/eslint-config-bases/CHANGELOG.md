# @belgattitude/eslint-config-bases

## 7.5.0

### Minor Changes

- [#1016](https://github.com/belgattitude/shared-dx/pull/1016) [`1b51300`](https://github.com/belgattitude/shared-dx/commit/1b513001e633371ea2cffdfef636122cb0bf3bfe) Thanks [@belgattitude](https://github.com/belgattitude)! - All deps to latest and fix security issues with eslint-config-prettier and eslint-plugin-prettier.
  See https://github.com/prettier/eslint-config-prettier/issues/339

  ```
   @typescript-eslint/eslint-plugin      ^8.36.0  →  ^8.37.0
   @typescript-eslint/parser             ^8.36.0  →  ^8.37.0
   @typescript-eslint/typescript-estree  ^8.36.0  →  ^8.37.0
   @typescript-eslint/utils              ^8.36.0  →  ^8.37.0
   eslint-config-prettier                ^10.1.5  →  ^10.1.8
   eslint-plugin-prettier                 ^5.5.1  →   ^5.5.3
   eslint-plugin-storybook               ^9.0.16  →  ^9.0.17
  ```

## 7.4.1

### Patch Changes

- [#1014](https://github.com/belgattitude/shared-dx/pull/1014) [`38cb790`](https://github.com/belgattitude/shared-dx/commit/38cb7900c4a1682a2782bfa0459aa2eea7b3ba64) Thanks [@belgattitude](https://github.com/belgattitude)! - Plugins to latest

  ```
   @typescript-eslint/eslint-plugin      ^8.35.1  →  ^8.36.0
   @typescript-eslint/parser             ^8.35.1  →  ^8.36.0
   @typescript-eslint/typescript-estree  ^8.35.1  →  ^8.36.0
   @typescript-eslint/utils              ^8.35.1  →  ^8.36.0
   @vitest/eslint-plugin                  ^1.3.3  →   ^1.3.4
   eslint-plugin-mdx                       3.5.0  →    3.6.2
   eslint-plugin-storybook               ^9.0.15  →  ^9.0.16
   eslint-plugin-testing-library          ^7.5.3  →   ^7.6.0
  ```

## 7.4.0

### Minor Changes

- [#1010](https://github.com/belgattitude/shared-dx/pull/1010) [`88fbfe4`](https://github.com/belgattitude/shared-dx/commit/88fbfe4b5827fb5b366e7eace75ae4e961421d0d) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest deps

  ```
   @rushstack/eslint-patch               ^1.11.0  →  ^1.12.0
   @typescript-eslint/eslint-plugin      ^8.35.0  →  ^8.35.1
   @typescript-eslint/parser             ^8.35.0  →  ^8.35.1
   @typescript-eslint/typescript-estree  ^8.35.0  →  ^8.35.1
   @typescript-eslint/utils              ^8.35.0  →  ^8.35.1
   @vitest/eslint-plugin                  ^1.2.7  →   ^1.3.3
   eslint-plugin-import-x                ^4.16.0  →  ^4.16.1
   eslint-plugin-prettier                 ^5.5.0  →   ^5.5.1
   eslint-plugin-sonarjs                  ^3.0.3  →   ^3.0.4
   eslint-plugin-storybook               ^9.0.13  →  ^9.0.15
  ```

## 7.3.0

### Minor Changes

- [#1007](https://github.com/belgattitude/shared-dx/pull/1007) [`7b97b10`](https://github.com/belgattitude/shared-dx/commit/7b97b107aa0ddb918f80cb119156147a14f1bdbc) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest, drop node 18.x, require node 20.9.0 or higher,
  add node 24.x to the CI.

  @typescript-eslint/eslint-plugin 8.34.1 → 8.35.0
  @typescript-eslint/parser 8.34.1 → 8.35.0
  eslint-plugin-storybook 9.0.12 → 9.0.13

## 7.2.0

### Minor Changes

- [#1002](https://github.com/belgattitude/shared-dx/pull/1002) [`c72bda2`](https://github.com/belgattitude/shared-dx/commit/c72bda27892a060a440d91e513c6f6aa2547642a) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
  @typescript-eslint/eslint-plugin       ^8.33.0  →  ^8.34.1
  @typescript-eslint/parser              ^8.33.0  →  ^8.34.1
  @typescript-eslint/typescript-estree   ^8.33.0  →  ^8.34.1
  @typescript-eslint/utils               ^8.33.0  →  ^8.34.1
  @vitest/eslint-plugin                   ^1.2.1  →   ^1.2.7
  eslint-plugin-import-x                 ^4.15.0  →  ^4.15.2
  eslint-plugin-jest                    ^28.12.0  →  ^29.0.1
  eslint-plugin-perfectionist            ^4.13.0  →  ^4.15.0
  eslint-plugin-prettier                  ^5.4.1  →   ^5.5.0
  eslint-plugin-regexp                    ^2.7.0  →   ^2.9.0
  eslint-plugin-sonarjs                   ^3.0.2  →   ^3.0.3
  eslint-plugin-storybook                 ^9.0.4  →  ^9.0.12
  eslint-plugin-testing-library           ^7.3.0  →   ^7.5.3
  ```

## 7.1.0

### Minor Changes

- [#988](https://github.com/belgattitude/shared-dx/pull/988) [`faf6433`](https://github.com/belgattitude/shared-dx/commit/faf64337873b361a8b099254f9289878c28e0d02) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint plugin storybook to v9

- [#988](https://github.com/belgattitude/shared-dx/pull/988) [`faf6433`](https://github.com/belgattitude/shared-dx/commit/faf64337873b361a8b099254f9289878c28e0d02) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 7.0.0

### Major Changes

- [#984](https://github.com/belgattitude/shared-dx/pull/984) [`b6d3a58`](https://github.com/belgattitude/shared-dx/commit/b6d3a5891a66f918259d7a585a5f442effa047ee) Thanks [@belgattitude](https://github.com/belgattitude)! - Remove support for eslint-plugin-tailwind

  Tailwind v4 support seems to be taking a long time to be released, so we remove the
  plugin for now.

  Please update your eslint config to remove the `"@belgattitude/eslint-config-bases/tailwind"` import.

### Minor Changes

- [#984](https://github.com/belgattitude/shared-dx/pull/984) [`b6d3a58`](https://github.com/belgattitude/shared-dx/commit/b6d3a5891a66f918259d7a585a5f442effa047ee) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  @tanstack/eslint-plugin-query ^5.74.7 → ^5.78.0
  @typescript-eslint/eslint-plugin ^8.32.0 → ^8.32.1
  @typescript-eslint/parser ^8.32.0 → ^8.32.1
  @typescript-eslint/typescript-estree ^8.32.0 → ^8.32.1
  @typescript-eslint/utils ^8.32.0 → ^8.32.1
  @vitest/eslint-plugin ^1.1.44 → ^1.2.1
  eslint-plugin-import-x ^4.11.1 → ^4.13.3
  eslint-plugin-perfectionist ^4.12.3 → ^4.13.0
  eslint-plugin-testing-library ^7.1.1 → ^7.2.2

## 6.37.0

### Minor Changes

- [#977](https://github.com/belgattitude/shared-dx/pull/977) [`a0d70db`](https://github.com/belgattitude/shared-dx/commit/a0d70dbd7581d2680d4d99b6b4fc41f2eaff1970) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest

  ```
   @tanstack/eslint-plugin-query         ^5.73.3  →   ^5.74.7
   @typescript-eslint/eslint-plugin      ^8.31.0  →   ^8.32.0
   @typescript-eslint/parser             ^8.31.0  →   ^8.32.0
   @typescript-eslint/typescript-estree  ^8.31.0  →   ^8.32.0
   @typescript-eslint/utils              ^8.31.0  →   ^8.32.0
   @vitest/eslint-plugin                 ^1.1.43  →   ^1.1.44
   eslint-config-prettier                ^10.1.2  →   ^10.1.5
   eslint-plugin-import-x                ^4.10.6  →   ^4.11.1
   eslint-plugin-perfectionist           ^4.12.1  →   ^4.12.3
   eslint-plugin-prettier                 ^5.2.6  →    ^5.4.0
  ```

## 6.36.0

### Minor Changes

- [#966](https://github.com/belgattitude/shared-dx/pull/966) [`fed1bc4`](https://github.com/belgattitude/shared-dx/commit/fed1bc4e4f5bcdf918f69e05774e92684a784f4d) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
   @typescript-eslint/eslint-plugin      ^8.29.1  →  ^8.31.0
   @typescript-eslint/parser             ^8.29.1  →  ^8.31.0
   @typescript-eslint/typescript-estree  ^8.29.1  →  ^8.31.0
   @typescript-eslint/utils              ^8.29.1  →  ^8.31.0
   @vitest/eslint-plugin                 ^1.1.42  →  ^1.1.43
   eslint-plugin-import-x                ^4.10.3  →  ^4.10.6
   eslint-plugin-perfectionist           ^4.11.0  →  ^4.12.1
  ```

## 6.35.0

### Minor Changes

- [#959](https://github.com/belgattitude/shared-dx/pull/959) [`ccedb7f`](https://github.com/belgattitude/shared-dx/commit/ccedb7fda30db328c0dc7e8f48adfe9d6ce91c2f) Thanks [@belgattitude](https://github.com/belgattitude)! - Plugins to latest

  ```
  eslint-plugin-import-x  ^4.10.2  →  ^4.10.3
  "@tanstack/eslint-plugin-query": "^5.73.3",
  ```

## 6.34.0

### Minor Changes

- [#954](https://github.com/belgattitude/shared-dx/pull/954) [`7d3e130`](https://github.com/belgattitude/shared-dx/commit/7d3e1306ade7833961f6fe43b2ec8e764fefbebc) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
   @tanstack/eslint-plugin-query         ^5.71.5  →  ^5.72.2
   @typescript-eslint/eslint-plugin      ^8.29.0  →  ^8.29.1
   @typescript-eslint/parser             ^8.29.0  →  ^8.29.1
   @typescript-eslint/typescript-estree  ^8.29.0  →  ^8.29.1
   @typescript-eslint/utils              ^8.29.0  →  ^8.29.1
   @vitest/eslint-plugin                 ^1.1.39  →  ^1.1.42
   eslint-config-prettier                ^10.1.1  →  ^10.1.2
  ```

## 6.33.0

### Minor Changes

- [#951](https://github.com/belgattitude/shared-dx/pull/951) [`693bb6c`](https://github.com/belgattitude/shared-dx/commit/693bb6c305fa43c762e4b18a481f483dadbb8a50) Thanks [@belgattitude](https://github.com/belgattitude)! - Updated dependencies

  ```
   eslint-plugin-import-x  ^4.10.0  →  ^4.10.2
   eslint-plugin-mdx         3.3.1  →    3.4.0
  ```

## 6.32.0

### Minor Changes

- [#948](https://github.com/belgattitude/shared-dx/pull/948) [`b0fbe98`](https://github.com/belgattitude/shared-dx/commit/b0fbe98df475612a5eee087df76295cdcaa90696) Thanks [@belgattitude](https://github.com/belgattitude)! - Deps to latest

  ```
   @tanstack/eslint-plugin-query          ^5.68.0  →  ^5.71.5
   @vitest/eslint-plugin                  ^1.1.38  →  ^1.1.39
   eslint-plugin-import-x                  ^4.9.3  →  ^4.10.0
   eslint-plugin-perfectionist            ^4.10.1  →  ^4.11.0
   eslint-plugin-prettier                  ^5.2.5  →   ^5.2.6
   eslint-plugin-react                    ^7.37.4  →  ^7.37.5
  ```

## 6.31.0

### Minor Changes

- [#944](https://github.com/belgattitude/shared-dx/pull/944) [`95e239c`](https://github.com/belgattitude/shared-dx/commit/95e239c8e1073ed783fa662b23a35c4fdc48b676) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ## Auto-updated dependencies

  ```
   @typescript-eslint/eslint-plugin       ^8.27.0  →   ^8.28.0
   @typescript-eslint/parser              ^8.27.0  →   ^8.28.0
   @typescript-eslint/typescript-estree   ^8.27.0  →   ^8.28.0
   @typescript-eslint/utils               ^8.27.0  →   ^8.28.0
   eslint-plugin-import-x                  ^4.9.1  →    ^4.9.3
   eslint-plugin-prettier                  ^5.2.4  →    ^5.2.5
   eslint-plugin-storybook                ^0.11.6  →   ^0.12.0
  ```

  ## peerDependencies

  Minimum version required

  ```
  @graphql-eslint/eslint-plugin            ^4.3.0  →     ^4.4.0
  eslint-plugin-mdx                        ^3.2.0  →     ^3.3.1
  ```

  Removed the `"@testing-library/dom": "^10.4.0"` peer dependency as it is not required anymore
  `

## 6.30.0

### Minor Changes

- [#937](https://github.com/belgattitude/shared-dx/pull/937) [`e791445`](https://github.com/belgattitude/shared-dx/commit/e79144561957d5a819571069039f88a31b4d018c) Thanks [@belgattitude](https://github.com/belgattitude)! - All deps to latest

  ```
   @typescript-eslint/eslint-plugin       ^8.26.1  →   ^8.27.0
   @typescript-eslint/parser              ^8.26.1  →   ^8.27.0
   @typescript-eslint/typescript-estree   ^8.26.1  →   ^8.27.0
   @typescript-eslint/utils               ^8.26.1  →   ^8.27.0
   eslint-plugin-import-x                  ^4.8.1  →    ^4.9.1
   eslint-plugin-prettier                  ^5.2.3  →    ^5.2.4
  ```

## 6.29.0

### Minor Changes

- [#933](https://github.com/belgattitude/shared-dx/pull/933) [`eb51a43`](https://github.com/belgattitude/shared-dx/commit/eb51a431f00dee25ffd8de66dcb144dde64833cf) Thanks [@belgattitude](https://github.com/belgattitude)! - Plugins to latest. eslint-plugin-storybook nows support typescript 5.8

  ```
   @vitest/eslint-plugin    ^1.1.37  →  ^1.1.38
   eslint-plugin-import-x    ^4.8.0  →   ^4.8.1
   eslint-plugin-storybook  ^0.11.4  →  ^0.11.6
  ```

## 6.28.0

### Minor Changes

- [#930](https://github.com/belgattitude/shared-dx/pull/930) [`02691c1`](https://github.com/belgattitude/shared-dx/commit/02691c1495a43ccc3ceccf7fc809221b9ebd7cfa) Thanks [@belgattitude](https://github.com/belgattitude)! - import-x plugin updated

  ```
   @tanstack/eslint-plugin-query  ^5.67.2  →  ^5.68.0
   eslint-plugin-import-x          ^4.6.1  →   ^4.8.0
  ```

## 6.27.0

### Minor Changes

- [#928](https://github.com/belgattitude/shared-dx/pull/928) [`fc23061`](https://github.com/belgattitude/shared-dx/commit/fc2306199a588e35536e0a3b91945a9e1eff07c0) Thanks [@belgattitude](https://github.com/belgattitude)! - Plugins to latest

  ```
   @rushstack/eslint-patch               ^1.10.5  →   ^1.11.0
   @tanstack/eslint-plugin-query         ^5.66.1  →   ^5.67.2
   @typescript-eslint/eslint-plugin      ^8.26.0  →   ^8.26.1
   @typescript-eslint/parser             ^8.26.0  →   ^8.26.1
   @typescript-eslint/typescript-estree  ^8.26.0  →   ^8.26.1
   @typescript-eslint/utils              ^8.26.0  →   ^8.26.1
   @vitest/eslint-plugin                 ^1.1.36  →   ^1.1.37
   eslint-config-prettier                ^10.0.2  →   ^10.1.1
   eslint-plugin-perfectionist            ^4.9.0  →   ^4.10.1
   eslint-plugin-storybook               ^0.11.3  →   ^0.11.4
  ```

## 6.26.0

### Minor Changes

- [#921](https://github.com/belgattitude/shared-dx/pull/921) [`30205aa`](https://github.com/belgattitude/shared-dx/commit/30205aa1ab84fe05a6582a96e71134cf331b86a7) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest typescript eslint for typescript 5.8 support

  ```
   @typescript-eslint/eslint-plugin      ^8.25.0  →  ^8.26.0
   @typescript-eslint/parser             ^8.25.0  →  ^8.26.0
   @typescript-eslint/typescript-estree  ^8.25.0  →  ^8.26.0
   @typescript-eslint/utils              ^8.25.0  →  ^8.26.0
   @vitest/eslint-plugin                 ^1.1.33  →  ^1.1.36
   eslint-config-prettier                ^10.0.1  →  ^10.0.2
  ```

## 6.25.0

### Minor Changes

- [#916](https://github.com/belgattitude/shared-dx/pull/916) [`20f5edf`](https://github.com/belgattitude/shared-dx/commit/20f5edff43545d60b9da2642b2b205e9b7340685) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
   @typescript-eslint/eslint-plugin      ^8.24.1  →  ^8.25.0
   @typescript-eslint/parser             ^8.24.1  →  ^8.25.0
   @typescript-eslint/typescript-estree  ^8.24.1  →  ^8.25.0
   @typescript-eslint/utils              ^8.24.1  →  ^8.25.0
   @vitest/eslint-plugin                 ^1.1.31  →  ^1.1.33
  ```

## 6.24.0

### Minor Changes

- [#912](https://github.com/belgattitude/shared-dx/pull/912) [`a8e6a39`](https://github.com/belgattitude/shared-dx/commit/a8e6a39c01a0904534e66116693bdfe842c68982) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
   @typescript-eslint/eslint-plugin      ^8.24.0  →  ^8.24.1
   @typescript-eslint/parser             ^8.24.0  →  ^8.24.1
   @typescript-eslint/typescript-estree  ^8.24.0  →  ^8.24.1
   @typescript-eslint/utils              ^8.24.0  →  ^8.24.1
   @vitest/eslint-plugin                 ^1.1.28  →  ^1.1.31
   eslint-plugin-perfectionist            ^4.8.0  →   ^4.9.0
   eslint-plugin-sonarjs                  ^3.0.1  →   ^3.0.2
   eslint-plugin-storybook               ^0.11.2  →  ^0.11.3
  ```

## 6.23.0

### Minor Changes

- [#905](https://github.com/belgattitude/shared-dx/pull/905) [`773d49a`](https://github.com/belgattitude/shared-dx/commit/773d49ad89bd26f52c511d7f0af6805307ec1cd1) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
   @tanstack/eslint-plugin-query         ^5.66.0  →  ^5.66.1
   @typescript-eslint/eslint-plugin      ^8.23.0  →  ^8.24.0
   @typescript-eslint/parser             ^8.23.0  →  ^8.24.0
   @typescript-eslint/typescript-estree  ^8.23.0  →  ^8.24.0
   @typescript-eslint/utils              ^8.23.0  →  ^8.24.0
   @vitest/eslint-plugin                 ^1.1.27  →  ^1.1.28
  ```

## 6.22.0

### Minor Changes

- [#902](https://github.com/belgattitude/shared-dx/pull/902) [`964ec96`](https://github.com/belgattitude/shared-dx/commit/964ec96b5b1a25958764cff57dc95109d5fbcf19) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  Tailwind V4 support is still delayed. Waiting for https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/384 to be resolved.

  ```
   @tanstack/eslint-plugin-query         ^5.65.0  →  ^5.66.0
   @typescript-eslint/eslint-plugin      ^8.22.0  →  ^8.23.0
   @typescript-eslint/parser             ^8.22.0  →  ^8.23.0
   @typescript-eslint/typescript-estree  ^8.22.0  →  ^8.23.0
   @typescript-eslint/utils              ^8.22.0  →  ^8.23.0
   eslint-plugin-perfectionist            ^4.7.0  →   ^4.8.0
  ```

## 6.21.0

### Minor Changes

- [#897](https://github.com/belgattitude/shared-dx/pull/897) [`2d7d561`](https://github.com/belgattitude/shared-dx/commit/2d7d561ec5b39bc5125493a896f8549e81cf441b) Thanks [@belgattitude](https://github.com/belgattitude)! - All deps to latest

  **Note**: tailwindcss support for 4.0.0 isn't properly working (yet)

  ```
  @tanstack/eslint-plugin-query         ^5.64.2  →  ^5.65.0
  @typescript-eslint/eslint-plugin      ^8.21.0  →  ^8.22.0
  @typescript-eslint/parser             ^8.21.0  →  ^8.22.0
  @typescript-eslint/typescript-estree  ^8.21.0  →  ^8.22.0
  @typescript-eslint/utils              ^8.21.0  →  ^8.22.0
  eslint-plugin-playwright               ^2.1.0  →   ^2.2.0
  ```

## 6.20.0

### Minor Changes

- [#889](https://github.com/belgattitude/shared-dx/pull/889) [`d0239a6`](https://github.com/belgattitude/shared-dx/commit/d0239a622589bd5ec6dec78d081f1b468109c854) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
  @tanstack/eslint-plugin-query         ^5.62.16  →   ^5.64.2
  @typescript-eslint/eslint-plugin       ^8.20.0  →   ^8.21.0
  @typescript-eslint/parser              ^8.20.0  →   ^8.21.0
  @typescript-eslint/typescript-estree   ^8.20.0  →   ^8.21.0
  @typescript-eslint/utils               ^8.20.0  →   ^8.21.0
  eslint-plugin-jest                    ^28.10.0  →  ^28.11.0
  eslint-plugin-perfectionist             ^4.6.0  →    ^4.7.0
  eslint-plugin-prettier                  ^5.2.1  →    ^5.2.3
  ```

## 6.19.0

### Minor Changes

- [#883](https://github.com/belgattitude/shared-dx/pull/883) [`a3d876c`](https://github.com/belgattitude/shared-dx/commit/a3d876c23b5e7ba457e1bb14358c3fc4f436f182) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
  @typescript-eslint/eslint-plugin      ^8.19.1  →  ^8.20.0
  @typescript-eslint/parser             ^8.19.1  →  ^8.20.0
  @typescript-eslint/typescript-estree  ^8.19.1  →  ^8.20.0
  @typescript-eslint/utils              ^8.19.1  →  ^8.20.0
  @vitest/eslint-plugin                 ^1.1.24  →  ^1.1.25
  eslint-config-prettier                 ^9.1.0  →  ^10.0.1
  eslint-plugin-react                   ^7.37.3  →  ^7.37.4
  ```

## 6.18.2

### Patch Changes

- [#879](https://github.com/belgattitude/shared-dx/pull/879) [`ebf8acf`](https://github.com/belgattitude/shared-dx/commit/ebf8acf5bf052f09b939460d674dd09bc5eb8039) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint-patch to latest

  ```
  @rushstack/eslint-patch  ^1.10.4  →  ^1.10.5
  ```

## 6.18.1

### Patch Changes

- [#875](https://github.com/belgattitude/shared-dx/pull/875) [`ff1468a`](https://github.com/belgattitude/shared-dx/commit/ff1468aabd525fa6f2e93e939b9d00efd97961e6) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
  @tanstack/eslint-plugin-query         ^5.62.9  →  ^5.62.16
  @typescript-eslint/eslint-plugin      ^8.19.0  →   ^8.19.1
  @typescript-eslint/parser             ^8.19.0  →   ^8.19.1
  @typescript-eslint/typescript-estree  ^8.19.0  →   ^8.19.1
  @typescript-eslint/utils              ^8.19.0  →   ^8.19.1
  @vitest/eslint-plugin                 ^1.1.22  →   ^1.1.24
  eslint-plugin-perfectionist            ^4.4.0  →    ^4.6.0
  eslint-plugin-storybook               ^0.11.1  →   ^0.11.2
  ```

## 6.18.0

### Minor Changes

- [#870](https://github.com/belgattitude/shared-dx/pull/870) [`cc04f4e`](https://github.com/belgattitude/shared-dx/commit/cc04f4edba29e3d6bcec3e8f5164342cb6458a7e) Thanks [@belgattitude](https://github.com/belgattitude)! - Update all dependencies

  ```
   @tanstack/eslint-plugin-query         ^5.62.1  →   ^5.62.9
   @typescript-eslint/eslint-plugin      ^8.18.1  →   ^8.19.0
   @typescript-eslint/parser             ^8.18.1  →   ^8.19.0
   @typescript-eslint/typescript-estree  ^8.18.1  →   ^8.19.0
   @typescript-eslint/utils              ^8.18.1  →   ^8.19.0
   @vitest/eslint-plugin                 ^1.1.18  →   ^1.1.22
   eslint-plugin-import-x                 ^4.5.1  →    ^4.6.1
   eslint-plugin-jest                    ^28.9.0  →  ^28.10.0
   eslint-plugin-perfectionist            ^4.3.0  →    ^4.4.0
   eslint-plugin-react                   ^7.37.2  →   ^7.37.3
  ```

## 6.17.0

### Minor Changes

- [#864](https://github.com/belgattitude/shared-dx/pull/864) [`0bf9af7`](https://github.com/belgattitude/shared-dx/commit/0bf9af7e50cb9eadafaab1cf9a4810c09dd40bd7) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable unicorn prefer-global-this by default

### Patch Changes

- [#864](https://github.com/belgattitude/shared-dx/pull/864) [`0bf9af7`](https://github.com/belgattitude/shared-dx/commit/0bf9af7e50cb9eadafaab1cf9a4810c09dd40bd7) Thanks [@belgattitude](https://github.com/belgattitude)! - Update all plugins

  ```
   @typescript-eslint/eslint-plugin      ^8.18.0  →  ^8.18.1
   @typescript-eslint/parser             ^8.18.0  →  ^8.18.1
   @typescript-eslint/typescript-estree  ^8.18.0  →  ^8.18.1
   @typescript-eslint/utils              ^8.18.0  →  ^8.18.1
   @vitest/eslint-plugin                 ^1.1.16  →  ^1.1.18
   eslint-plugin-import-x                 ^4.5.0  →   ^4.5.1
  ```

## 6.16.0

### Minor Changes

- [#860](https://github.com/belgattitude/shared-dx/pull/860) [`ce44e68`](https://github.com/belgattitude/shared-dx/commit/ce44e688eb88e185a691315f34706dbcdfb1505d) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable @typescript/no-unused-expressions for json files

## 6.15.1

### Patch Changes

- [#856](https://github.com/belgattitude/shared-dx/pull/856) [`6fffe11`](https://github.com/belgattitude/shared-dx/commit/6fffe11237543f4b95c7e6d29060bc76ebbd1457) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/no-unused-vars (better handled by typescript eslint)

## 6.15.0

### Minor Changes

- [#852](https://github.com/belgattitude/shared-dx/pull/852) [`648a084`](https://github.com/belgattitude/shared-dx/commit/648a084d06b4b1556435387b8e77d7777fd9c95b) Thanks [@belgattitude](https://github.com/belgattitude)! - Update typescript-eslint to latest

  ```
  @typescript-eslint/eslint-plugin      ^8.17.0  →  ^8.18.0
  @typescript-eslint/parser             ^8.17.0  →  ^8.18.0
  @typescript-eslint/typescript-estree  ^8.17.0  →  ^8.18.0
  @typescript-eslint/utils              ^8.17.0  →  ^8.18.0
  ```

## 6.14.0

### Minor Changes

- [#849](https://github.com/belgattitude/shared-dx/pull/849) [`f4adbad`](https://github.com/belgattitude/shared-dx/commit/f4adbad3131405ad27847c3461189e1ee86c5161) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable unicorn prefer global this everywhere

## 6.13.0

### Minor Changes

- [#847](https://github.com/belgattitude/shared-dx/pull/847) [`6878e2d`](https://github.com/belgattitude/shared-dx/commit/6878e2d5bbf43a56c31817118fb62cd85bd676b8) Thanks [@belgattitude](https://github.com/belgattitude)! - Plugins to latest versions

  ```
  eslint-plugin-sonarjs           ^3.0.0  →  ^3.0.1
  eslint-plugin-testing-library   ^7.1.0  →  ^7.1.1
  ```

## 6.12.0

### Minor Changes

- [#841](https://github.com/belgattitude/shared-dx/pull/841) [`95a45bb`](https://github.com/belgattitude/shared-dx/commit/95a45bbe26bbbd78e0503afd8355d0054247046b) Thanks [@belgattitude](https://github.com/belgattitude)! - Small fix for sonarjs/prefer-read-only-props after v3 update

## 6.11.0

### Minor Changes

- [#839](https://github.com/belgattitude/shared-dx/pull/839) [`cf66fe4`](https://github.com/belgattitude/shared-dx/commit/cf66fe446f3c60845d7db1cf69ee436d5b7aab7f) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest and sonarjs to v3

  ```
  @tanstack/eslint-plugin-query         ^5.61.4  →  ^5.62.1
  @typescript-eslint/eslint-plugin      ^8.16.0  →  ^8.17.0
  @typescript-eslint/parser             ^8.16.0  →  ^8.17.0
  @typescript-eslint/typescript-estree  ^8.16.0  →  ^8.17.0
  @typescript-eslint/utils              ^8.16.0  →  ^8.17.0
  @vitest/eslint-plugin                 ^1.1.10  →  ^1.1.14
  eslint-plugin-import-x                 ^4.4.3  →   ^4.5.0
  eslint-plugin-perfectionist            ^4.1.2  →   ^4.2.0
  eslint-plugin-sonarjs                  ^2.0.4  →   ^3.0.0
  eslint-plugin-testing-library          ^7.0.0  →   ^7.1.0
  ```

## 6.10.0

### Minor Changes

- [#832](https://github.com/belgattitude/shared-dx/pull/832) [`2255a2b`](https://github.com/belgattitude/shared-dx/commit/2255a2bd1dc3aacee134fc8585b1fe0d21571d8d) Thanks [@belgattitude](https://github.com/belgattitude)! - Update peer dependency on @graphql-eslint/eslint-plugin from 3.20 → 4.0.0

  ```
  @graphql-eslint/eslint-plugin 3.20.1 → 4.0.0
  ```

### Patch Changes

- [#832](https://github.com/belgattitude/shared-dx/pull/832) [`2255a2b`](https://github.com/belgattitude/shared-dx/commit/2255a2bd1dc3aacee134fc8585b1fe0d21571d8d) Thanks [@belgattitude](https://github.com/belgattitude)! - Remove unused eslint-import-resolver-typescript

## 6.9.0

### Minor Changes

- [#828](https://github.com/belgattitude/shared-dx/pull/828) [`3b15db8`](https://github.com/belgattitude/shared-dx/commit/3b15db893c08e046fca90b4dbf48f76fe6da5ae7) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript 5.7 and prettier 3.4 support

  Update minimum dependencies to

  ```
   @typescript-eslint/eslint-plugin      ^8.15.0  →  ^8.16.0
   @typescript-eslint/parser             ^8.15.0  →  ^8.16.0
   @typescript-eslint/typescript-estree  ^8.15.0  →  ^8.16.0
   @typescript-eslint/utils              ^8.15.0  →  ^8.16.0
   eslint-plugin-perfectionist            ^4.0.3  →   ^4.1.2
  ```

## 6.8.0

### Minor Changes

- [#824](https://github.com/belgattitude/shared-dx/pull/824) [`88308b2`](https://github.com/belgattitude/shared-dx/commit/88308b28fe1531e8bc4305b8c84957758eafacf0) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint-plugin-testing-library to v7

## 6.7.0

### Minor Changes

- [#819](https://github.com/belgattitude/shared-dx/pull/819) [`72f0445`](https://github.com/belgattitude/shared-dx/commit/72f044535769791882ced616f1f3399c3ee25443) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable unicorn/prefer-global-this

  Till this upstream issue is addressed: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2468

- [#819](https://github.com/belgattitude/shared-dx/pull/819) [`72f0445`](https://github.com/belgattitude/shared-dx/commit/72f044535769791882ced616f1f3399c3ee25443) Thanks [@belgattitude](https://github.com/belgattitude)! - Docs: mention workarounds for NextJS < 15

- [#819](https://github.com/belgattitude/shared-dx/pull/819) [`72f0445`](https://github.com/belgattitude/shared-dx/commit/72f044535769791882ced616f1f3399c3ee25443) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
   eslint-plugin-import-x         ^4.4.2  →  ^4.4.3
   eslint-plugin-perfectionist    ^4.0.2  →  ^4.0.3
   eslint-plugin-testing-library  ^6.4.0  →  ^6.5.0
  ```

## 6.6.0

### Minor Changes

- [#815](https://github.com/belgattitude/shared-dx/pull/815) [`746ff10`](https://github.com/belgattitude/shared-dx/commit/746ff10cc26acc6b6db7dea80fe0821f562b5b7c) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  > perfectionist to v4

  ```
   @typescript-eslint/eslint-plugin      ^8.14.0  →  ^8.15.0
   @typescript-eslint/parser             ^8.14.0  →  ^8.15.0
   @typescript-eslint/typescript-estree  ^8.14.0  →  ^8.15.0
   @typescript-eslint/utils              ^8.14.0  →  ^8.15.0
   eslint-plugin-perfectionist            ^3.9.1  →   ^4.0.2
   eslint-plugin-playwright               ^2.0.1  →   ^2.1.0
   eslint-plugin-storybook               ^0.11.0  →  ^0.11.1
   eslint-plugin-unicorn                 ^56.0.0  →  ^56.0.1
  ```

## 6.5.0

### Minor Changes

- [#808](https://github.com/belgattitude/shared-dx/pull/808) [`772b012`](https://github.com/belgattitude/shared-dx/commit/772b012c45d6b264bc99ec857b4d3a07ae8f81b6) Thanks [@belgattitude](https://github.com/belgattitude)! - jest/expect-expect, support expectTypeOf and assertType as valid expectations

- [#808](https://github.com/belgattitude/shared-dx/pull/808) [`772b012`](https://github.com/belgattitude/shared-dx/commit/772b012c45d6b264bc99ec857b4d3a07ae8f81b6) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint-plugin-regexp

  ```
  eslint-plugin-regexp  ^2.6.0  →  ^2.7.0
  ```

- [#810](https://github.com/belgattitude/shared-dx/pull/810) [`076108c`](https://github.com/belgattitude/shared-dx/commit/076108ce901784291a2a153416f4af862169d442) Thanks [@belgattitude](https://github.com/belgattitude)! - Add vitest base with @vitest/eslint-plugin, to enable add `"@belgattitude/eslint-config-bases/vitest"`
  and remove `"@belgattitude/eslint-config-bases/jest"` from your `.eslintrc.js` file.

  ```javascript
  // next line only required if you're using a monorepo
  require('@belgattitude/eslint-config-bases/patch/modern-module-resolution');

  module.exports = {
    extends: [
      // For tests: use either jest or vitest

      /// --- "@belgattitude/eslint-config-bases/jest",

      '@belgattitude/eslint-config-bases/vitest',
    ],
  };
  ```

### Patch Changes

- [#810](https://github.com/belgattitude/shared-dx/pull/810) [`076108c`](https://github.com/belgattitude/shared-dx/commit/076108ce901784291a2a153416f4af862169d442) Thanks [@belgattitude](https://github.com/belgattitude)! - Enforce eslint peerDependency to be at least 8.57.1

## 6.4.0

### Minor Changes

- [#805](https://github.com/belgattitude/shared-dx/pull/805) [`241b0ae`](https://github.com/belgattitude/shared-dx/commit/241b0ae7a94f9460bc64cbae35e6582d04e73041) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```
   @tanstack/eslint-plugin-query         ^5.59.7  →  ^5.60.1
   @typescript-eslint/eslint-plugin      ^8.12.2  →  ^8.14.0
   @typescript-eslint/parser             ^8.12.2  →  ^8.14.0
   @typescript-eslint/typescript-estree  ^8.12.2  →  ^8.14.0
   @typescript-eslint/utils              ^8.12.2  →  ^8.14.0
   eslint-plugin-import-x                 ^4.4.0  →   ^4.4.2
   eslint-plugin-jest                    ^28.8.3  →  ^28.9.0
   eslint-plugin-playwright               ^2.0.0  →   ^2.0.1
   eslint-plugin-storybook               ^0.10.1  →  ^0.11.0
  ```

## 6.3.0

### Minor Changes

- [`18693df`](https://github.com/belgattitude/shared-dx/commit/18693dfbdd65c0cc93ea0e69097482649712c2c4) Thanks [@belgattitude](https://github.com/belgattitude)! - Update plugins

  ```
   @typescript-eslint/eslint-plugin      ^8.12.1  →  ^8.12.2
   @typescript-eslint/parser             ^8.12.1  →  ^8.12.2
   @typescript-eslint/typescript-estree  ^8.12.1  →  ^8.12.2
   @typescript-eslint/utils              ^8.12.1  →  ^8.12.2
   eslint-plugin-import-x                 ^4.3.1  →   ^4.4.0
  ```

## 6.2.0

### Minor Changes

- [#797](https://github.com/belgattitude/shared-dx/pull/797) [`4a88211`](https://github.com/belgattitude/shared-dx/commit/4a8821192248cf483386814d41d8347f7d1ac85b) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript eslint to 8.12

- [#799](https://github.com/belgattitude/shared-dx/pull/799) [`5d922a1`](https://github.com/belgattitude/shared-dx/commit/5d922a1d668fae5255c984aabedfac9c986cd51f) Thanks [@belgattitude](https://github.com/belgattitude)! - @typescript-eslint/no-unused-expressions disabled for test files

  This to allow testing types with vitest, ie:

  ```ts
  expectTypeOf(test).toEqualTypeOf<Test>;
  ```

## 6.1.1

### Patch Changes

- [#795](https://github.com/belgattitude/shared-dx/pull/795) [`ec4793c`](https://github.com/belgattitude/shared-dx/commit/ec4793cc7002fcf7216829321966420cb081f95c) Thanks [@belgattitude](https://github.com/belgattitude)! - "eslint-plugin-jsx-a11y": "^6.10.2"

## 6.1.0

### Minor Changes

- [#792](https://github.com/belgattitude/shared-dx/pull/792) [`8bf31cc`](https://github.com/belgattitude/shared-dx/commit/8bf31ccf55150fb9f93b6863d1bd0fb1e57504be) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint-plugin-playwright to v2.0.0

  ```
   eslint-plugin-playwright   ^1.8.1  →   ^2.0.0
   eslint-plugin-react       ^7.37.1  →  ^7.37.2
  ```

## 6.0.4

### Patch Changes

- [#787](https://github.com/belgattitude/shared-dx/pull/787) [`bfaebf3`](https://github.com/belgattitude/shared-dx/commit/bfaebf321d0383f3675da4ccbb6dd52145d1ab15) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

  ```

  @typescript-eslint/eslint-plugin      ^8.10.0  →  ^8.11.0
  @typescript-eslint/parser             ^8.10.0  →  ^8.11.0
  @typescript-eslint/typescript-estree  ^8.10.0  →  ^8.11.0
  @typescript-eslint/utils              ^8.10.0  →  ^8.11.0
  eslint-plugin-jsx-a11y                ^6.10.0  →  ^6.10.1
  eslint-plugin-playwright               ^1.8.0  →   ^1.8.1
  eslint-plugin-storybook
  ```

## 6.0.3

### Patch Changes

- [#783](https://github.com/belgattitude/shared-dx/pull/783) [`110343d`](https://github.com/belgattitude/shared-dx/commit/110343de90030fd49471824f1a069044403977b0) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable some sonarjs rules that are better handled by other plugins

## 6.0.2

### Patch Changes

- [#781](https://github.com/belgattitude/shared-dx/pull/781) [`a9b35cf`](https://github.com/belgattitude/shared-dx/commit/a9b35cf9cf0a4abb427607134ee910b7a4ed477e) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint-plugin-playwright to latest 1.8.0

## 6.0.1

### Patch Changes

- [#779](https://github.com/belgattitude/shared-dx/pull/779) [`7014466`](https://github.com/belgattitude/shared-dx/commit/7014466b086a68a85b16a6ff2d34f56e64ae2879) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint-plugin-sonarjs to 2.0.3

## 6.0.0

### Major Changes

- [#776](https://github.com/belgattitude/shared-dx/pull/776) [`a098f8a`](https://github.com/belgattitude/shared-dx/commit/a098f8a573b1d148ca948e5449999dc2db9f630d) Thanks [@belgattitude](https://github.com/belgattitude)! - **Release v6.0.0**: typescript-eslint v8 and typescript 5.6 support.

  > V7 will include eslint 9 support with flat config

  ## Highlights
  - **BREAKING**: Upgrade to [typescript/eslint](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8)
  - **BREAKING**: Upgrade [eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md) to "^2.0.3" (from v1)
  - **BREAKING**: Upgrade [eslint-plugin-react-hooks](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/CHANGELOG.md) to "^4.6.2 || ^5.0.0 || 5.0.0-canary-7118f5dd7-20230705",
  - **BREAKING**: Upgrade [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn): "56.0.0",
  - All other plugins have been updated to their latest version.

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
    overrides: [],
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

- [#767](https://github.com/belgattitude/shared-dx/pull/767) [`8fa9cb4`](https://github.com/belgattitude/shared-dx/commit/8fa9cb4efc7efc3028e2431e8f5a4448d4bf5a88) Thanks [@belgattitude](https://github.com/belgattitude)! - Revert no-restricted-entries in performance

- [#742](https://github.com/belgattitude/shared-dx/pull/742) [`9009742`](https://github.com/belgattitude/shared-dx/commit/90097427100c3cf200eac5bda2689654f591b890) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint-plugin-import-x to 4.3.0

- [#689](https://github.com/belgattitude/shared-dx/pull/689) [`888cecd`](https://github.com/belgattitude/shared-dx/commit/888cecdae164fe67ef5590948c377358300e2929) Thanks [@belgattitude](https://github.com/belgattitude)! - Upgrade to typescript-eslint 8

- [#689](https://github.com/belgattitude/shared-dx/pull/689) [`888cecd`](https://github.com/belgattitude/shared-dx/commit/888cecdae164fe67ef5590948c377358300e2929) Thanks [@belgattitude](https://github.com/belgattitude)! - Remove support for eslint-plugin-import and replace by by eslint-plugin-import-x

- [#773](https://github.com/belgattitude/shared-dx/pull/773) [`cdbc6b9`](https://github.com/belgattitude/shared-dx/commit/cdbc6b9d385302fc76e92cc3539bff4706fca5a3) Thanks [@belgattitude](https://github.com/belgattitude)! - Support typescript 5.6 (plugin update)

- [#717](https://github.com/belgattitude/shared-dx/pull/717) [`5ae1607`](https://github.com/belgattitude/shared-dx/commit/5ae1607921ce1463f6daf09952b375e0a66624bc) Thanks [@belgattitude](https://github.com/belgattitude)! - By default uses typescript-eslint projectService available in v8

- [#747](https://github.com/belgattitude/shared-dx/pull/747) [`afffb51`](https://github.com/belgattitude/shared-dx/commit/afffb513d6d05de19e0f21c36e5f4a6546b7f3ea) Thanks [@belgattitude](https://github.com/belgattitude)! - Update plugins to latest (storybook, typescript-eslint, import-x)

- [#728](https://github.com/belgattitude/shared-dx/pull/728) [`99225de`](https://github.com/belgattitude/shared-dx/commit/99225debc49d8cf6835aa692b5fc01d56eda5306) Thanks [@belgattitude](https://github.com/belgattitude)! - Update react-query and react plugins

- [#712](https://github.com/belgattitude/shared-dx/pull/712) [`fdbb649`](https://github.com/belgattitude/shared-dx/commit/fdbb649c5354f9931cab03e796a3f0da1190778d) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable some sonarjs rules for test and bench files

- [#751](https://github.com/belgattitude/shared-dx/pull/751) [`022a9b9`](https://github.com/belgattitude/shared-dx/commit/022a9b94a445d6df518a4fc108c6917de023e632) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint plugin unicorn to v56

- [`0c0e549`](https://github.com/belgattitude/shared-dx/commit/0c0e549ea05331ef880689c18f0ff1493ef73641) Thanks [@belgattitude](https://github.com/belgattitude)! - Upgrade sonarjs plugin to v1

- [#708](https://github.com/belgattitude/shared-dx/pull/708) [`01053a0`](https://github.com/belgattitude/shared-dx/commit/01053a04c62f115eaa62d591f0b3cf79054af3b0) Thanks [@belgattitude](https://github.com/belgattitude)! - Update to sonarjs v2

- [#773](https://github.com/belgattitude/shared-dx/pull/773) [`cdbc6b9`](https://github.com/belgattitude/shared-dx/commit/cdbc6b9d385302fc76e92cc3539bff4706fca5a3) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/deprecation as it's handled in typescript/eslint

- [#762](https://github.com/belgattitude/shared-dx/pull/762) [`5ae64f3`](https://github.com/belgattitude/shared-dx/commit/5ae64f330190544dfa47de9904349b64380fa7d8) Thanks [@belgattitude](https://github.com/belgattitude)! - Allow eslint-plugin-react-hook to v5

- [`08da902`](https://github.com/belgattitude/shared-dx/commit/08da902e73444770958b9c9c63b008e4e0edc714) Thanks [@belgattitude](https://github.com/belgattitude)! - Tune import-x/no-unused-modules

- [#739](https://github.com/belgattitude/shared-dx/pull/739) [`630be56`](https://github.com/belgattitude/shared-dx/commit/630be5607ba6777770b6ec6007fb1e822e7a0419) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest deps

### Minor Changes

- [#723](https://github.com/belgattitude/shared-dx/pull/723) [`e0f0786`](https://github.com/belgattitude/shared-dx/commit/e0f0786dc50b59aa8a67401eabc12aaf9c7f72b8) Thanks [@belgattitude](https://github.com/belgattitude)! - Update typescript-eslint to 8.5.0

- [#761](https://github.com/belgattitude/shared-dx/pull/761) [`47d8d56`](https://github.com/belgattitude/shared-dx/commit/47d8d566dca1d13a9eaf479b5352212e57dfcf83) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable jest/no-standalone-expect by default

- [#765](https://github.com/belgattitude/shared-dx/pull/765) [`80c2614`](https://github.com/belgattitude/shared-dx/commit/80c261447033b6de8056f322854f536474fba1a1) Thanks [@belgattitude](https://github.com/belgattitude)! - Performance base shoudn't be run on test files

- [#762](https://github.com/belgattitude/shared-dx/pull/762) [`5ae64f3`](https://github.com/belgattitude/shared-dx/commit/5ae64f330190544dfa47de9904349b64380fa7d8) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint-plugin-playwright to 1.7.0

- [#764](https://github.com/belgattitude/shared-dx/pull/764) [`eec868c`](https://github.com/belgattitude/shared-dx/commit/eec868ca16ae89e6e28a96a2fcc64b1b49064533) Thanks [@belgattitude](https://github.com/belgattitude)! - Config-base performance, disallow object entries for perf

### Patch Changes

- [#734](https://github.com/belgattitude/shared-dx/pull/734) [`f5fb9f7`](https://github.com/belgattitude/shared-dx/commit/f5fb9f70a6f0dbb60054232b9d74e30ef6e87e29) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest plugin updates

- [`5b6504e`](https://github.com/belgattitude/shared-dx/commit/5b6504ef04acd25085eb88f0c764069e40a86b0c) Thanks [@belgattitude](https://github.com/belgattitude)! - Disabled sonar-no-unused-vars, it's handled by typescript-eslint

- [#717](https://github.com/belgattitude/shared-dx/pull/717) [`5ae1607`](https://github.com/belgattitude/shared-dx/commit/5ae1607921ce1463f6daf09952b375e0a66624bc) Thanks [@belgattitude](https://github.com/belgattitude)! - Update perfectionist plugin

- [#758](https://github.com/belgattitude/shared-dx/pull/758) [`aa9a310`](https://github.com/belgattitude/shared-dx/commit/aa9a310ca6cb0ec92f50770ca4cdb800a004f806) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/no-misused promises as it is availble with typescript-eslint

- [#703](https://github.com/belgattitude/shared-dx/pull/703) [`2f4255c`](https://github.com/belgattitude/shared-dx/commit/2f4255caf448d47656bedb8ee53703a38c2b1d58) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest fixes and updates to typescript-eslint8

- [#754](https://github.com/belgattitude/shared-dx/pull/754) [`ad5795c`](https://github.com/belgattitude/shared-dx/commit/ad5795c293168efd11889d7a0cb97b8a939c80b8) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest typescript-eslint-plugin

- [#710](https://github.com/belgattitude/shared-dx/pull/710) [`63299fd`](https://github.com/belgattitude/shared-dx/commit/63299fd2752efff425c443589d7d46e3c9d83b67) Thanks [@belgattitude](https://github.com/belgattitude)! - Deps to latest

- [#758](https://github.com/belgattitude/shared-dx/pull/758) [`aa9a310`](https://github.com/belgattitude/shared-dx/commit/aa9a310ca6cb0ec92f50770ca4cdb800a004f806) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint plusins react-query and tailwindcss

- [#714](https://github.com/belgattitude/shared-dx/pull/714) [`e1c99f7`](https://github.com/belgattitude/shared-dx/commit/e1c99f7b14c41d90919db4c77a328c8d7b5a0983) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/no-commented-code (doesn't play well with api doc)

- [`d8fc447`](https://github.com/belgattitude/shared-dx/commit/d8fc447e3afe644738d2ef63ae280aacf4e3f801) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/no-redundant-optional as it does not play well with exactOptionalTypes

## 6.0.0-canary.20

### Major Changes

- [#773](https://github.com/belgattitude/shared-dx/pull/773) [`cdbc6b9`](https://github.com/belgattitude/shared-dx/commit/cdbc6b9d385302fc76e92cc3539bff4706fca5a3) Thanks [@belgattitude](https://github.com/belgattitude)! - Support typescript 5.6 (plugin update)

- [#773](https://github.com/belgattitude/shared-dx/pull/773) [`cdbc6b9`](https://github.com/belgattitude/shared-dx/commit/cdbc6b9d385302fc76e92cc3539bff4706fca5a3) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/deprecation as it's handled in typescript/eslint

## 6.0.0-canary.19

### Major Changes

- [#767](https://github.com/belgattitude/shared-dx/pull/767) [`8fa9cb4`](https://github.com/belgattitude/shared-dx/commit/8fa9cb4efc7efc3028e2431e8f5a4448d4bf5a88) Thanks [@belgattitude](https://github.com/belgattitude)! - Revert no-restricted-entries in performance

## 6.0.0-canary.18

### Minor Changes

- [#765](https://github.com/belgattitude/shared-dx/pull/765) [`80c2614`](https://github.com/belgattitude/shared-dx/commit/80c261447033b6de8056f322854f536474fba1a1) Thanks [@belgattitude](https://github.com/belgattitude)! - Performance base shoudn't be run on test files

## 6.0.0-canary.17

### Major Changes

- [#762](https://github.com/belgattitude/shared-dx/pull/762) [`5ae64f3`](https://github.com/belgattitude/shared-dx/commit/5ae64f330190544dfa47de9904349b64380fa7d8) Thanks [@belgattitude](https://github.com/belgattitude)! - Allow eslint-plugin-react-hook to v5

### Minor Changes

- [#762](https://github.com/belgattitude/shared-dx/pull/762) [`5ae64f3`](https://github.com/belgattitude/shared-dx/commit/5ae64f330190544dfa47de9904349b64380fa7d8) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint-plugin-playwright to 1.7.0

- [#764](https://github.com/belgattitude/shared-dx/pull/764) [`eec868c`](https://github.com/belgattitude/shared-dx/commit/eec868ca16ae89e6e28a96a2fcc64b1b49064533) Thanks [@belgattitude](https://github.com/belgattitude)! - Config-base performance, disallow object entries for perf

## 6.0.0-canary.16

### Minor Changes

- [#761](https://github.com/belgattitude/shared-dx/pull/761) [`47d8d56`](https://github.com/belgattitude/shared-dx/commit/47d8d566dca1d13a9eaf479b5352212e57dfcf83) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable jest/no-standalone-expect by default

### Patch Changes

- [#758](https://github.com/belgattitude/shared-dx/pull/758) [`aa9a310`](https://github.com/belgattitude/shared-dx/commit/aa9a310ca6cb0ec92f50770ca4cdb800a004f806) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/no-misused promises as it is availble with typescript-eslint

- [#758](https://github.com/belgattitude/shared-dx/pull/758) [`aa9a310`](https://github.com/belgattitude/shared-dx/commit/aa9a310ca6cb0ec92f50770ca4cdb800a004f806) Thanks [@belgattitude](https://github.com/belgattitude)! - Update eslint plusins react-query and tailwindcss

## 6.0.0-canary.15

### Patch Changes

- [#754](https://github.com/belgattitude/shared-dx/pull/754) [`ad5795c`](https://github.com/belgattitude/shared-dx/commit/ad5795c293168efd11889d7a0cb97b8a939c80b8) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest typescript-eslint-plugin

## 6.0.0-canary.14

### Major Changes

- [#751](https://github.com/belgattitude/shared-dx/pull/751) [`022a9b9`](https://github.com/belgattitude/shared-dx/commit/022a9b94a445d6df518a4fc108c6917de023e632) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint plugin unicorn to v56

## 6.0.0-canary.13

### Major Changes

- [#742](https://github.com/belgattitude/shared-dx/pull/742) [`9009742`](https://github.com/belgattitude/shared-dx/commit/90097427100c3cf200eac5bda2689654f591b890) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint-plugin-import-x to 4.3.0

- [#747](https://github.com/belgattitude/shared-dx/pull/747) [`afffb51`](https://github.com/belgattitude/shared-dx/commit/afffb513d6d05de19e0f21c36e5f4a6546b7f3ea) Thanks [@belgattitude](https://github.com/belgattitude)! - Update plugins to latest (storybook, typescript-eslint, import-x)

- [#739](https://github.com/belgattitude/shared-dx/pull/739) [`630be56`](https://github.com/belgattitude/shared-dx/commit/630be5607ba6777770b6ec6007fb1e822e7a0419) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest deps

## 6.0.0-canary.12

### Patch Changes

- [#734](https://github.com/belgattitude/shared-dx/pull/734) [`f5fb9f7`](https://github.com/belgattitude/shared-dx/commit/f5fb9f70a6f0dbb60054232b9d74e30ef6e87e29) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest plugin updates

## 6.0.0-canary.11

### Major Changes

- [#728](https://github.com/belgattitude/shared-dx/pull/728) [`99225de`](https://github.com/belgattitude/shared-dx/commit/99225debc49d8cf6835aa692b5fc01d56eda5306) Thanks [@belgattitude](https://github.com/belgattitude)! - Update react-query and react plugins

## 6.0.0-canary.10

### Minor Changes

- [#723](https://github.com/belgattitude/shared-dx/pull/723) [`e0f0786`](https://github.com/belgattitude/shared-dx/commit/e0f0786dc50b59aa8a67401eabc12aaf9c7f72b8) Thanks [@belgattitude](https://github.com/belgattitude)! - Update typescript-eslint to 8.5.0

## 6.0.0-canary.9

### Patch Changes

- [`d8fc447`](https://github.com/belgattitude/shared-dx/commit/d8fc447e3afe644738d2ef63ae280aacf4e3f801) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/no-redundant-optional as it does not play well with exactOptionalTypes

## 6.0.0-canary.8

### Patch Changes

- [`5b6504e`](https://github.com/belgattitude/shared-dx/commit/5b6504ef04acd25085eb88f0c764069e40a86b0c) Thanks [@belgattitude](https://github.com/belgattitude)! - Disabled sonar-no-unused-vars, it's handled by typescript-eslint

## 6.0.0-canary.7

### Major Changes

- [#717](https://github.com/belgattitude/shared-dx/pull/717) [`5ae1607`](https://github.com/belgattitude/shared-dx/commit/5ae1607921ce1463f6daf09952b375e0a66624bc) Thanks [@belgattitude](https://github.com/belgattitude)! - By default uses typescript-eslint projectService available in v8

### Patch Changes

- [#717](https://github.com/belgattitude/shared-dx/pull/717) [`5ae1607`](https://github.com/belgattitude/shared-dx/commit/5ae1607921ce1463f6daf09952b375e0a66624bc) Thanks [@belgattitude](https://github.com/belgattitude)! - Update perfectionist plugin

## 6.0.0-canary.6

### Patch Changes

- [#714](https://github.com/belgattitude/shared-dx/pull/714) [`e1c99f7`](https://github.com/belgattitude/shared-dx/commit/e1c99f7b14c41d90919db4c77a328c8d7b5a0983) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable sonarjs/no-commented-code (doesn't play well with api doc)

## 6.0.0-canary.5

### Major Changes

- [#712](https://github.com/belgattitude/shared-dx/pull/712) [`fdbb649`](https://github.com/belgattitude/shared-dx/commit/fdbb649c5354f9931cab03e796a3f0da1190778d) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable some sonarjs rules for test and bench files

## 6.0.0-canary.4

### Patch Changes

- [#710](https://github.com/belgattitude/shared-dx/pull/710) [`63299fd`](https://github.com/belgattitude/shared-dx/commit/63299fd2752efff425c443589d7d46e3c9d83b67) Thanks [@belgattitude](https://github.com/belgattitude)! - Deps to latest

## 6.0.0-canary.3

### Major Changes

- [#708](https://github.com/belgattitude/shared-dx/pull/708) [`01053a0`](https://github.com/belgattitude/shared-dx/commit/01053a04c62f115eaa62d591f0b3cf79054af3b0) Thanks [@belgattitude](https://github.com/belgattitude)! - Update to sonarjs v2

## 6.0.0-canary.2

### Patch Changes

- [#703](https://github.com/belgattitude/shared-dx/pull/703) [`2f4255c`](https://github.com/belgattitude/shared-dx/commit/2f4255caf448d47656bedb8ee53703a38c2b1d58) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest fixes and updates to typescript-eslint8

## 6.0.0-canary.1

### Major Changes

- [`0c0e549`](https://github.com/belgattitude/shared-dx/commit/0c0e549ea05331ef880689c18f0ff1493ef73641) Thanks [@belgattitude](https://github.com/belgattitude)! - Upgrade sonarjs plugin to v1

- [`08da902`](https://github.com/belgattitude/shared-dx/commit/08da902e73444770958b9c9c63b008e4e0edc714) Thanks [@belgattitude](https://github.com/belgattitude)! - Tune import-x/no-unused-modules

## 6.0.0-canary.0

### Major Changes

- [#689](https://github.com/belgattitude/shared-dx/pull/689) [`888cecd`](https://github.com/belgattitude/shared-dx/commit/888cecdae164fe67ef5590948c377358300e2929) Thanks [@belgattitude](https://github.com/belgattitude)! - Upgrade to typescript-eslint 8

- [#689](https://github.com/belgattitude/shared-dx/pull/689) [`888cecd`](https://github.com/belgattitude/shared-dx/commit/888cecdae164fe67ef5590948c377358300e2929) Thanks [@belgattitude](https://github.com/belgattitude)! - Remove support for eslint-plugin-import and replace by by eslint-plugin-import-x

## 5.17.0

### Minor Changes

- [#675](https://github.com/belgattitude/shared-dx/pull/675) [`3ca2e69`](https://github.com/belgattitude/shared-dx/commit/3ca2e696c3d344a6c92e6c04eb521c930519fc24) Thanks [@belgattitude](https://github.com/belgattitude)! - Enable typescript default-param-last rule by default

  See https://typescript-eslint.io/rules/default-param-last/

## 5.16.0

### Minor Changes

- [#671](https://github.com/belgattitude/shared-dx/pull/671) [`b601eb6`](https://github.com/belgattitude/shared-dx/commit/b601eb6b29a1713ab3d63d47102552ae54d039bd) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 5.15.0

### Minor Changes

- [#663](https://github.com/belgattitude/shared-dx/pull/663) [`f04a574`](https://github.com/belgattitude/shared-dx/commit/f04a5741dfb75aa82669e66a60550a037c44bedf) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 5.14.1

### Patch Changes

- [#654](https://github.com/belgattitude/shared-dx/pull/654) [`eb75be6`](https://github.com/belgattitude/shared-dx/commit/eb75be631100789ef754e3cd918d0c3496f9a56e) Thanks [@belgattitude](https://github.com/belgattitude)! - Update react-query plugin to latest

## 5.14.0

### Minor Changes

- [#652](https://github.com/belgattitude/shared-dx/pull/652) [`b34c2fa`](https://github.com/belgattitude/shared-dx/commit/b34c2fa2d4c7332ba65faac8ce660f0affb0f36c) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript 5.5 support

- [#649](https://github.com/belgattitude/shared-dx/pull/649) [`0065ace`](https://github.com/belgattitude/shared-dx/commit/0065ace2459769cac8bb834fb61722bd5d9c1772) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 5.13.0

### Minor Changes

- [#641](https://github.com/belgattitude/shared-dx/pull/641) [`37be935`](https://github.com/belgattitude/shared-dx/commit/37be935477e95b337a0d08663aa1d2a4092886f8) Thanks [@belgattitude](https://github.com/belgattitude)! - Unicorn plugin to v54

## 5.12.0

### Minor Changes

- [#638](https://github.com/belgattitude/shared-dx/pull/638) [`ffc142e`](https://github.com/belgattitude/shared-dx/commit/ffc142e2802bd1f9e4773da1cb9ab34ef5da72fd) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 5.11.1

### Patch Changes

- [#632](https://github.com/belgattitude/shared-dx/pull/632) [`ff47836`](https://github.com/belgattitude/shared-dx/commit/ff478360e29862a8995a76e10c13ae0c41d8f53b) Thanks [@belgattitude](https://github.com/belgattitude)! - Latest plugins: tailwind, jest

## 5.11.0

### Minor Changes

- [#629](https://github.com/belgattitude/shared-dx/pull/629) [`9dd1bfe`](https://github.com/belgattitude/shared-dx/commit/9dd1bfe6cf61da75b66b58d1303b3f7d0bf39b91) Thanks [@belgattitude](https://github.com/belgattitude)! - Update typescript eslint

## 5.10.0

### Minor Changes

- [#625](https://github.com/belgattitude/shared-dx/pull/625) [`38f8aa7`](https://github.com/belgattitude/shared-dx/commit/38f8aa7cec4fec254b51f2a83cd384de217308ae) Thanks [@belgattitude](https://github.com/belgattitude)! - Plugins updates

## 5.9.0

### Minor Changes

- [#616](https://github.com/belgattitude/shared-dx/pull/616) [`02d2bf0`](https://github.com/belgattitude/shared-dx/commit/02d2bf0dc9211b5c7d26c29462a770f80728821d) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 5.8.0

### Minor Changes

- [#608](https://github.com/belgattitude/shared-dx/pull/608) [`92f6da1`](https://github.com/belgattitude/shared-dx/commit/92f6da14809f88a2eb9380cd4333a0a0399468b8) Thanks [@belgattitude](https://github.com/belgattitude)! - Enforce "@typescript-eslint/method-signature-style" property by default

  Link https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful

  ```
  // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  ```

## 5.7.0

### Minor Changes

- [#606](https://github.com/belgattitude/shared-dx/pull/606) [`5c6e170`](https://github.com/belgattitude/shared-dx/commit/5c6e170ac28423189028b9c4769a431c65606e75) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 5.6.0

### Minor Changes

- [#602](https://github.com/belgattitude/shared-dx/pull/602) [`2e234ad`](https://github.com/belgattitude/shared-dx/commit/2e234ad12a8a1336f471d1c9b60963e81157a5bf) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint-plugin-unicorn to v53

## 5.5.1

### Patch Changes

- [#591](https://github.com/belgattitude/shared-dx/pull/591) [`e4cebca`](https://github.com/belgattitude/shared-dx/commit/e4cebca3ced366e5b16a76da5d0b658fc1f15d34) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint-plugin-jest to latest

## 5.5.0

### Minor Changes

- [#585](https://github.com/belgattitude/shared-dx/pull/585) [`00ce12e`](https://github.com/belgattitude/shared-dx/commit/00ce12e3ace22dcfb929a79cf88e682c5cb8abcc) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

### Patch Changes

- [#585](https://github.com/belgattitude/shared-dx/pull/585) [`00ce12e`](https://github.com/belgattitude/shared-dx/commit/00ce12e3ace22dcfb929a79cf88e682c5cb8abcc) Thanks [@belgattitude](https://github.com/belgattitude)! - Fix eslint-plugin-import / typescript-eslint compat

- [#585](https://github.com/belgattitude/shared-dx/pull/585) [`00ce12e`](https://github.com/belgattitude/shared-dx/commit/00ce12e3ace22dcfb929a79cf88e682c5cb8abcc) Thanks [@belgattitude](https://github.com/belgattitude)! - - eslint-plugin-reack-hook minimum version to 4.6.2

## 5.4.1

### Patch Changes

- [#582](https://github.com/belgattitude/shared-dx/pull/582) [`974ca15`](https://github.com/belgattitude/shared-dx/commit/974ca15f47bb6735b76088f8e33642a1aeceb379) Thanks [@belgattitude](https://github.com/belgattitude)! - eslint-plugin-reack-hook minimum version to 4.6.2

## 5.4.0

### Minor Changes

- [#578](https://github.com/belgattitude/shared-dx/pull/578) [`34cab7f`](https://github.com/belgattitude/shared-dx/commit/34cab7f78cafcb405494d2c4c323004dfa7ab3c5) Thanks [@belgattitude](https://github.com/belgattitude)! - To latest plugins

- [#578](https://github.com/belgattitude/shared-dx/pull/578) [`34cab7f`](https://github.com/belgattitude/shared-dx/commit/34cab7f78cafcb405494d2c4c323004dfa7ab3c5) Thanks [@belgattitude](https://github.com/belgattitude)! - Add eslint-plugin-import-x

  ```js
  require('@belgattitude/eslint-config-bases/patch/modern-module-resolution');

  module.exports = {
    extends: [
      // Group 1: recommended always
      '@belgattitude/eslint-config-bases/typescript',
      '@belgattitude/eslint-config-bases/simple-import-sort',

      '@belgattitude/eslint-config-bases/import-x',

      // ...
    ],
  };
  ```

## 5.3.0

### Minor Changes

- [#571](https://github.com/belgattitude/shared-dx/pull/571) [`706cf43`](https://github.com/belgattitude/shared-dx/commit/706cf432293a9e5194f001b12b800108fc7cdf1a) Thanks [@belgattitude](https://github.com/belgattitude)! - Plugins to latest

## 5.2.0

### Minor Changes

- [#567](https://github.com/belgattitude/shared-dx/pull/567) [`2af7b37`](https://github.com/belgattitude/shared-dx/commit/2af7b37caaf422e6fad15a01e7e7a87e3d7dbfef) Thanks [@belgattitude](https://github.com/belgattitude)! - Update typescript/eslint plugin and all to latest (prepare eslint v9)

## 5.1.0

### Minor Changes

- [#562](https://github.com/belgattitude/shared-dx/pull/562) [`a12c7ee`](https://github.com/belgattitude/shared-dx/commit/a12c7ee2d64319a73d4b29ad6d624603a58eb984) Thanks [@belgattitude](https://github.com/belgattitude)! - Update unicorn eslint plugin to 52.0.0

## 5.0.0

### Major Changes

- [#546](https://github.com/belgattitude/shared-dx/pull/546) [`4b580f1`](https://github.com/belgattitude/shared-dx/commit/4b580f172f7c06347ec1eba11c66961266424d7b) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript eslint v7.4, drop react query eslint plugin < 5, allow prettier 4 alpha.

  If you encounter issues like 'ESLint couldn't determine the plugin "import" uniquely.'. Ensure
  that other plugins are on typescript-eslint v7 as well.

  > For Next.js users, the Next.js eslint config < 14.2.0 doesn't support typescript-eslint v7.
  > See this PR: https://github.com/vercel/next.js/pull/62137. To allow v7 either wait for
  > 14.2.0 to be releases or override the package version
  > [PR]

  ```json
  {
    "resolutions": {
      "@typescript-eslint/eslint-plugin": "^7.4.0",
      "@typescript-eslint/parser": "^7.4.0",
      "@typescript-eslint/typescript-estree": "^7.4.0",
      "@typescript-eslint/utils": "^7.4.0"
    }
  }
  ```

## 4.13.1

### Patch Changes

- [#544](https://github.com/belgattitude/shared-dx/pull/544) [`f0b958e`](https://github.com/belgattitude/shared-dx/commit/f0b958e98578ea78b7efb0568073e84939fbb8c1) Thanks [@belgattitude](https://github.com/belgattitude)! - Small plugin updates

## 4.13.0

### Minor Changes

- [#540](https://github.com/belgattitude/shared-dx/pull/540) [`b9320a7`](https://github.com/belgattitude/shared-dx/commit/b9320a71ae3f0dba908ae90cb241fe882ee57a16) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 4.12.0

### Minor Changes

- [#530](https://github.com/belgattitude/shared-dx/pull/530) [`3e10a96`](https://github.com/belgattitude/shared-dx/commit/3e10a96f152a0aef0f5378fd0b9d548596fe5400) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript eslint to latest 6.20.0

## 4.11.0

### Minor Changes

- [`173ba53`](https://github.com/belgattitude/shared-dx/commit/173ba53784ae42d4d68254a251d262550d708acd) Thanks [@belgattitude](https://github.com/belgattitude)! - All eslint plugins to latest

## 4.10.0

### Minor Changes

- [#500](https://github.com/belgattitude/shared-dx/pull/500) [`e878fa8`](https://github.com/belgattitude/shared-dx/commit/e878fa8bf13745e4f7323b92039c830a018dc8c5) Thanks [@belgattitude](https://github.com/belgattitude)! - All eslint plugins to latest

## 4.9.0

### Minor Changes

- [#487](https://github.com/belgattitude/shared-dx/pull/487) [`c7e2bae`](https://github.com/belgattitude/shared-dx/commit/c7e2bae93d186f01204851e757a14a7b3a6e189e) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 4.8.0

### Minor Changes

- [#481](https://github.com/belgattitude/shared-dx/pull/481) [`7b1b87d`](https://github.com/belgattitude/shared-dx/commit/7b1b87dd5840769b895b0c9418dabd39de917500) Thanks [@belgattitude](https://github.com/belgattitude)! - Add jest prefer-to-be and jest prefer-to-contain

## 4.7.0

### Minor Changes

- [#473](https://github.com/belgattitude/shared-dx/pull/473) [`5ce0b1c`](https://github.com/belgattitude/shared-dx/commit/5ce0b1c5e0b153146b706dd5c1808cff9cca66f6) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 4.6.0

### Minor Changes

- [#467](https://github.com/belgattitude/shared-dx/pull/467) [`13b44e4`](https://github.com/belgattitude/shared-dx/commit/13b44e4c44e2231c1d2acebe09d5f656e8f10a20) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 4.5.0

### Minor Changes

- [#465](https://github.com/belgattitude/shared-dx/pull/465) [`4f26b88`](https://github.com/belgattitude/shared-dx/commit/4f26b882827d350a7fd2d88a7d8c367d8cc20e4a) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable eslint-plugin-import sort

  In preparation for dprint support, you must now opt-in for import/export sort.

  ```js
  module.exports = {
    // for brevity
    extends: [
      // Group 1: recommended always
      '@belgattitude/eslint-config-bases/typescript',
      '@belgattitude/eslint-config-bases/simple-import-sort',
      // ...rest
    ],
  };
  ```

  Note that the [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) has been changed to [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
  internally. Expect to relint your codebase.

  This change bring some speedups. In a next release those rules can be opt-out
  easily in favour of dprint, biome... which does as faster job (stylistic)

## 4.4.0

### Minor Changes

- [#457](https://github.com/belgattitude/shared-dx/pull/457) [`3af1812`](https://github.com/belgattitude/shared-dx/commit/3af1812163f1fdbc3a5df866c4d0f57885648526) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable import/no-unresolved by default

## 4.3.1

### Patch Changes

- [`2c5dee3`](https://github.com/belgattitude/shared-dx/commit/2c5dee3f7bc22a75d0a82c7de4b4fac70f19a87d) - Latest typescript 6.13.1 to fix jsdoc

## 4.3.0

### Minor Changes

- [#449](https://github.com/belgattitude/shared-dx/pull/449) [`5f17ce5`](https://github.com/belgattitude/shared-dx/commit/5f17ce564ed60268e9648f7a0d92950b4538d832) Thanks [@belgattitude](https://github.com/belgattitude)! - Relax unicorn rules to avoid potential errors

## 4.2.0

### Minor Changes

- [#447](https://github.com/belgattitude/shared-dx/pull/447) [`9eb00c1`](https://github.com/belgattitude/shared-dx/commit/9eb00c1e5d953eaca4b668bc08317bb0d76340ec) Thanks [@belgattitude](https://github.com/belgattitude)! - Disable @typescript-eslint/require-await by default

### Patch Changes

- [#446](https://github.com/belgattitude/shared-dx/pull/446) [`7c4ae6c`](https://github.com/belgattitude/shared-dx/commit/7c4ae6c4c5e19e684cb401a219f6c9309e799129) Thanks [@belgattitude](https://github.com/belgattitude)! - Use ecma latest in sonarjs

## 4.1.1

### Patch Changes

- [#444](https://github.com/belgattitude/shared-dx/pull/444) [`7cab07f`](https://github.com/belgattitude/shared-dx/commit/7cab07f4321c0500b1873d341b6c2453b629eae8) Thanks [@belgattitude](https://github.com/belgattitude)! - Ensure @typescript-eslint/typescript-estree is at latest

## 4.1.0

### Minor Changes

- [#442](https://github.com/belgattitude/shared-dx/pull/442) [`5fe7bf6`](https://github.com/belgattitude/shared-dx/commit/5fe7bf6947257fb9cec9b0bb50e05d990d13ba30) Thanks [@belgattitude](https://github.com/belgattitude)! - Support typescript 5.3 (plugins updates)

## 4.0.1

### Patch Changes

- [#428](https://github.com/belgattitude/shared-dx/pull/428) [`59b1f15`](https://github.com/belgattitude/shared-dx/commit/59b1f158cd331ad4ee80fec220a1ad35d60f24ba) Thanks [@belgattitude](https://github.com/belgattitude)! - Relax unicorn/error-message for test files

## 4.0.0

### Major Changes

- [#427](https://github.com/belgattitude/shared-dx/pull/427) [`309e441`](https://github.com/belgattitude/shared-dx/commit/309e441aa9834588886a2d60acca832a069ebaac) Thanks [@belgattitude](https://github.com/belgattitude)! - Enable unicorn linter (add a bunch of stricter rules)

  See: https://github.com/sindresorhus/eslint-plugin-unicorn

### Minor Changes

- [#427](https://github.com/belgattitude/shared-dx/pull/427) [`309e441`](https://github.com/belgattitude/shared-dx/commit/309e441aa9834588886a2d60acca832a069ebaac) Thanks [@belgattitude](https://github.com/belgattitude)! - Export a dedicated performance group

  ```
      // Group 4: Performance related (ie: set vs includes...)
      "@belgattitude/eslint-config-bases/performance",
  ```

## 3.5.1

### Patch Changes

- [#421](https://github.com/belgattitude/shared-dx/pull/421) [`b6e31db`](https://github.com/belgattitude/shared-dx/commit/b6e31db82086681744c65ab8c2b8f36c097be706) Thanks [@belgattitude](https://github.com/belgattitude)! - Perfectionist plugin updated to latest

## 3.5.0

### Minor Changes

- [#414](https://github.com/belgattitude/shared-dx/pull/414) [`ff19cf3`](https://github.com/belgattitude/shared-dx/commit/ff19cf3090da7f4305f7205e6bfda9e7e924f4c8) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript eslint parser to latest (6.11)

## 3.4.0

### Minor Changes

- [#407](https://github.com/belgattitude/shared-dx/pull/407) [`fe9a01d`](https://github.com/belgattitude/shared-dx/commit/fe9a01d8ab7502a42f02e3176f58ab7fa871c2f3) Thanks [@belgattitude](https://github.com/belgattitude)! - Enable no-constant-binary-expression by default

  See https://eslint.org/blog/2022/07/interesting-bugs-caught-by-no-constant-binary-expression/ and
  https://news.ycombinator.com/item?id=38196644

## 3.3.0

### Minor Changes

- [#404](https://github.com/belgattitude/shared-dx/pull/404) [`8e6175e`](https://github.com/belgattitude/shared-dx/commit/8e6175e5edb16fab5b7776c2b2ed353e2c0007df) Thanks [@belgattitude](https://github.com/belgattitude)! - Adapt perfectionist rules and add jsx as optional

  ```javascript
  module.exports = {
    overrides: [
      {
        extends: ['plugin:perfectionist/recommended-natural'],
        files: ['*.js', '*.cjs', '*.mjs', '*.ts'],
        rules: {
          // import/order is used
          'perfectionist/sort-named-imports': 'off',
          'perfectionist/sort-imports': 'off',
          // Keep at false as it can create issue when code relies on keys order
          'perfectionist/sort-maps': 'off',
          // Keep at false as cause it does not work with class properties
          'perfectionist/sort-classes': 'off',
          // Keep at false as it can create issue when code relies on keys order
          'perfectionist/sort-objects': 'off',
          // Keep at false as it can create issue when code relies on keys order
          'perfectionist/sort-union-types': 'off',
          // May introduce performance degradation
          'perfectionist/sort-array-includes': 'off',
          'perfectionist/sort-jsx-props': 'off',
        },
      },
    ],
  };
  ```

## 3.2.0

### Minor Changes

- [#398](https://github.com/belgattitude/shared-dx/pull/398) [`42952ba`](https://github.com/belgattitude/shared-dx/commit/42952ba6d70d9a1a050f42f2f9424ce48ceef9ee) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 3.1.0

### Minor Changes

- [`4e09338`](https://github.com/belgattitude/shared-dx/commit/4e09338d651fc139d157767f252658e66d1424fa) Thanks [@belgattitude](https://github.com/belgattitude)! - Add plugin perfectionist

## 3.0.0

### Major Changes

- [`2ad81c0`](https://github.com/belgattitude/shared-dx/commit/2ad81c00acacebe11b65a2ebd95666a2661832ba) Thanks [@belgattitude](https://github.com/belgattitude)! - Drop support for prettier 2 (only prettier 3 is supported)

- [`2ad81c0`](https://github.com/belgattitude/shared-dx/commit/2ad81c00acacebe11b65a2ebd95666a2661832ba) Thanks [@belgattitude](https://github.com/belgattitude)! - Drop support for typescript < 5.0.2

- [`aff1796`](https://github.com/belgattitude/shared-dx/commit/aff17967002bdd1d43d55d07fc884b02309bdc16) Thanks [@belgattitude](https://github.com/belgattitude)! - Allow @tanstack/eslint-plugin-query dep to be "^4.36.1 || ^5.0.5".
  If you experience issue with your package manager (ie: yarn will automatically install
  the highest version rather than the stable one), you can always force the resolution:

  ```json
  {
    "resolutions": {
      "eslint-plugin-react-hooks": "^4.36.1"
    }
  }
  ```

  This is a temporary solution to not have to declare the plugin as a peerDependency for now.
  (eslint flat config will help in the future)

- [`2ad81c0`](https://github.com/belgattitude/shared-dx/commit/2ad81c00acacebe11b65a2ebd95666a2661832ba) Thanks [@belgattitude](https://github.com/belgattitude)! - Allow eslint-plugin-react-hooks dep to be "^4.6.0 || 5.0.0-canary-7118f5dd7-20230705".
  If you experience issue with your package manager (ie: yarn will automatically install
  the canary version rather than the stable one), you can always force the resolution:

  ```json
  {
    "resolutions?": {
      "eslint-plugin-react-hooks": "https://github.com/vercel/next.js/issues/52365"
    },
    "resolutions": {
      "eslint-plugin-react-hooks": "^4.6.0"
    }
  }
  ```

  This change was made to accommodate usage with nextjs latest versions (based on react canaries)

  See also https://github.com/vercel/next.js/issues/52365

  This is a temporary solution to not have to declare the plugin as a peerDependency for now.
  (eslint flat config will help in the future)

### Minor Changes

- [`2ad81c0`](https://github.com/belgattitude/shared-dx/commit/2ad81c00acacebe11b65a2ebd95666a2661832ba) Thanks [@belgattitude](https://github.com/belgattitude)! - Minimum version to node 18.17.0 (was 18.12.0)

## 2.10.0

### Minor Changes

- [#388](https://github.com/belgattitude/shared-dx/pull/388) [`f91355c`](https://github.com/belgattitude/shared-dx/commit/f91355ce1d6df43975be3538ca1416114b0f1402) Thanks [@belgattitude](https://github.com/belgattitude)! - Ban node.js buffer by default, prefer UInt8Array

  > See reasoning in https://sindresorhus.com/blog/goodbye-nodejs-buffer

  There's a transitional package that helps to fill current gaps in UInt8Array
  till limitations lands into ecmascript.

  https://github.com/sindresorhus/uint8array-extras

- [#387](https://github.com/belgattitude/shared-dx/pull/387) [`33069c5`](https://github.com/belgattitude/shared-dx/commit/33069c575d62166aa63f8a5fafa9675a67d509c7) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 2.9.0

### Minor Changes

- [#374](https://github.com/belgattitude/shared-dx/pull/374) [`5061142`](https://github.com/belgattitude/shared-dx/commit/50611420cbc136cc7827949fcf568fc50b484073) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 2.8.0

### Minor Changes

- [#366](https://github.com/belgattitude/shared-dx/pull/366) [`31041e4`](https://github.com/belgattitude/shared-dx/commit/31041e4ffac7c84d297dbea824c8021582947de7) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 2.7.0

### Minor Changes

- [#362](https://github.com/belgattitude/shared-dx/pull/362) [`3f04d33`](https://github.com/belgattitude/shared-dx/commit/3f04d334294bd5dcdb35f3fafbdcf6b3a0582dae) Thanks [@belgattitude](https://github.com/belgattitude)! - All plugins to latest

## 2.6.0

### Minor Changes

- [#349](https://github.com/belgattitude/shared-dx/pull/349) [`f6212cf`](https://github.com/belgattitude/shared-dx/commit/f6212cf7615062f125b00d38cdaf47beef0e882a) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript eslint parser to latest

## 2.5.0

### Minor Changes

- [#341](https://github.com/belgattitude/shared-dx/pull/341) [`68d1317`](https://github.com/belgattitude/shared-dx/commit/68d1317b4f6070e33eaad47fbdc06cb625696ef3) Thanks [@belgattitude](https://github.com/belgattitude)! - Add and enable eslint-plugin-unused-imports

## 2.4.0

### Minor Changes

- [#339](https://github.com/belgattitude/shared-dx/pull/339) [`387d442`](https://github.com/belgattitude/shared-dx/commit/387d4422d7c726a3daf179e54bb234c4f6e8879f) Thanks [@belgattitude](https://github.com/belgattitude)! - Typescript 5.2 support

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
