const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  presets: [require("./styles/preset-1.js")],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
