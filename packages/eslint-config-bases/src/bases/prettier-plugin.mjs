import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export const basePrettierPluginConfig = defineConfig([
  eslintPluginPrettierRecommended,
]);


