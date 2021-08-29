module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      darkBlue: {
        100: 'hsl(210, 46%, 95%)',
        200: 'hsl(212, 23%, 69%)',
        300: 'hsl(214, 17%, 51%)',
        400: 'hsl(217, 19%, 35%)'
      },
      white: '#ffffff'
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif']
    },
    letterSpacing: {
      widest: '.5em'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
