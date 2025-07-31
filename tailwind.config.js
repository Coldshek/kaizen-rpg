/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        valesquita: {
          background: '#f8d0e7',
          text: '#831843',
        },
      },
    },
  },
  plugins: [],
}
