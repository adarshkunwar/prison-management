/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#020302',
        'background': '#e1efe3',
        'primary': '#a3b3cc',
        'secondary': '#e9d8e7',
        'accent': '#9e8357',
      },
      textColor: {
        'primary': '#000205',
        'secondary': '#fafafa',
      }
    },
  },
  plugins: [
  ],
}

