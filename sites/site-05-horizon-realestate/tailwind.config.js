/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'horizon-navy':       '#1a2744',
        'horizon-navy-light': '#243558',
        'horizon-gold':       '#c5a55a',
        'horizon-gold-light': '#d4b87a',
        'horizon-bg':         '#faf9f6',
        'horizon-light':      '#f4f6fb',
        'horizon-text':       '#333333',
        'horizon-muted':      '#6b7280',
        'horizon-border':     '#e2e8f0',
      },
      fontFamily: {
        cormorant:  ['Cormorant Garamond', 'serif'],
        'serif-jp': ['"Noto Serif JP"', 'serif'],
        'sans-jp':  ['"Noto Sans JP"', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
