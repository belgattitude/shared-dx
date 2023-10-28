/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases#belgattitudeeslint-config-bases
 */

module.exports = {
  overrides: [
    {
      extends: ['plugin:perfectionist/recommended-natural'],
      files: ['*.js', '*.cjs', '*.mjs', '*.ts', '*.tsx', '*.jsx'],
    },
  ],
};
