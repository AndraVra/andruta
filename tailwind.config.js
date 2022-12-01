/** @type {import('tailwindcss').Config} */
/**const colors = require("tailwindcss/colors");*/

module.exports = {
  content: ["./src/**/*.{html,ts,js,jsx}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5a429e",
          secondary: "#af3068",
          accent: "#40c9a8",
          neutral: "#191D24",
          "base-100": "#4f679b",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
