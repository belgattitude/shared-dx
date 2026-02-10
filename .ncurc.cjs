// @ts-check

const { defineConfig } = require('npm-check-updates');

// @todo read the content from .yarnrc.yml
const npmPreapprovedPackages = [
  '@flowblade/*',
  '@httpx/*',
  '@typescript-eslint/*',
  'typescript-eslint',
    '@vitest/eslint-plugin',
    'eslint-plugin-unicorn'
];

module.exports = defineConfig({
  workspaces: true,
  mergeConfig: true,
  root: true,
  packageManager: 'yarn',
  cooldown: (packageName) => {
    if (
      npmPreapprovedPackages.some((allowed) =>
      {
        if (allowed.endsWith('/*')) {
          return packageName.startsWith(allowed.slice(0, -1));
        } else {
          return packageName === allowed;
        }
      })
    ) {
      return 0;
    }
    return 3;
  },
  reject: [
    // Cause v10 isn't yet supported
    'eslint',
     '@eslint/js'
    //'eslint-plugin-unicorn',
    //'eslint-plugin-storybook',
    //'eslint-plugin-regexp'
  ],
});
