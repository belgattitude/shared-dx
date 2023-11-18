const filePatterns = {
  test: ['**/?(*.)+(test|spec).{js,jsx,ts,tsx}'],
  anyCode: ['*.{js,jsx,jsx,tsx}'],
  typescriptCodeWithJsx: ['*.{ts,tsx}'],
  typescriptCodeWithoutJsx: ['*.ts'],
  typescriptAndJsCodeWithoutJsx: ['*.{js,mjs,ts}'],
  typescriptAndJsCodeWithJsx: ['*.{js,mjs,ts,jsx,tsx}'],
  storybook: ['**/*.stories.{ts,tsx,mdx}'],
};
module.exports = {
  filePatterns,
};
