/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue, js, ts}'
  ],
  theme: {
    extend: {},
    theme: {
      fontSize: {
        sm: "12px",
        base: "16px",
        xl: "22px",
      }
    }
  },
  plugins: [],
}

