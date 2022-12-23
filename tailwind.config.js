/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'radial-yellow': 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(114,121,9,1) 18%, rgba(0,212,255,1) 62%)',
      },
    },
  },
  plugins: [],
}
