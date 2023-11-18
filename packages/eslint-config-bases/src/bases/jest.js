/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */
const { filePatterns } = require('../config/file-patterns');

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      // @see https://github.com/jest-community/eslint-plugin-jest
      extends: ['plugin:jest/recommended'],
      // Perf: To ensure best performance enable eslint-plugin-jest for test files only.
      files: filePatterns.test,
      rules: {
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-duplicate-hooks': 'error',
        // Enable Jest rules
        'jest/no-focused-tests': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-mock-promise-shorthand': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/unbound-method': 'error',
      },
    },
  ],
  settings: {
    // To prevent autodetection issues in monorepos or via vitest
    jest: {
      version: 'latest',
    },
  },
};
