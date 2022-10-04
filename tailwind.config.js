/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors:{
       "sky":"#F6F4F7",
       "black":"#302D34",
       "yellow":"#F3E349",
       "section-highlighted":"#62BBCB"
      }
    },
  },
  plugins: [],
}
