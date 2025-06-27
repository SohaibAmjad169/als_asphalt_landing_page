import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFEB38", // Yellow from Figma
        dark: "#000000",
        light: "#FFFFFF",
        gray: {
          100: "#F5F5F5",
          200: "#FAFAFA",
          300: "rgba(5, 5, 5, 0.02)",
          400: "rgba(5, 5, 5, 0.04)",
          800: "rgba(0, 0, 0, 0.8)",
          900: "rgba(0, 0, 0, 0.83)",
        },
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
      },
      ringColor: {
        primary: "#FFEB38",
      },
      ringWidth: {
        '2': '2px',
      },
    },
  },
  plugins: [],
};

export default config; 