/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        // light theme
        light_bg: '#cfcfcf',
        text_light: '#525C62',
        // dark theme
        dark_bg: '#212121',
        text_dark: '#AEAEAE',
        head_dark: '#E7E7E7',
        // other colors
        orange_custom: '#E8A236',
        viola: '#9288C9',
      },
    },
  },
  plugins: [],
}

