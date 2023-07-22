// @ts-check
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: [
        'var(--font-family-text-primary)',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      fontFamily: {
        'family-inter': [
          'var(--font-family-inter)',
          ...defaultTheme.fontFamily.sans,
        ],
        'family-monoton': [
          'var(--font-family-monoton)',
          ...defaultTheme.fontFamily.sans,
        ],
        'family-elika-gorika': [
          'var(--font-family-elika-gorika)',
          ...defaultTheme.fontFamily.sans,
        ],
        'text-primary': [
          'var(--font-family-inter)',
          ...defaultTheme.fontFamily.sans,
        ],
        brand: ['var(--font-family-brand)', ...defaultTheme.fontFamily.sans],
        title: ['var(--font-family-inter)', ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
      colors: {
        brightRed: 'hsl(12, 88%, 59)',
        'custom-brown': {
          DEFAULT: 'rgb(193,160,132)',
        },
        'brand-color': {
          50: 'hsl(150, 27%, 92%)',
          100: 'hsl(150, 27%, 88%)',
          200: 'hsl(150, 27%, 85%)',
          300: 'hsl(150, 27%, 82%)',
          400: 'hsl(150, 27%, 78%)',
          DEFAULT: 'hsl(150, 27%, 78%)',
          500: 'hsl(150, 27%, 74%)',
          600: 'hsl(150, 27%, 71%)',
          700: 'hsl(150, 27%, 67%)',
          800: 'hsl(150, 27%, 62%)',
          900: 'hsl(150, 27%, 45%)',
        },
      },
      /**
      spacing: {
        128: '32rem',
      },
      */
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};
