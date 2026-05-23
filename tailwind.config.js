/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1437', // Dark Navy background
          800: '#111C44',
          700: '#1B254B',
        },
        gold: {
          500: '#F5C242', // Gold primary
          400: '#F6CD63',
          600: '#D9A420',
        },
        cyan: {
          500: '#22D3EE', // Cyan secondary
          400: '#38BDF8',
          600: '#0891B2',
        }
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body: ['"Noto Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow-gold': '0 0 20px rgba(245, 194, 66, 0.3)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
