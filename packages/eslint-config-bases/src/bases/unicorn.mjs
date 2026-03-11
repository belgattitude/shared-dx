import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { filePatterns } from '../file-patterns.mjs';

export const baseUnicornConfig = defineConfig([
  eslintPluginUnicorn.configs.recommended,
  {
    files: filePatterns.anyCodeFile,
    languageOptions: {
      globals: globals.builtin,
    },
    rules: {
      // Might create issues when autofixed
      'unicorn/no-null': 'warn',
      'unicorn/no-static-only-class': 'off',
      'unicorn/switch-case-braces': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/no-nested-ternary': 'off',
    },
  },
  {
    files: filePatterns.jsFile,
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
  // Tailwind
  {
    files: ['tailwind.config.ts', 'tailwind.config.js'],
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
  // Test files
  {
    files: filePatterns.testFile,
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-number-properties': 'off',
      'unicorn/error-message': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/prefer-add-event-listener': 'off',
    },
  },
]);
