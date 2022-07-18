/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'nvbg':'#EFFFFD'
    },
    boxShadow: {
      "eventbox":"0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.05)",
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'], 
        'sora':['Sora', 'sans-serif']
      }
    },
  },
  plugins: [],
}
