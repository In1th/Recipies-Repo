import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'text': {
        "100": "#B3B3B0",
        "200": "#A2A2A0",
        "300": "#919190",
        "400": "#808080",
        "500": "#090910",
        "600": "#6F6F70",
        "700": "#5E5E60",
        "800": "#4D4D50",
        "900": "#3C3C40"
      },
      'background': {
        "100": "#ffffff",
        "200": "#f6f6f7",
        "300": "#ededee",
        "400": "#e4e4e5",
        "500": "#e7e7e9",
        "600": "#ceced0",
        "700": "#b5b5b7",
        "800": "#9c9c9e",
        "900": "#838385"
      },
      'primary': {
        "100": "#ffe8dc",
        "200": "#ffd1b9",
        "300": "#ffba96",
        "400": "#f4a47d",
        "500": "#f4bb90",
        "600": "#d39a77",
        "700": "#b2795e",
        "800": "#915745",
        "900": "#70452c"
      },
      'secondary': {
        "100": "#f2efea",
        "200": "#e5e0d4",
        "300": "#d9d1be",
        "400": "#ccc2a8",
        "500": "#d0c7af",
        "600": "#b1a792",
        "700": "#928775",
        "800": "#736759",
        "900": "#54473d"
      },
      'accent': {
        "100": "#ffd1d2",
        "200": "#ffb5b6",
        "300": "#ff999a",
        "400": "#ff7d7e",
        "500": "#d3696e",
        "600": "#b55859",
        "700": "#964743",
        "800": "#77362e",
        "900": "#582518"
      },
      'red': colors.red,
      'blue': colors.blue,
      'green': colors.green,
      'white': colors.white,
      'gray': colors.gray,
     },
  },
  plugins: [],
}

