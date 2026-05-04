/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundPosition: {
        '80-60': '80% 60%',
      },
      backgroundSize: {
        '120': '120%',
      },
      colors: {
        eldengold: {
          DEFAULT: '#c19d53',
        },
        cssblue: {
          DEFAULT: '#264de4',
        },
        htmlorange: {
          DEFAULT: '#f14a29',
        },
        javascriptyellow: {
          DEFAULT: '#f7df1e',
        },
        phppurple: {
          DEFAULT: '#7a86b8',
        },
      },
      fontFamily: {
        'itcavantgardestd': ['ITCAvantGardeStd-Md', 'system-ui', 'sans-serif'],
        'mantinia': ['Mantinia Regular', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        0: '0',
      },
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%',
      },
      minHeight: {
        '500': '500px'
      },
      spacing: {
        '25': '5rem',
      },
      transitionDuration: {
        '40': '40ms',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      keyframes: {
        'blink-caret': {
          '0, 100%': {
            'border-color': 'transparent',
          },
          '50%': {
            'border-color': 'transparent',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
		        transform: 'translate3d(0, -20%, 0)',
          },
          '100%': {
            opacity: '1',
		        transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(10px)',
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)',
          },
        },
        'typing': {
          'from': {
            width: '0',
          },
          'to': {
            width: '100%',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'typing': 'typing 1.5s steps(8, end), blink-caret .75s step-end infinite',
      },
    },
  },
  plugins: [],
}
