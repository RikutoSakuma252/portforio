/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'apex-bg':           '#0a0a0a',
        'apex-surface':      '#141414',
        'apex-surface2':     '#1c1c1c',
        'apex-primary':      '#ffffff',
        'apex-secondary':    '#888888',
        'apex-muted':        '#444444',
        'apex-accent':       '#e63329',
        'apex-accent-dark':  '#b02820',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        jp:     ['"Noto Sans JP"', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};
