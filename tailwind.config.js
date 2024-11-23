/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./assets/**/*.{html,js} ./index.html","./assets/**/*.js","./assets/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#643E96",
        secondary: "#F1ECFB",
        third:"#374151",
        forth:"#C891C3",
        fifth:"#3C3F4F",
        sixth:"#C691C117",
        seventh:"#C691C199",
        eighth:"#643E981F",
        ninth:"#C691C10A",
        tenth:"#6B7280",
        eleventh:"#111827",
        twelfth:"#F6F8FC",
        twelveth:"#EDF1F9",
        thirteenth:"#DCD9D980",
      },
      fontFamily: {
        primary: ["Noto Sans Arabic"],
      },

    },
  },
  plugins: [],
}

