/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6B21A8", // primary purple
          light: "#9D4EDD",
          dark: "#4C1D95",
          accent: "#F3E8FF", // soft purple bg
          text: "#1E1E1E", // neutral text
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
