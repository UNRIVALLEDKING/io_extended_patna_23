/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        googleRed: "#ea4335",
        googleBlue: "#4285f4",
        googleYellow: "#fabb04",
        googleGreen: "#0f9d57",
      },
      fontFamily: {
        google: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    backgroundImage: {
      homeBg: "url('/homePageBg.svg')",
      googleIoBg: "url('/WhatIsGoogleIO.png')",
    },
  },
  plugins: [],
};
