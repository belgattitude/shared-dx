import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import { filePatterns } from '../file-patterns.mjs';

export const baseTypescriptConfig = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: filePatterns.anyCodeFile,
    rules: {
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/prefer-promise-reject-errors': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          minimumDescriptionLength: 10,
          'ts-check': false,
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': true,
          'ts-nocheck': true,
        },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            Buffer: {
              message: 'Use Uint8Array instead.',
              suggest: ['Uint8Array'],
            },
          },
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['private-constructors'] },
      ],
      '@typescript-eslint/no-explicit-any': [
        'error',
        { ignoreRestArgs: false },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { arguments: false, attributes: false } },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: true,
          allowBoolean: true,
          allowNever: true,
          allowNullish: true,
          allowNumber: true,
        },
      ],
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      '@typescript-eslint/default-param-last': 'error',
      'linebreak-style': ['error', 'unix'],
      'no-constant-binary-expression': 'error',
      'no-duplicate-imports': 'off',
      'no-throw-literal': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-function': 'off',
      'no-restricted-globals': [
        'error',
        { message: 'Use Uint8Array instead.', name: 'Buffer' },
      ],
      'require-await': 'off',
      'spaced-comment': [
        'error',
        'always',
        {
          block: { balanced: true, exceptions: ['*'], markers: ['!'] },
          line: { exceptions: ['-', '+'], markers: ['/'] },
        },
      ],
    },
  },
  {
    files: filePatterns.anyCodeFile,
    rules: {
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/prefer-promise-reject-errors': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          minimumDescriptionLength: 10,
          'ts-check': false,
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': true,
          'ts-nocheck': true,
        },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            Buffer: {
              message: 'Use Uint8Array instead.',
              suggest: ['Uint8Array'],
            },
          },
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['private-constructors'] },
      ],
      '@typescript-eslint/no-explicit-any': [
        'error',
        { ignoreRestArgs: false },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { arguments: false, attributes: false } },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: true,
          allowBoolean: true,
          allowNever: true,
          allowNullish: true,
          allowNumber: true,
        },
      ],
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      '@typescript-eslint/default-param-last': 'error',
      'linebreak-style': ['error', 'unix'],
      'no-constant-binary-expression': 'error',
      'no-duplicate-imports': 'off',
      'no-throw-literal': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-function': 'off',
      'no-restricted-globals': [
        'error',
        { message: 'Use Uint8Array instead.', name: 'Buffer' },
      ],
      'require-await': 'off',
      'spaced-comment': [
        'error',
        'always',
        {
          block: { balanced: true, exceptions: ['*'], markers: ['!'] },
          line: { exceptions: ['-', '+'], markers: ['/'] },
        },
      ],
    },
  }
]);
