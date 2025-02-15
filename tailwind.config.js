/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "1": "#6c655e ",
        "2": "#cbb7a1",
        "3": "#ebdac8",
      }
    },
  },
  plugins: [],
}