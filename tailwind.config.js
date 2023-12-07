/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto'],
        'kanit': ['Kanit'],
        'valera': ['"Valera Round"', 'sans-serif'],
        'crete': [' "Crete Round" ', 'sans-serif'],
        'dujrati': ['Dhurjati', 'sans-serif']
        
      },
      height:{
         428: '578px',

      }
    },
  },
  plugins: [],
};

