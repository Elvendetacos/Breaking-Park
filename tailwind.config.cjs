/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'bolder': ['Bayon', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        '12r': 'repeat(12, minmax(0, 32px))',
      },
      keyframes:{
        wiggle : {
          '0%': { height: '1rem'},
          '10%': {  height: '5rem' },
          '20%': { height: '10rem' },
        },
        text: {
          '0%': {'font-size': '1px'}, 
          '10%': {'font-size': '2px'} 
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-out',
        text: 'text 0.1s ease-out'
      }
    }
  },
  plugins: [],
}