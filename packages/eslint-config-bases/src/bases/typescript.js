/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { filePatterns } = require('../config/file-patterns');

// Allow to pass an env to check cycles, defaults to 2 (lint time+++)
// @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
// @see https://medium.com/@steven-lemon182/are-typescript-barrel-files-an-anti-pattern-72a713004250
const checkCycles = process.env?.ESLINT_IMPORT_NO_CYCLE === 'true';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:unicorn/recommended',
  ],
  overrides: [
    {
      files: filePatterns.test,
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        '@typescript-eslint/unbound-method': 'off',
        'import/default': 'off',
        // Relax rules that are known to be slow and less useful in a test context
        'import/namespace': 'off',
        'import/no-duplicates': 'off',
        // Relax rules that makes writing tests easier
        'import/no-named-as-default-member': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-number-properties': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['*.mjs'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      // javascript commonjs
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['unused-imports'],
  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    ...(checkCycles ? { 'import/no-cycle': 2 } : {}),
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
    // https://sindresorhus.com/blog/goodbye-nodejs-buffer
    '@typescript-eslint/ban-types': [
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
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
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
    'import/default': ['error'],
    // Caution this rule is slow https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': 'off', // ['error'] If you want the extra check (typechecking will spot most issues already)
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': [
      'error',
      { considerQueryString: true, 'prefer-inline': true },
    ],
    'import/no-named-as-default': ['warn'],
    'import/no-named-as-default-member': ['warn'],
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'no-constant-binary-expression': 'error',
    // will use 'import/no-duplicates'.
    'no-duplicate-imports': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-empty-function': 'off',
    // https://sindresorhus.com/blog/goodbye-nodejs-buffer
    'no-restricted-globals': [
      'error',
      {
        message: 'Use Uint8Array instead.',
        name: 'Buffer',
      },
    ],
    // https://sindresorhus.com/blog/goodbye-nodejs-buffer
    'no-restricted-imports': [
      'error',
      {
        message: 'Use Uint8Array instead.',
        name: 'buffer',
      },
      {
        message: 'Use Uint8Array instead.',
        name: 'node:buffer',
      },
    ],
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'no-unused-vars': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!'],
        },
        line: {
          exceptions: ['-', '+'],
          markers: ['/'],
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    // Disbaled as it might makes too much assumptions
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/catch-error-name': 'off',
    'unicorn/prefer-set-has': 'off',
    'unicorn/no-null': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
