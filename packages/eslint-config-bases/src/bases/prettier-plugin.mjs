import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export const basePrettierPluginConfig = defineConfig([
  eslintPluginPrettierRecommended,
]);
