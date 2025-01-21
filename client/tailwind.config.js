/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0a192f",
        "secondary": "#f19216",
        "tertiary": "#54d6b3"
      }
    },
    screens: {
      // Corrected breakpoints
      'lg': { 'max': '2023px' },
      'sm': { 'max': '1000px' }
    }
  },
  plugins: [],
}
