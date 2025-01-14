/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav': "url('./public/nav.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin','daisyui'), 
  ],
};
