/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          base: '#E0E5EC',    // Deep slate-grey for true claymorphism
          card: '#E0E5EC',    // Matching base for seamless extrusion
          green: '#dcfce7',   // Light green
          yellow: '#fef3c7',  // Light yellow
          orangeBg: '#ffedd5',// Light orange
          border: '#D1D9E6',
          dark: '#0F172A',
          muted: '#475569',
          accent: '#2563EB',
          accentHover: '#1D4ED8',
          orange: '#FF5A09',
        }
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'clay': '10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff',
        'clay-sm': '5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff',
        'clay-hover': '15px 15px 30px #a3b1c6, -15px -15px 30px #ffffff',
        'clay-inset': 'inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff',
        'clay-convex': '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
      },

      animation: {
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
