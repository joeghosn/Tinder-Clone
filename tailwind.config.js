/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tinder-red': '#D2002E',
        'tinder-red-light':'#D6002F',
        'tinder-pink':'#FD297B',
        'tinder-light-pink':'#FF5864',
        'tinder-orange':'#FF655B',
        'tinder-light-grey':'#EAEBEC',
        'tinder-green':'#25D897',  
      },

      screens: {
        'normal': '988px',
      }
      
    },


  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
}
