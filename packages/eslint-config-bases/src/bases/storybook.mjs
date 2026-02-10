
import { defineConfig } from 'eslint/config';
import { configs as storybookConfigs } from 'eslint-plugin-storybook';

import { filePatterns } from '../file-patterns.mjs';

export const baseStorybookConfig = defineConfig([
    // @ts-expect-error not well typed
  storybookConfigs['flat/recommended'],
  {
    files: filePatterns.storybookFile,
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'storybook/no-renderer-packages': 'off',

      'import-x/namespace': 'off',
      'import-x/no-duplicates': 'off',
      'import-x/no-unused-modules': 'warn',

      'no-restricted-imports': 'off',
    },
  },
]);

