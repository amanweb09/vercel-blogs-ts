/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{tsx,jsx,js,ts,html}',
    './components/**/*.{tsx,jsx,js,ts,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53bd95",
        'primary-dark': "#2c785c"
      }
    },
  },
  plugins: [],
}
