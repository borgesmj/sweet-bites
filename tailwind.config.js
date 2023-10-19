/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
    colors: {
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
      'driftwood': {
        '50': '#f8f5ee',
        '100': '#efe8d2',
        '200': '#e1d0a7',
        '300': '#cfb175',
        '400': '#c1964e',
        '500': '#bb8944',
        '600': '#986736',
        '700': '#7a4e2e',
        '800': '#67412c',
        '900': '#59382a',
        '950': '#331d15',
      },
      'black': '#000000',
      'white': '#ffffff',
    }
  },
  plugins: [],
}
