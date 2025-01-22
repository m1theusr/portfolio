/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 3s steps(13, end) infinite, blink 0.7s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: '0ch' },
          '50%': { width: '13ch' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}