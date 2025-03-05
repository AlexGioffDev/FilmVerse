/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#080a09",
        secondary: "#ebeff3",
        accent: "#fe2d78",
      },
    },
  },
  plugins: [],
};
