/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1.4s infinite ease-in-out",
      },
      backgroundColor: {
        // light
        "fun-blue": "#225CB3",
        "soft-peach": "#EDEDED",
        // dark
        "baltic-sea": "#222C32",
        "denim-blue": "#68C4EE",
      },
      colors: {
        // light
        "fun-blue": "#225CB3",
        "soft-peach": "#EDEDED",
        // dark
        "baltic-sea": "#222C32",
        "denim-blue": "#68C4EE",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
        },
      },
      screens: {
        xs: "364px",
        sm: "440px",
        md: "650px",
        lg: "940px",
        xl: "1100px",
      },
    },
  },
  plugins: [],
};
