/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue2: 'rgb(var(--color-primary-1))',
      black2: 'rgba(var(--color-black-2))',
      white: 'rgba(var(--color-white))',
      white2: 'rgba(var(--color-white-2))',
      white3: 'rgba(var(--color-white-3))',
      gray6: 'rgba(var(--color-gray-6))',
      red1: 'rgba(var(--color-red-1))'
    },
    fontFamily: {
      display: ['Nunito', 'sans-serif']
    },
    extend: {
      boxShadow: {
        "default-card-shadow": '0px 0px 64px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

