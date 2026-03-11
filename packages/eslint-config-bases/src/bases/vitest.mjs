import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { filePatterns } from '../file-patterns.mjs';

export const baseVitestConfig = defineConfig([
  {
    files: filePatterns.testFile,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/expect-expect': [
        'error',
        {
          assertFunctionNames: [
            'expect',
            'expectTypeOf',
            'assertType',
            'assert*',
          ],
          additionalTestBlockFunctions: [],
        },
      ],
      'vitest/no-standalone-expect': 'off',
      'vitest/no-restricted-matchers': [
        'error',
        {
          toBeFalsy: null,
          toBeTruthy: null,
          /*
            resolves: 'Use `expect(await promise)` instead.',
            toHaveBeenCalledWith: null,
            'not.toHaveBeenCalledWith': null,
            'resolves.toHaveBeenCalledWith': null,
            'rejects.toHaveBeenCalledWith': null,
            'resolves.not.toHaveBeenCalledWith': null,
            'rejects.not.toHaveBeenCalledWith': null,
            */
        },
      ],
    },
  },
]);
