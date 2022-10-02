/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       "sky":"#F6F4F7",
       "black":"#302D34"
      }
    },
  },
  plugins: [],
}