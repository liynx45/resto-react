/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#233000",
        "secondaryColor": "#5E6600",
        "thirdColor": "#9CAA00",
        "backgroundWhite": "#EBF0E4",
        "secondaryBackground": "#4D4D4D",
        "thirdBackground": "#B0BB0"
      },
      fontFamily: {
        serif: ['Lora', 'serif']
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}

