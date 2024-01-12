/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#122d4e",
        secondary: "#3f72af",
        tertiary: "#dbe2ef",
      },
    },
  },
  plugins: [],
}


