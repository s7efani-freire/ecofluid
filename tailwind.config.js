/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eco: {
          50:  '#f1faf3',
          100: '#dff4e5',
          200: '#b8e7c7',
          300: '#8cd9a6', // verde vivo suave
          400: '#5fca84', // verde vivo sem neon
          500: '#3eb96a', // tom principal (vivo, equilibrado)
          600: '#2f9c57',
          700: '#257a46',
          800: '#205f39',
          900: '#1b4a2d',
        },
      },
    },
  },
  plugins: [],
};
