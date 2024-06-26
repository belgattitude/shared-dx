/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */
const { filePatterns } = require('../config/file-patterns');

module.exports = {
  overrides: [
    {
      extends: ['plugin:import-x/recommended'],
      files: filePatterns.test,
      // rules: { }
    },
  ],
  settings: {
    'import-x/resolver': {
      typescript: true,
      node: true,
    },
  },
};
