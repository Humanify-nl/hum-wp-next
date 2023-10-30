/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      fontSize: {
        'p': ['1.25rem', { lineHeight: '2rem' }],
        'h1': ['4rem', { lineHeight: '4.25rem' }],
        'h2': ['2.5rem', { lineHeight: '2.75rem' }],
        'h3': ['2rem', { lineHeight: '2.25rem' }],
        'h4': ['1.75rem', { lineHeight: '2rem' }],
      },
      spacing: {
        'text-1': '1.5rem',
      }
    },
  },
  plugins: [],
}
