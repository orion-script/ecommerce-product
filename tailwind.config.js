/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Orange": "#ff7d1a",
        "PaleOrange": "	#ffede0",
        "VerydarkBlue": "hsl(220, 13%, 13%)",
        "Darkgrayishblue": "hsl(219, 9%, 45%)",
        "Grayishblue": "hsl(220, 14%, 75%)",
        "Lightgrayishblue": "hsl(223, 64%, 98%)",
        "White": "hsl(0, 0%, 100%)",
        "Black": "hsl(0, 0%, 0%)",
      },

      keyframes: {
        "open-menu": {
          "0%": {transform: "translateX(-100%)"},
          "100%": {transform: "translateX(0%)"},
        },
      },
      animation: {
        "open-menu": "open-menu 0.7s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}