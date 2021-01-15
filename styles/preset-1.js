const colors = require("tailwindcss/colors")

module.exports = {
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.emerald,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.violet,
      pink: colors.pink,
      teal: colors.teal,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
