import React from 'react'
import { images } from '../../assets/images'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import FindMe from '../layouts/FindMe';

const Contactleft = () => {

  
  return (
    
     <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8  shadow-shadowOne flex flex-col  gap-8 justify-center ">
                      
               <div className="sml:items-center">
                     <img className=" w-48 lgl:w-full h-[200px] lgl:h-[330px] lgl:object-cover mb-2 "
                      
                      src={images.contact} alt="contact img" 
                    />
               </div>
    
                <div className="flex flex-col  gap-4 items-center lgl:items-start  ">
    
                  <h3 className="lgl:text-3xl text-5xl font-bold text-white">Mirza Sabika</h3>
                  <p className="lgl:text-lg text-[30px] font-normal text-gray-400 ">Java Full Stack Developer</p>
                  <p className="lgl:text-base text-[15px]  text-gray-400 tracking-wide ">Still not Contacted? Contact me for your projects</p>
                  <p className=" text-gray-400 flex items-center justify-center gap-1 text-[20px] lgl:text-base hover:text-designColor cursor-pointer  ">
                  <MdEmail  /> <a href="mailto:mirzasabikabeig@gmail.com"><span className="text-lightText hover:text-designColor pb-[4px]lgl:text-base">mirzasabikabeig@gmail.com</span> </a>
                   
                  </p>

                  <p className="lgl:text-base text-[20px] text-gray-400 flex items-center gap-1 hover:text-designColor cursor-pointer ">
                  <FaLocationDot /> <span className="text-lightText hover:text-designColor">delhi</span> 
                   
                  </p>
    
                </div>
    
                <div className="flex flex-col gap-4 lgl:items-start xl:items-start items-center ">
    
                  <h2 className="lgl:text-base text-[20px] uppercase font-titleFont mb-4  ">FIND ME IN</h2>
    
                  <FindMe/>
                </div>
    
              </div>
  )
}

export default Contactleft