/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {},
    color:{
      'blue': {
        '50': '#faf8fc',
        '100': '#f4eef9',
        '200': '#ebe0f4',
        '300': '#dcc7eb',
        '400': '#bf9bda',
        '500': '#ad7fcd',
        '600': '#9762bb',
        '700': '#814ea2',
        '800': '#6d4485',
        '900': '#59386b',
        '950': '#3b1f4c',
    },
      'black': '#000000',
      'white': '#ffffff'
    }
  },
  plugins: [],
}