

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        fd:"550px",
        mds:"740px",
        mdl:"788px",
        lg:"946px",
        lgl:"1024px",
        slg:"1150px",
        xl:"1280px",
        
      },
      fontFamily:{
        bodyFont:["Poppins","sans-serif"],
        titleFont:["Montserrat","sans-serif"],
      },
      colors:{
        bodyColor:"#212428",
        lightText:"#c4cfde",
        boxBg:"linear-gradient(145deg,#1e2024,#23272b)",
        // designColor:"#FFD48B",
        designColor:"#ff014f",
        loaderColor:"linear-gradient(-225deg, #ff7402 0%,  #ffe700   #fff55e 100% 50%, )"
      },
      
      boxShadow: {
        shadowOne:"10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
       
      },

      animation: {
        'spin-slow': 'spin 4s linear infinite',
        hue: "hueRotate 3s linear infinite",

      },

      keyframes: {
        hueRotate: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" }
        },
      },
  plugins: [],
}
}
}