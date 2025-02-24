import React from 'react'
import { images } from '../../assets/images'

function RightBanner() {
  return (
    
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
    
    <img  
    className="w-[400px] h-[400px] lgl:h-[490px] lgl:w-[500px] z-10"
    src={images.bannerImg} 
    alt="" />

    <div className="absolute  bottom-0 w-[300px] h-[350px] lgl:h-[440px] lgl:w-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center "></div>


    </div>

  )
}

export default RightBanner