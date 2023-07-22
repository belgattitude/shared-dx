module.exports = {
  plugins: {
    // ** NESTING works but support in IDE is minimal **
    // ** for module.css... let's keep scss           **

    // Will enable spec compatible css nesting
    // https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#readme
    // https://tailwindcss.com/docs/using-with-preprocessors#nesting
    // 'postcss-import': {},
    // 'tailwindcss/nesting': 'postcss-nesting',

    tailwindcss: {},
    autoprefixer: {},
  },
};
