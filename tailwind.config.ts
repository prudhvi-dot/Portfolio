/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // example custom color
        secondary: "#f43f5e",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
        storm: ["var(--font-stormgust)"],
        martyric: ["var(--font-martyric)"],
      },
    },
  },
  plugins: [],
};
