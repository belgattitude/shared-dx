import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

import { filePatterns } from '../file-patterns.mjs';

export const baseSimpleImportSortConfig = defineConfig([
  {
    files: filePatterns.anyCodeFile,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'linebreak-style': ['error', 'unix'],
      'no-duplicate-imports': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-imports': 'off',
    },
  },
]);

