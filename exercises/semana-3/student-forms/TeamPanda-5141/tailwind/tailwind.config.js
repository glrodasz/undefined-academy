/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      50: '#d6dee6',
      100: '#f0ffff',
      200: '#3533335c',
      300: '#5250509f',
      400: '#353333a2',
    },

    extend: {
    },
  },
  plugins: [],
}

