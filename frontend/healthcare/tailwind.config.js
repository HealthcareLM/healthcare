/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: '#3B9AB8',
        bgLogin: '#869CA3',
      }
    },
  },
  plugins: [],
}

