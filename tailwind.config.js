/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-mode": "url('/assets/bg-light.png')",
        "dark-mode": "url('/assets/bg-dark.png')",
      },
      colors: {
        primary: "#6C40B5",
        error: "#C62E2E",
        dark: "#28124D",
      },
    },

    container: {
      center: true,
    },
  },
  darkMode: "selector",
  plugins: [],
};
