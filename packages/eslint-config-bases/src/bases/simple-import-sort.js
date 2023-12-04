module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-duplicate-imports': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
  },
};
