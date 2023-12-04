const { getDefaultIgnorePatterns } = require('./src/helpers');

module.exports = {
  extends: [
    './src/bases/typescript',
    './src/bases/simple-import-sort',
    './src/bases/regexp',
    './src/bases/perfectionist',
    './src/bases/performance',
    './src/bases/prettier-plugin',
    './src/bases/mdx',
  ],
  ignorePatterns: [...getDefaultIgnorePatterns()],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
};
