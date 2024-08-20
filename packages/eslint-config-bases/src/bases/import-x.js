/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */
const { filePatterns } = require('../config/file-patterns');

module.exports = {
  extends: ['plugin:import-x/typescript', 'plugin:import-x/recommended'],
  rules: {
    'import-x/no-unused-modules': 'warn',
    /* @todo enable when import-x supports typescript-eslint 8
    'import-x/no-unused-modules': [1, {
      unusedExports: false,
      missingExports: false,
    }], */
    'import-x/no-absolute-path': 'error',
    'import-x/no-useless-path-segments': 'error',
  },
  overrides: [
    {
      files: filePatterns.test,
      rules: {},
    },
  ],
  settings: {
    'import-x/resolver': {
      typescript: true,
      node: true,
    },
  },
};
