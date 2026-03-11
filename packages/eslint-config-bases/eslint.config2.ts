import { defineConfig } from 'eslint/config';

import { basePrettierPluginConfig } from './src/bases/prettier-plugin.mjs';
import { filePatterns } from './src/file-patterns.mjs';
import { allBases } from './src/index.mjs';

const config = defineConfig([
  {
    ignores: [...filePatterns.globalIgnore],
  },
  ...allBases,
  ...basePrettierPluginConfig,
  {
    files: filePatterns.tsFile,
    rules: {
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    },
  },
  {
    files: filePatterns.anyCodeFile,
    rules: {
      'sonarjs/todo-tag': 'off',
    },
  },
]);

export default config;
