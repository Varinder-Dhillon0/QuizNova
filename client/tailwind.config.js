/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize : {
      xxs : "0.65rem",
      xs : "0.72rem",
      sm: '0.872rem',
      base: '0.92rem',
      md : "1.01rem",
      lg  : "1.125rem",
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl' : "3.75rem",
      '7xl' : '4.4rem'
    },
    lineHeight: {
      none: '1',
      tight: '1.15',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    extend: {
      blur:{
        '80':'80px'
      },
      fontFamily: {
        'Satoshi-Black': ['Satoshi-Black', 'sans-serif'],
        'Satoshi-Regular': ['Satoshi-Regular', 'sans-serif'],
        'Satoshi-Bold': ['Satoshi-Bold', 'sans-serif'],
        'Boska-MediumItalic': ['Boska-MediumItalic', 'sans-serif'],
        'Boska-BoldItalic': ['Boska-BoldItalic', 'sans-serif'],
        'Boska-BlackItalic': ['Boska-BlackItalic', 'sans-serif'],
        'Satoshi-MediumItalic': ['Satoshi-MediumItalic', 'sans-serif'],
        'Satoshi-Medium': ['Satoshi-Medium', 'sans-serif'],
        'Satoshi-Light': ['Satoshi-Light', 'sans-serif'],
        'Silka-Bold' : ['Silka-Bold' , 'sans-serif'],
        'Silka-Medium' : ['Silka-Medium' , 'sans-serif'],
        'Silka-Semibold' : ['Silka-Semibold' , 'sans-serif'],
        'Silka-Regular' : ['Silka-Regular' , 'sans-serif'],
      },
      colors: {
        customGreen: '#caef45',
        customPurple: '#512da8', 
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        'custom-light': '0 2px 6px rgba(0, 0, 0, 0.08)', // Lighter custom shadow
      },
    },
  },
  plugins: [],
}
