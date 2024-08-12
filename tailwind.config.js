/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#0A2540",
        textcolor: "#2E3A59",
        textcolor1: "#FF6F61",
        textcolorh2: "#00A3E1",
        button: "#00A3E1",
        buttonhover: "#0085A8",
      },
      backgroundImages: {
        hero: "url('../.jpg')",
      },
    },
  },
  plugins: [],
};
