/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Satoshi-Regular': ['Satoshi-Regular', 'sans-serif'],
        'Satoshi-Bold': ['Satoshi-Bold', 'sans-serif'],
        'Boska-MediumItalic': ['Boska-MediumItalic', 'sans-serif'],
        'Boska-BoldItalic': ['Boska-BoldItalic', 'sans-serif'],
        'Boska-BlackItalic': ['Boska-BlackItalic', 'sans-serif'],
        'Satoshi-MediumItalic': ['Satoshi-MediumItalic', 'sans-serif'],
        'Satoshi-Medium': ['Satoshi-Medium', 'sans-serif'],
        'Satoshi-Light': ['Satoshi-Light', 'sans-serif']
      },
      colors: {
        customGreen: '#caef45',
        customPurple: '#512da8', 
      },
    },
  },
  plugins: [],
}
