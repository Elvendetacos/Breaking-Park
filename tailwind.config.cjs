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
        // Simple 16 column grid
        '12r': 'repeat(12, minmax(0, 32px))',
      }
    }
  },
  plugins: [],
}