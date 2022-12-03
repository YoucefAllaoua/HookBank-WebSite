"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,css,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        three: "repeat(auto-fill, minmax(350px, 1fr))",
        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px"
      }
    },
    screens: {
      "2xl": {
        max: "1535px"
      },
      // => @media (max-width: 1535px) { ... }
      xl: {
        max: "1279px"
      },
      // => @media (max-width: 1279px) { ... }
      lg: {
        max: "1023px"
      },
      // => @media (max-width: 1023px) { ... }
      md: {
        max: "768px"
      },
      // => @media (max-width: 767px) { ... }
      sm: {
        max: "639px"
      } // => @media (max-width: 639px) { ... }

    }
  },
  plugins: []
};