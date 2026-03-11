import {
  combine,
  comments,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node, perfectionist,
  react,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  yaml,
} from '@antfu/eslint-config';

// eslint-disable-next-line antfu/no-top-level-await
const config = await combine(
  javascript({}),
  comments(),
  node(),
  jsdoc(),
  imports({
    stylistic: {},
  }),
  unicorn({
    //allRecommended: true,
    overrides: {

        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-number-properties': 'off',
        'unicorn/error-message': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-await-expression-member': 'off',
        'unicorn/prefer-add-event-listener': 'off',
    },
  }),
  sortTsconfig(),
  sortPackageJson(),
  typescript({
    erasableOnly: true,
    type: 'lib',
    filesTypeAware: ['**\/*.{ts,tsx}'],
  }),
  perfectionist(),
  react({}),
  //stylistic(),
  //vue(),
  jsonc(),
  yaml(),
  //toml(),
  markdown()
);


export default config;