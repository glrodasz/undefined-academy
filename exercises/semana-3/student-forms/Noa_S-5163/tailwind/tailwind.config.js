/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    colors: {
      purple: {
        500: '#4b0d49',
        900: '#171321',
      },
      pink: '#ff17e4',
      white: '#ffffff',
      cyan: '#86fbfb',
    },
    fontFamily: {
      oxygen: ['Oxygen Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
};
