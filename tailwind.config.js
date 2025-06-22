/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f39c0b",
        secondary: "#e86f00",
        primaryDark: "#d65609",
        dark: "#656565",

      },
      container:{
        center: true,
        padding: {
          DEFAULT: "1REM",
            sm:"2rem",
        }
      }
    },
  },
  plugins: [],
}