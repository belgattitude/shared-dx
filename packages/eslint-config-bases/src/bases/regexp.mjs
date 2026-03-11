import regexpPlugin, { configs } from 'eslint-plugin-regexp';
import { defineConfig } from 'eslint/config';

import { filePatterns } from '../file-patterns.mjs';

export const baseRegExpConfig = defineConfig([
  {
    files: filePatterns.anyCodeFile,
    plugins: { regexp: regexpPlugin },
    rules: {
      ...configs.recommended.rules,
    },
  },
]);
