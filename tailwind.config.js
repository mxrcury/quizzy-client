/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, ts}'],
  theme: {
    extend: {
      colors: {
        darkgreen: '#24B268',
        white: '#E7ECEB'
      },
      fontSize: {
        m: '23px'
      }
    }
  },
  plugins: []
}
