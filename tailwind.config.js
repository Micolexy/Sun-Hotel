/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightWhite: 'hsla(0, 0%, 93%, 1)',
        textWhite: 'hsla(0, 0%, 83%, 1)',
        darkBlack: 'hsla(0, 0%, 7%, 1)',
        darkBrown: 'hsla(356, 40%, 40%, 1)',
        softYellow: 'hsla(46, 100%, 60%, 1)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['GFS Didot', 'serif'],
        mono: ['Playfair Display', 'mono'],
      },
    },
  },
  plugins: [],
}

