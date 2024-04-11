/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', "sans-serif"],
        abc:['Rubik Burned', "sans-serif"],
        mono:['Rokkitt',"sans-serif"],
        poppins:['Poppins',"sans-serif"],
        k2d:['K2D',"sans-serif"],
        montserrat:['Montserrat',"sans-serif"],
        nunito:['Nunito',"sans-serif"]
        // Add more custom font families as needed
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

