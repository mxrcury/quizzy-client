/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, ts}'],
  theme: {
    extend: {
      colors: {
        darkgreen: '#24B268',
        white: '#E7ECEB',
        lightgreen: '#3abc79',
        darkdarkgreen: '#1a9355'
      },
      fontSize: {
        m: '23px'
      }
    }
  },
  plugins: []
}
