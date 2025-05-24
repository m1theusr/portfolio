module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 7s steps(16, end) infinite, blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '25%': { width: '16ch' },
          '50%': { width: '0ch' },
          '75%': { width: '16ch' },
          '100%': { width: '0ch' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
      },
    },
  },
  plugins: [],
}
