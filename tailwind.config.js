 


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Jost':['Jost','sans-serif']
      },
      colors:{
        "dark_purple":'#363A8E',
        "light_blue":'#bBD3F9',
      }

    },
    
  },
  plugins: [],
}