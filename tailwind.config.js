/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0080c9",
        secondary: "#fe6a35",
        navy: "#0e2c4b",
        success: "#48a175",
        warning: "#ffb800",
        lightGray: "#f5f5f7",
        inputBg: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
