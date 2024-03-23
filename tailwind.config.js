/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
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
          '0%': {
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
          '100%': {
            transform:
              'translate3d(200px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
        },
        'hero-transform-even': {
          '0%': {
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
          '100%': {
            transform:
              'translate3d(-200px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
        },
        arrow1: {
          '0%': {
            transform: 'translateX(-500px)',
          },
          '100%': {
            transform: 'translateX(100vw)',
          },
        },
        arrow2: {
          '0%': {
            transform: 'translateX(500px)',
          },
          '100%': {
            transform: 'translateX(-100vw)',
          },
        },
      },
      animation: {
        'hero-transform-odd':
          'hero-transform-odd 8s ease-in-out infinite alternate',
        'hero-transform-even':
          'hero-transform-even 8s ease-in-out infinite alternate',
        arrow1: 'arrow1 10s linear infinite',
        arrow2: 'arrow2 10s linear infinite',
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
