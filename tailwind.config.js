import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
  theme: {
    extend: {
        colors : {
          primary : '#C7DCA7',
          dark : '#3B3B3B',
          semiDark : '#787878',
          netral : '#8C8C8C',
          semiLight : '#EFF2F5',
          light : '#F6F8FC',
        }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'marcellus': ['Marcellus', 'serif'],
    },
    screens : {
      ssm : "352px",
      xs : "480px",
      ss : "543px",
      sm : "768px",
      md : "1024px",
      lg : "1280px",
      xl : "1440px",
      xxl : "1700px"
    }
  },
  plugins: [forms],
};
