/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-teal': '#4893c6',
      'dark-teal': '#2f86c1',
      'light-blue': '#130f2b',
      'dark-blue': '#120e29',
      'darker-blue': '#0e0b1c',
      'light-white': '#ffffff',
      'dark-white': '#a000ae',
      'light-skin': '#f5a267',
      'dark-skin': '#c86f31',
      'light-orange': '#cf7214',
      'dark-orange': '#cf3014',
      'eye-red': '#85130b'
    },
    extend: {},
  },
  plugins: [],
}

