/**
 * Opinionated config base for projects using storybook.
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const storybookPatterns = {
  files: ['**/*.stories.{ts,tsx,mdx}'],
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      extends: ['plugin:storybook/recommended'],
      // For performance run storybook/recommended on test files, not regular code
      files: storybookPatterns.files,
      rules: {},
    },
  ],
};
