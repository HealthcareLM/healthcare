/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ["Inter", 'sans-serif']
      },
      colors: {
        primary: '#3B9AB8',
        slateBorder: '#E3E3E3',
        gray_1: '#747474',
        gray_2: '#7A7D84',
        gray_3: '#E5E5E5',
        gray_4: '#EEEEEE'
      }
    },
  },
  plugins: [],
}

