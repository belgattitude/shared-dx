/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */
const { filePatterns } = require('../config/file-patterns');

module.exports = {
  overrides: [
    {
      plugins: ['@vitest'],
      // @see https://github.com/vitest-dev/eslint-plugin-vitest
      extends: ['plugin:@vitest/legacy-recommended'],
      // Perf: To ensure best performance enable eslint-plugin-jest for test files only.
      files: filePatterns.test,
      rules: {
        '@vitest/expect-expect': [
          'error',
          {
            assertFunctionNames: [
              'expect',
              // allow type testing from vitest
              'expectTypeOf',
              'assertType',
            ],
            additionalTestBlockFunctions: [],
          },
        ],
        // No standalone expect is relaxed for test files
        '@vitest/no-standalone-expect': 'off',
        '@vitest/no-restricted-matchers': [
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
  ],
};
