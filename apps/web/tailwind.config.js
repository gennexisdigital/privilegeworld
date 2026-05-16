module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        deep: '#0d0d0d',
        surface: '#141414',
        card: '#1a1a1a',
        gold: '#c9a96e',
        'gold-light': '#e8d5b0',
        white: '#f5f2ee',
        muted: 'rgba(245,242,238,0.5)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        wide: '0.15em',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      zIndex: {
        100: '100',
        200: '200',
      },
    },
  },
  plugins: [],
}
