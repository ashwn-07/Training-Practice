/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily:{
      'poppins':['Poppins', 'sans-serif'],
      'roboto':['Roboto'],
      'kanit':['Kanit'],
      },
    },
  },
  plugins: [],
}

