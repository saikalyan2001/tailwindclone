/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "300px"
      },
      fontSize: {
        "xxs": "10px"
      },
      width: {
        "120": "430px",
        "100": "400px"
      }
    },
  },
  plugins: [],
}

