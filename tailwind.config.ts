// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfaf5',
          100: '#f7f0e6',
          200: '#f0e6d6',
          300: '#e9dcc7',
          400: '#e2d2b8',
          500: '#dbc8a9',
          600: '#d4be9a',
          700: '#cdb48b',
          800: '#c6aa7c',
          900: '#bfa06d',
        },
        'dark-beige': '#2c2c2c', // A dark color for dark mode background
      },
    },
  },
  plugins: [],
};

export default config;
