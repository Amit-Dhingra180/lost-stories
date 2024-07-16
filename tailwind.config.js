/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        customgrey: '#313131',
        lightgrey:'#4F4F4F',
        darkgrey:'#1f1f1f',
        greytext:'#9C9C9C'
      }
    },
  },
  plugins: [],
}

