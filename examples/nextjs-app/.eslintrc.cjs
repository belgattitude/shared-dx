// eslint-disable-next-line @typescript-eslint/no-restricted-types
const {
  getDefaultIgnorePatterns,
} = require('@belgattitude/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    'mdx/code-blocks': true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    'mdx/language-mapper': {},
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    // Group 1: recommended always
    '@belgattitude/eslint-config-bases/typescript',
    '@belgattitude/eslint-config-bases/simple-import-sort',
    '@belgattitude/eslint-config-bases/import-x',
    '@belgattitude/eslint-config-bases/regexp',
    '@belgattitude/eslint-config-bases/jest', // jest or similar (ie: vitest)

    // Group 2: Helps to avoid complexity (cyclomatic...)
    '@belgattitude/eslint-config-bases/sonar',

    // Group 3: When working with react
    '@belgattitude/eslint-config-bases/react',
    '@belgattitude/eslint-config-bases/react-query',
    '@belgattitude/eslint-config-bases/rtl',

    // Group 4: Performance related (ie: set vs includes...)
    '@belgattitude/eslint-config-bases/performance',

    // Group 5: Various tools (per project)
    '@belgattitude/eslint-config-bases/tailwind',
    '@belgattitude/eslint-config-bases/storybook',
    '@belgattitude/eslint-config-bases/playwright',
    // "@belgattitude/eslint-config-bases/graphql-schema",

    // Group 6: Framework specifics
    'next/core-web-vitals',
    // - remix:  '@remix-run/eslint-config',
    // ...

    '@belgattitude/eslint-config-bases/mdx',

    // Group 7: Visual/Sort consistency
    // Not recommended but can by applied on some projects
    // see https://github.com/azat-io/eslint-plugin-perfectionist
    //
    // "@belgattitude/eslint-config-bases/perfectionist",
    // "@belgattitude/eslint-config-bases/perfectionist-jsx",

    // Group 8: Formatter
    // Post configure the prettier base and run prettier
    // without conflicts thx to eslint-plugin-prettier
    '@belgattitude/eslint-config-bases/prettier-plugin',
    // Alternatively to the above if you're already running prettier
    // we can get a speed up by using on eslint-prettier-config
    // "@belgattitude/eslint-config-bases/prettier-config",
  ],
  rules: {
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
  overrides: [
    {
      files: ['next.config.mjs', 'src/config/*env.mjs'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/order': 'off',
        'unicorn/prefer-set-has': 'off',
      },
    },
    {
      files: ['src/gql/**/*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'prettier/prettier': 'off',
      },
    },
  ],
};
