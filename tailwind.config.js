/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#000000',
        'background': '#ece2ee',
        'primary': '#4d2e43',
        'secondary': '#e6d6d9',
        'accent': '#965a65',
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

