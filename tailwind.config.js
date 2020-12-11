module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gpred: {
          light: "#DE414E",
          DEFAULT: "#D60013",
        }
      },
    },
    fontFamily: {
      'heading': ['Montserrat', 'sans-serif'],
      'cursive':  ['Merienda', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
