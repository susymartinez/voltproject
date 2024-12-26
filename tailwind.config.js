/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme': {
          dark: '#1E1E1E',
          navy: '#111821',
          card: '#232323',
          accent: '#20C997',
          muted: '#6c757d'
        }
      },
      backgroundImage: {
        'hero-light': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'hero-dark': 'linear-gradient(135deg, rgba(17,24,33,0.95) 0%, rgba(30,30,30,0.95) 100%), radial-gradient(at top left, rgba(32,201,151,0.12), transparent 50%), radial-gradient(at top right, rgba(32,201,151,0.12), transparent 50%)',
      }
    },
  },
  plugins: [],
}