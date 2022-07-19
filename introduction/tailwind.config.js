/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        prototurk: '#322445a1',
        twitter: '#1da1f2',
      },
      spacing: {
        '15': '3.75rem',
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [],
}
