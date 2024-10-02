/**
 * Opinionated config base for projects that enable sonarjs
 * @see https://github.com/belgattitude/shared-dx/tree/main/packages/eslint-config-bases
 */

const sonarPatterns = {
  excludedFiles: [
    '**/?(*.)+(test).{js,jsx,ts,tsx}',
    '**/?(*.)+(bench).{js,jsx,ts,tsx}',
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
  plugins: ['sonarjs'],
  overrides: [
    {
      extends: ['plugin:sonarjs/recommended-legacy'],
      excludedFiles: sonarPatterns.excludedFiles,
      files: sonarPatterns.files,
      rules: {
        // Because plugin unused-import does it better (autofix)
        'sonarjs/unused-import': 'off',
        // because it doesn't play well with inlined comment api doc
        'sonarjs/no-commented-code': 'off',
        // because it's handled by typescript-eslint
        'sonarjs/sonar-no-unused-vars': 'off',
        // because it doesn't play well with exactOptionalTypes
        'sonarjs/no-redundant-optional': 'off',
        'sonarjs/ jsx-no-useless-fragment': 'off',
        'sonarjs/redundant-type-aliases': 'warn',
        'sonarjs/no-nested-template-literals': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-unknown-property': [
          'warn',
          {
            // For NextJs styled-jsx <style jsx>{`...`}</style>
            ignore: ['jsx'],
          },
        ],
      },
    },
    {
      files: ['*.{jsx,tsx}'],
      rules: {
        // relax complexity for react code
        'sonarjs/cognitive-complexity': ['error', 16],
        // relax duplicate strings
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      // relax javascript code as it often contains obscure configs
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        'sonarjs/no-all-duplicated-branches': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
