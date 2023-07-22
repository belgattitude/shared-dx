import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      strictMode: true,
      nextConfigPath: '../next.config.mjs',
    },
  },
  /*
  babel: (config) => {
    config.presets.push(require.resolve('@emotion/babel-preset-css-prop'));
    return config;
  },*/

  // https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs#custom-webpack-config
  /*
  webpackFinal: async (config) => {
    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find((rule) =>
      rule.test.test('.svg')
    );
    imageRule.exclude = /\.svg$/;

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return merge(config, {
      plugins: [new VanillaExtractPlugin()],
    });
  },*/

  docs: {
    autodocs: 'tag',
    defaultName: 'Docs', // set to change the name of generated docs entries
  },
};
export default config;
