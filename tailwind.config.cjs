const daisyui = require("daisyui");

const config = {
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C9ADA7",
          "primary-focus": "#bb9890",
          "primary-content": "#2a2d3c",
          secondary: "#9A8C98",
          "secondary-focus": "#877885",
          "secondary-content": "#F2E9E4",
          accent: "#F2E9E4",
          "accent-focus": "#ebded6",
          "accent-content": "#2a2d3c",
          neutral: "#4A4E69",
          "neutral-focus": "#34384b",
          "neutral-content": "#F2E9E4",
          "base-100": "#F2E9E4",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#A5D0A8",
          success: "#40ad1f",
          warning: "#FFFF82",
          error: "#FF9B54",
        },
      },
    ],
  },
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontSize: {
        "3xs": "0.5rem",
        "4xs": "0.375rem",
      },
    },
  },

  plugins: [daisyui],
};

module.exports = config;
