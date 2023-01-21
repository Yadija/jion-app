/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        merino: '#FAF7F0',
        codGray: '#171717',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
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
