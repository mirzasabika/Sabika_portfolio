import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({title,des,src,globeLink,gitLink}) => {
  return (
  <div className="w-full xl:px-9 p-9 h-auto  rounded-lg shadow-shadowOne items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:bg-gray-900 transition-colors duration-1000 pb-[80px]">

    <div className="w-full h-[70%]  rounded-lg overflow-hidden">
      <img className="w-full h-full xl:h-52 object-cover  group-hover:scale-90 duration-300 rounded-lg cursor-pointer" src={src} alt="" />
    </div>

    <div className="w-full mt-1 flex flex-col gap-6 ">

      <div className="">

        <div className="flex items-center justify-between uppercase">

          <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>

         <div className=" flex gap-5">
            <span className=" text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer  ">
             <a href={ gitLink } target="_blank"> <FaGithub /> </a>
            </span>

            <span className=" text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer  ">
             <a href={globeLink} target="_blank">  <IoGlobeOutline /> </a>
            </span>
          </div>
       </div>

       
        <p className="xl:text-[13px] fd:text-[15px] text-[12px] lg:text-[12px] slg:text-[14px] md:text-[11px] tracking-wide mt-5 hover:text-gray-100 duration-3000 ">
          {des}
        </p>
       

      </div>
     
    
         
    </div>
  </div>
  )
}

export default ProjectCard