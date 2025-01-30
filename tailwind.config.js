module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 6s steps(13, end) infinite, blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },  // Começa sem nada
          '25%': { width: '13ch' }, // Escreve a primeira palavra
          '50%': { width: '0ch' },  // Apaga a primeira palavra
          '75%': { width: '13ch' }, // Escreve a segunda palavra
          '100%': { width: '0ch' }, // Apaga a segunda palavra
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
