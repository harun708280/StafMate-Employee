/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
      extend: {
          colors: {
              primary: {
                  DEFAULT: '#134E4A',
                  foreground: 'hsl(var(--primary-foreground))'
              },
              secondary: {
                  DEFAULT: '#F43F5E',
                  foreground: 'hsl(var(--secondary-foreground))'
              },
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              card: {
                  DEFAULT: 'hsl(var(--card))',
                  foreground: 'hsl(var(--card-foreground))'
              },
              popover: {
                  DEFAULT: 'hsl(var(--popover))',
                  foreground: 'hsl(var(--popover-foreground))'
              },
              muted: {
                  DEFAULT: 'hsl(var(--muted))',
                  foreground: 'hsl(var(--muted-foreground))'
              },
              accent: {
                  DEFAULT: 'hsl(var(--accent))',
                  foreground: 'hsl(var(--accent-foreground))'
              },
              destructive: {
                  DEFAULT: 'hsl(var(--destructive))',
                  foreground: 'hsl(var(--destructive-foreground))'
              },
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',
              chart: {
                  '1': 'hsl(var(--chart-1))',
                  '2': 'hsl(var(--chart-2))',
                  '3': 'hsl(var(--chart-3))',
                  '4': 'hsl(var(--chart-4))',
                  '5': 'hsl(var(--chart-5))'
              }
          },
          backgroundImage: {
              nav: "url('/src/assets/nav-bg.jpg')" // এখানে তোমার ইমেজের সঠিক পাথ দাও
          },
          boxShadow: {
              'bottom-xl': '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
          },
          borderRadius: {
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)'
          }
      }
  },
  plugins: [
      require('flowbite/plugin'),
      require('daisyui'), // DaisyUI plugin
      require("tailwindcss-animate")
  ],
};
