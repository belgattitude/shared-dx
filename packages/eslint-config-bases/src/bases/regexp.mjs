import { defineConfig } from 'eslint/config';
import regexpPlugin from 'eslint-plugin-regexp';

import { filePatterns } from '../file-patterns.mjs';

export const baseRegExpConfig = defineConfig([
  {
    files: filePatterns.anyCodeFile,
    plugins: { regexp: regexpPlugin },
    rules: {
      ...regexpPlugin.configs.recommended.rules,
    },
  },
]);


