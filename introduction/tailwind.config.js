/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        prototurk: '#322445a1',
      },
      spacing: {
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
}
