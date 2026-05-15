/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       '#0f1a10',
        surface:  '#1a2b1c',
        cream:    '#f5f0e8',
        muted:    '#a89b80',
        gold:     '#c9a84c',
        'gold-light': '#e0c06a',
        'light-section': '#f9f6f0',
        'dark-text': '#1e1407',
      },
      fontFamily: {
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sub:     ['"Cinzel"', 'serif'],
        body:    ['"Noto Serif JP"', 'serif'],
      },
      letterSpacing: {
        cinzel: '0.3em',
        wide:   '0.2em',
        wider:  '0.35em',
      },
      animation: {
        'flicker': 'flicker 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        flicker: {
          '0%,100%': { opacity: '1' },
          '45%':     { opacity: '0.88' },
          '50%':     { opacity: '0.96' },
          '55%':     { opacity: '0.85' },
          '60%':     { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
