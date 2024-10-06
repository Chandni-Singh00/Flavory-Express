/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors:{
    //   headingColor:"#2e2e2e":bg-gray-800,
    //   textColor:"#515151":bg-gray-500,
    //   primary:"#f5f3f3":bg-gray-200,
    //   cartNumBg:"#e80013":bg-red-700,
    //   cartItm:"#2e3033"
    //  cartTotal:"#343739"
    // },
    extend: {
     
    },
   
  },
  plugins: [],
}

