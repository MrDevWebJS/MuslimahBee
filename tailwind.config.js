/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'tangerine': ['Tangerine', 'sans-serif'],
      'cormorantGaramond': ["Cormorant Garamond", 'sans-serif']
   },   
    extend: {},
  },
  plugins: [],
}
