/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Old Standard TT', 'serif'],
      },
      backgroundColor: {
        'main-dark': '#20232A',
        'secondary-dark': '#33373E',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(12deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '40%': { transform: 'rotate(9deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'go-away': {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(50px) rotate(180deg)' },
          '100%': { transform: 'translateX(0px) rotate(1turn)' },
        },
      },
      animation: {
        'wave-emoji': 'wave 1.8s infinite',
        'go-away': 'go-away 1s 1 alternate',
      },
    },
  },
  plugins: [],
};
