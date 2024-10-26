/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./**/*.js",    
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        courgette: ['Courgette', 'cursive'],
        pacifico: ["Pacifico", 'cursive'],
        poppins: ["Poppins", 'sans-serif'],
      },

      colors: {
        'custom-dark-brown': '#332222', 
      },
    },
  },
  plugins: [],
}
