/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'highlight': '#337ab7',
      'highlight2': '#044A88',
      'bg': '#111111',
      'bg2': '#F7F7F7',
      'light': '#91A3AF',
      'success': '#2FAD02',
      'error': '#940225',
      'warning': '#D38C22',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
