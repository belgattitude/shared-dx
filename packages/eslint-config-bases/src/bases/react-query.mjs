import tanstackQuery from '@tanstack/eslint-plugin-query';
import { defineConfig } from 'eslint/config';

export const baseReactQueryConfig = defineConfig([
  tanstackQuery.configs['flat/recommended'],
]);

