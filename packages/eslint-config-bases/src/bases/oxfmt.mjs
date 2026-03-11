import pluginOxfmt from 'eslint-plugin-oxfmt';
import { defineConfig } from 'eslint/config';

import { filePatterns } from '../file-patterns.mjs';

export const baseOxfmtConfig = defineConfig([
  {
    ...pluginOxfmt.configs.recommended,
    files: filePatterns.anyCodeFile,
    rules: {
      'oxfmt/oxfmt': [
        'error',
        {
          // Plugin options
          useConfig: false,
          // configPath: 'configs/.oxfmtrc.json',
          bracketSameLine: false,
          bracketSpacing: true,
          endOfLine: 'lf',
          overrides: [],
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          useTabs: false,
        },
      ],
    },
  },
]);
