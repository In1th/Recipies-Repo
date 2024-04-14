import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'text': '#090910',
      'background': '#e7e7e9',
      'primary': '#f4bb90',
      'secondary': '#d0c7af',
      'accent': '#d3696e',
      'red': colors.red,
      'blue': colors.blue,
      'green': colors.green,
      'white': colors.white
     },
  },
  plugins: [],
}

