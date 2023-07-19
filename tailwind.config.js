/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#190b4f',
        secondary: '#3a0624',
        display: '#ffb35f'
      },
      fontSize:{
        'giant': '4.5rem'
      }
    },
  },
  plugins: [],
}

