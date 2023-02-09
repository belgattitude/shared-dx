/**
 * Opinionated config base for https://github.com/mdx-js/eslint-mdx
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const mdxPatterns = {
  files: ['*.mdx'],
};

module.exports = {
  overrides: [
    {
      // For performance enable react-testing-library only on test files
      files: mdxPatterns.files,
      extends: ['plugin:mdx/recommended'],
      settings: {
        "mdx/code-blocks": true,
        // optional, if you want to disable language mapper, set it to `false`
        // if you want to override the default language mapper inside, you can provide your own
        "mdx/language-mapper": {}
      }
    },
  ],
};
