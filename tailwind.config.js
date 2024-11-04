/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
