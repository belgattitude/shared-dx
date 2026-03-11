import { importX } from 'eslint-plugin-import-x';
import { defineConfig } from 'eslint/config';

import { filePatterns } from '../file-patterns.mjs';

export const baseImportXConfig = defineConfig([
  // @ts-expect-error eslint-plugin-import-x has no types
  importX.flatConfigs.recommended,
  {
    files: filePatterns.anyCodeFile,
    rules: {
      'import-x/no-unused-modules': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/export': 'error',
      'import-x/namespace': 'off',
      'import-x/named': 'off',
    },
  },
]);
