/**
 * Opinionated config base for projects that enable sonarjs
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const sonarPatterns = {
  excludedFiles: [
    '**/?(*.)+(test).{js,jsx,ts,tsx}',
    '*.stories.{js,ts,jsx,tsx}',
  ],
  files: ['*.{js,jsx,ts,tsx}'],
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      excludedFiles: sonarPatterns.excludedFiles,
      extends: ['plugin:sonarjs/recommended'],
      files: sonarPatterns.files,
      rules: {
        'sonarjs/no-nested-template-literals': 'off',
        'sonarjs/prefer-single-boolean-return': 'off',
      },
    },
    {
      files: ['*.{jsx,tsx}'],
      rules: {
        // relax complexity for react code
        'sonarjs/cognitive-complexity': ['error', 15],
        // relax duplicate strings
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      // relax javascript code as it often contains obscure configs
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        'sonarjs/no-all-duplicated-branches': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
