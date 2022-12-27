/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2f3b50",

          "secondary": "#151a23",

          "accent": "#1c2330",

          "neutral": "#1D2125",

          "base-100": "#fff",

          "info": "#5E7BED",

          "success": "#12816D",

          "warning": "#FBD309",

          "error": "#E34D45",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
