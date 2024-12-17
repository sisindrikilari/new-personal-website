/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Creates 15 equal columns
        15: "repeat(15, 1fr)",
      },
      gridTemplateRows: {
        // Creates 15 equal rows
        15: "repeat(15, 1fr)",
      },
    },
  },

  plugins: [],
};
