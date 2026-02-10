import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';

import { filePatterns } from '../file-patterns.mjs';

export const baseImportXConfig = defineConfig([
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }),
      ],
    },
  },
  // @ts-expect-error eslint-plugin-import-x has no types
  importX.flatConfigs.recommended,
  {
    files: filePatterns.anyCodeFile,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
      },
    },
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

