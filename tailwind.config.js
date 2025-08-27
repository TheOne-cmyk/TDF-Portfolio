/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'md': '900px',
      'lg':'1000px',
    },
    extend: {},
  },
  plugins: [],
};
