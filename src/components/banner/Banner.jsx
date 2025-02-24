import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';



const Banner=()=> {

  return (
    <section id="home"  className="w-full pt-10 pb-20 flex flex-col xl:gap-0  lgl:flex-row gap-10 font-titleFont  items-center border-b-[1px] border-b-black ">

       <LeftBanner/>

      <RightBanner/>
   
    </section>
  )
}

export default Banner