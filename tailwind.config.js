/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ["Oxanium", "serif"],
        'reem': ["Mona Sans", "sans-serif"],
        'noor': ["Bruno Ace", "sans-serif"],
      },
    },
  },
  plugins: [],
}
