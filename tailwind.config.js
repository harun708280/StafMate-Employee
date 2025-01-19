/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#134E4A", // Set the primary color
        secondary: "#F43F5E", // Set the secondary color
      },
      backgroundImage: {
        'nav': "url('./public/nav.png')", // Background image for navigation
      },
      boxShadow: {
        'bottom-xl': '0 10px 15px -3px rgba(0, 0, 0, 0.3)', // Large shadow at the bottom
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'), // DaisyUI plugin
  ],
};
