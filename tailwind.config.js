/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'tangerine': ['Tangerine', 'sans-serif'],
      'cormorantGaramond': ["Cormorant Garamond", 'sans-serif'],
      'lobster': ["Lobster", 'sans-serif'],
      'lobsterTwo': ["Lobster Two", 'sans-serif'],
      'montserrat': [ 'Montserrat', 'sans-serif' ],
      'robotoCondensed': [ 'Roboto Condensed', 'sans-serif' ]
   },   
    extend: {},
  },
  plugins: [],
}
