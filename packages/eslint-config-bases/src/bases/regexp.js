/**
 * Custom config base for projects that wants to enable regexp rules.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { filePatterns } = require('../config/file-patterns');

module.exports = {
  // @see https://github.com/ota-meshi/eslint-plugin-regexp
  extends: ['plugin:regexp/recommended'],
  overrides: [
    {
      extends: ['plugin:regexp/recommended'],
      files: filePatterns.typescriptAndJsCodeWithJsx,
      rules: {
        'regexp/prefer-result-array-groups': 'off',
      },
    },
  ],
};
