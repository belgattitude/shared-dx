/**
 * Custom config base for projects that wants to enable regexp rules.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const { filePatterns } = require('../config/file-patterns');

module.exports = {
  overrides: [
    {
      plugins: ['unicorn'],
      files: filePatterns.typescriptAndJsCodeWithJsx,
      rules: {
        'unicorn/prefer-set-has': 'error',
        'no-restricted-syntax': [
          'error',
          {
            selector:
              'CallExpression[callee.object.name="Object"][callee.property.name="entries"]',
            message:
              'Do not use Object.entries for performance. Consider using alternatives like Object.keys() or Object.values().',
          },
        ],
      },
    },
  ],
};
