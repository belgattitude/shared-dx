// @ts-expect-error eslint-plugin-jsx-a11y has no types
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
// @ts-check
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import { filePatterns } from '../file-patterns.mjs';

export const baseReactConfig = defineConfig([
  {
    ...react.configs.flat.recommended,
    files: filePatterns.jsxOrTsxFile,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    plugins: {
      ...react.configs.flat.recommended.plugins,
      'jsx-a11y': jsxA11y,
    },

    settings: {
      // @ts-expect-error settings is not typed in eslint-plugin-react
      ...react.configs.flat.recommended.settings,
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
      'react/no-unescaped-entities': ['error', { forbid: ['>'] }],
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
      'react/no-unknown-property': ['error', { ignore: ['css'] }],

      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
    },
  },
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  {
    files: filePatterns.jsxOrTsxFile,
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/component-hook-factories': 'error',
      'react-hooks/error-boundaries': 'error',
      'react-hooks/globals': 'error',
      'react-hooks/immutability': 'error',
      'react-hooks/incompatible-library': 'error',
      'react-hooks/preserve-manual-memoization': 'error',
      'react-hooks/purity': 'error',
      'react-hooks/refs': 'error',
      'react-hooks/set-state-in-effect': 'error',
      'react-hooks/set-state-in-render': 'error',
      'react-hooks/static-components': 'error',
      'react-hooks/unsupported-syntax': 'error',
      'react-hooks/use-memo': 'error',
    },
  },
  {
    files: filePatterns.jsxOrTsxFile,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
]);
