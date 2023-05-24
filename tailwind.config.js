/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Castoro: ['Castoro Titling', 'cursive'],
        Ysabeau: ['Ysabeau', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
