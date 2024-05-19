/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      dropShadow: {
        '10xl': '0 100px 200px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'laptop': {'max': '1050px'},
        'tablet': {'max': '900px'},
        'phone': {'max': '750px'},
      }
    },
  },
  plugins: [],
}