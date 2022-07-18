/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'nvbg':'#EFFFFD',
      'blue':'#646FD4',
      'white':'#FFFFFF'
    },
    boxShadow: {
      "eventbox":"0px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.05)",
      "formbox":"0px 0px 1px 1px rgba(0, 0, 0, 0.05)",
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'], 
        'sora':['Sora', 'sans-serif'],
        'inter':['Inter','sans-serif'],
      }
    },
  },
  plugins: [],
}
