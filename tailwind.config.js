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
    },
  },
  plugins: [
    require('flowbite/plugin'),
   
  ],
};
