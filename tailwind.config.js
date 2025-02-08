/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'intl': ['SuisseIntl', 'sans-serif'],
        intl: ['SuisseIntl', 'sans-serif'],
        'blaak': ['US Blaak Black', 'sans-serif']
      },
      colors: {
        'indigo': '#8099ec',
        'greenie': '#95ffdf',
        'sludge': '#323232',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}

