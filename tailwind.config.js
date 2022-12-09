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
        orenmud2: "#f36d13",
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
      width: {
        newsCard: "800px",
        modalCardMd: "500px",
      },
      height: {
        modalCardMd: "680px",
      },
    },
  },
  variants: {},
  plugins: [],
};
