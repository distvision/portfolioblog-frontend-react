/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F2F2F2",
          200: "#B6B6B6",
          300: "#797979",
          400: "#181818",
          500: "#161616"
        },
        accents: {
          100: "#AC00FB",
          200: "#F00D7E"
        }
      },
      fontFamily: {
        sans: ["Jura", "sans-serif"]
      },
      boxShadow: {
        "3xl": "0 20px 20px rgb(18 18 18)"
      }
    },
    plugins: []
  }
};
