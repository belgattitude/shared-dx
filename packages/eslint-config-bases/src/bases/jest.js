/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const jestPatterns = {
  files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
};

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
      files: jestPatterns.files,
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
