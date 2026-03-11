import { configs } from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';

import { filePatterns } from '../file-patterns.mjs';

export const baseSonarConfig = defineConfig([
  // Base for all JS/TS code
  {
    // Deprecated anyCodeFile to be removed in future versions
    // use anyCodeFile instead, the previous implementation from belgatti included only js/jsx/mjs/tsx files without ts
    // to avoid breaking changes we keep this config for legacyAnyCodeFile (as there are lots of ts files in the codebase not yet migrated to sonar rules)
    files: filePatterns.anyCodeFile,
    ignores: [...filePatterns.testFile, ...filePatterns.storybookFile],
    plugins: { ...configs.recommended.plugins },
    settings: { ...configs.recommended.settings },
    rules: {
      ...configs.recommended.rules,
      'sonarjs/no-selector-parameter': 'off',
      'sonarjs/arguments-order': 'off',
      'sonarjs/no-async-constructor': 'off',
      'sonarjs/todo-tag': 'off',
      'sonarjs/void-use': 'off',
      'sonarjs/redundant-type-aliases': 'off',
      // Better handled by typescript-eslint
      'sonarjs/no-unused-vars': 'off',
      // better handled by jsx-a11y plugin
      'sonarjs/anchor-is-valid': 'off',
      'sonarjs/label-has-associated-control': 'off',
      // it makes too much noise
      'sonarjs/prefer-read-only-props': 'off',
      // Typescript-eslint does the job well enough
      'sonarjs/no-misused-promises': 'off',
      // Because plugin unused-import does it better (autofix)
      'sonarjs/unused-import': 'off',
      // because it doesn't play well with inlined comment api doc
      'sonarjs/no-commented-code': 'off',
      // because it's handled by typescript-eslint
      'sonarjs/sonar-no-unused-vars': 'off',
      // because it's handled by typescript-eslint
      'sonarjs/deprecation': 'off',
      // because it doesn't play well with exactOptionalTypes
      'sonarjs/no-redundant-optional': 'off',
      'sonarjs/jsx-no-useless-fragment': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/different-types-comparison': 'off',
    },
  },
  // React JSX/TSX relaxations
  {
    files: filePatterns.jsxOrTsxFile,
    plugins: { ...configs.recommended.plugins },
    rules: {
      'sonarjs/cognitive-complexity': ['error', 16],
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/function-return-type': 'off',
    },
  },
  // JS-only bases (parser override)
  {
    files: filePatterns.jsFile,
    plugins: { ...configs.recommended.plugins },
    rules: {
      'sonarjs/no-all-duplicated-branches': 'off',
      'sonarjs/no-duplicate-string': 'off',
    },
  },
]);
