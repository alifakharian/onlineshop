const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      smd: "100px",
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".custom-input": {
          "@apply bg-gray-200 text-center mt-2 rounded-lg h-[40px] p-2 border-2 focus:ring-[1.5px] focus:ring-rose-500 dark:focus:ring-blue-700  outline-none":
            {},
        },
      });
    }),
  ],
};
