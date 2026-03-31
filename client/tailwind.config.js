module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6C63FF",
          secondary: "#FF6584",
          accent: "#43E97B",
        },
        dark: {
          900: "#0D0D0F",
          800: "#13131A",
          700: "#1C1C27",
          600: "#252535",
          500: "#2E2E42",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

