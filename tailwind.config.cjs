/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1.4s infinite ease-in-out',
      },
      backgroundColor: {
        merino: '#FAF7F0',
        codGray: '#171717',
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
