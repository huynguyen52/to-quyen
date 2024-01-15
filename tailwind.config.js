/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1720px',
      },
      keyframes: {
        'hero-transform-odd': {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(200px)' },
        },
        'hero-transform-even': {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-200px)' },
        },
      },
      animation: {
        'hero-transform-odd':
          'hero-transform-odd 8s ease-in-out infinite alternate',
        'hero-transform-even':
          'hero-transform-even 8s ease-in-out infinite alternate',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark', 'light'],
    base: false, // applies background color and foreground color for root element by default
  },
};
