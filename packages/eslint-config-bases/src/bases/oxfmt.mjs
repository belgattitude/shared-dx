import { defineConfig } from 'eslint/config';
import pluginOxfmt from 'eslint-plugin-oxfmt';

export const baseOxfmtConfig = defineConfig([
  {
    ...pluginOxfmt.configs.recommended,
    files: ['**/*.{js,ts,mjs,cjs,jsx,tsx}'],
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
