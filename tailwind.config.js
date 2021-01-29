const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      primary: '#6744ac',
      primaryDark: '#4D337F',
      secondary:'#f1d3d5',
      third:'#84c1b2',
      darkgray: "#212121",
      lightgray: "#FBFCFC",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    fontFamily: {
      axiformaHeavy: ['axiforma-heavy'],
      axiformaMedium: ['axiforma-medium'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
