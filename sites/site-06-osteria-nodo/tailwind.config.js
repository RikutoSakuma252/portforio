/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nodo-bg':      '#0f1a10',
        'nodo-surface': '#1a2b1c',
        'nodo-primary': '#f5f0e8',
        'nodo-secondary':'#a89b80',
        'nodo-accent':  '#c9a84c',
        'nodo-light':   '#f9f6f0',
      },
      fontFamily: {
        serif:   ['"Libre Baskerville"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        jp:      ['"Noto Serif JP"', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
      },
    },
  },
  plugins: [],
}
