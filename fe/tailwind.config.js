/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F2",
        blush: "#FFF0F5",
        pink: "#FF8FAB",
        "deep-pink": "#E96A8B",
        lavender: "#DCCFF7",
        butter: "#FFE7A8",
        ink: "#4A3B40",
        muted: "#8A747C",
      },
      fontFamily: {
        heading: ["Baloo 2", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(103, 62, 70, .09)",
        card: "0 8px 30px rgba(103, 62, 70, .07)",
      },
    },
  },
  plugins: [],
};
