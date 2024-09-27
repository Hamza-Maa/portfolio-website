import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#ffffff', // almost white
        400: '#87A2FF', // dark blue
        500: '#295F98', // light blue
        600: '#C7253E', // light orange
      },
      grayscale: {
        25: '#BBE9FF', // light yellow
        50: '#26355D', 
        100: '#efefef',
        200: '#FDFDFF',
        950: '#125B9A',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
