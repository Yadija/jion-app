/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1.4s infinite ease-in-out',
      },
      backgroundColor: {
        // light
        funBLue: '#225CB3',
        softPeach: '#EDEDED',
        // dark
        balticSea: '#222C32',
        denimBLue: '#68C4EE',
      },
      colors: {
        // light
        funBLue: '#225CB3',
        softPeach: '#EDEDED',
        // dark
        balticSea: '#222C32',
        denimBLue: '#68C4EE',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'scale(0)',
          },
          '50%': {
            transform: 'scale(1)',
          },
        },
      },
      screens: {
        xs: '364px',
        sm: '440px',
        md: '650px',
        lg: '940px',
        xl: '1100px',
      },
    },
  },
  plugins: [],
};
