import React from 'react'
import { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";


const ChangeColor = () => {
    const [isDark, setIsDark] = useState(false);


  return (
    <div className=" flex justify-center items-center gap-6 cursor-pointer">
        <div className={`flex gap-1 text-base font-normal text-gray-400 
          tracking-wide cursor-pointer  h-8 w-8 
         duration-500 relative ${
            isDark ? "rotate-180" : "rotate-0"
          }`} >

            {
                !isDark? <BsMoonStarsFill
                className={`w-5 h-5 
                   transition-transform d
                   uration-500 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:text-white`}
                  onClick={() =>  setIsDark(!isDark)}
              /> 
              
              :

              <IoSunny 
              className={`w-8 h-8 
               transition-transform d
               uration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-yellow-500`}
             onClick={() => setIsDark(!isDark)}
             
             />
            }
         

        </div>

        <div class="relative w-10 h-10 border-[2px] border-[#282828] rounded-full overflow-hidden shadow-[-5px_-5px_5px_rgba(255,255,255,0.1),10px_10px_10px_rgba(0,0,0,0.4),inset_-5px_-5px_5px_rgba(255,255,255,0.2),inset_10px_10px_10px_rgba(0,0,0,0.4)]">

          <div class="absolute inset-2 z-10 bg-[#212121] rounded-full border-[2px] border-[#292929] shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.2),inset_3px_3px_5px_rgba(0,0,0,0.5)]"></div>
          <div class="absolute inset-0 rounded-full blur-l z-[-1] animate-spin-slow animate-hue bg-gradient-to-r from-designColor via-violet-400  to-[#FFD48B]"></div>
        </div>

   
    </div>
  )
}

export default ChangeColor