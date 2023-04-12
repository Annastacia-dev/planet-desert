/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        brunswick: '#264A3E',
        celadon: '#B0D099',
        gunmetal:'#213032',
        asparagus: '#6B9059',
        fern: '#497551',
      },
      fontFamily: {
        bebas : ['Bebas Neue', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
