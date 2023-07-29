/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* 'text': '#100e10',
        'background': '#eeecee',
        'primary': '#928481',
        'secondary': '#e0e3de',
        'accent': '#728083', */
        // ---------------------------------
        /* 'text': '#0a0800',
        'background': '#fef4cd',
        'primary': '#c9fd4e',
        'secondary': '#a9bafe',
        'accent': '#4302d9', */
        // ---------------------------------
        'text': '#0d1011',
        'background': '#f1f3f4',
        'primary': '#7c6a5f',
        'secondary': '#e7e6df',
        'accent': '#8d6d71',
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

