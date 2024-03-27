/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'playfair': [ 'Playfair', 'sans-serif' ],
      'plaifairDSC': [ 'Playfair Display SC', 'sans-serif' ]
   },   
    extend: {},
  },
  plugins: [],
}
