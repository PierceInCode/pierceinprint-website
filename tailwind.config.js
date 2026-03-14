/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdf9f0',
          100: '#F5EDD6',
          200: '#ecd9b0',
          300: '#dfc08a',
        },
        ocean: {
          400: '#74B3CE',
          500: '#4a9ab8',
          600: '#2A6F97',
          700: '#1d5070',
          800: '#153a52',
        },
        coral: {
          400: '#f0a090',
          500: '#E07A5F',
          600: '#c85e43',
        },
        mangrove: {
          400: '#7aab8a',
          500: '#4A7C59',
          600: '#355a40',
        },
        driftwood: {
          400: '#b09070',
          500: '#8B7355',
          600: '#6b5540',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
