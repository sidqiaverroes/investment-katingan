/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        birumud: "#40A2D5",
        birumud2: "#267fad",
        orenmud: "#FE8432",
        ijomud: "#B5E4A5",
        ijotua: "#42B918",
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
      },
      borderRadius: {
        custom: "32px",
        customImg: "300px",
      },
      padding: {
        nav: "200px",
      },
    },
  },
  variants: {},
  plugins: [],
};
