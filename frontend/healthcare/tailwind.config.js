/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

const config = {
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
        azul_claro: '#EBFFFA',
        slateBorder: '#E3E3E3',
        light_gray: '#F6F6F6',
        gray_1: '#747474',
        gray_2: '#7A7D84',
        gray_3: '#E5E5E5',
        gray_4: '#EEEEEE',
        btn: '#3B9AB8',
        bgLogin: '#869CA3'
      }
    },
  },
  plugins: [],
}

export default withMT(config)

