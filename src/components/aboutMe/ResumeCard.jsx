import React from 'react'

const ResumeCard = ({subTitle,title,des,link}) => {
  return (
    <div className="w-full h-1/3 group flex ">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative  ">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center  bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300 "></span>
        </span>
      </div>

      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-3000 rounded-lg lgl:px-10 p-4 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne ">
       
       
      
        <div className="">

          <a href={link} target="_blank"><h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300 text-designColor cursor-pointer">{title}</h3></a>

          <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300 capitalize">{subTitle}</p>
              
        </div>

       
       <p className="md:text-base text-sm font-medium text-gray-400 group-hover:text-gray-300 duration-300"> <i>{des}</i> </p>

      </div>

    </div>
  )
}

export default ResumeCard