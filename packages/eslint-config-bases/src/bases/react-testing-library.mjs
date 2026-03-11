import testingLibrary from 'eslint-plugin-testing-library';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { filePatterns } from '../file-patterns.mjs';

export const baseReactTestingLibraryConfig = defineConfig([
  {
    plugins: {
      ...testingLibrary.configs['flat/react'].plugins,
    },
    files: filePatterns.testFile,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      ...testingLibrary.configs.react.rules,
      'testing-library/prefer-user-event': ['warn'],
    },
  },
  {
    files: ['**/test-utils.tsx'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/export': 'off',
    },
  },
]);
