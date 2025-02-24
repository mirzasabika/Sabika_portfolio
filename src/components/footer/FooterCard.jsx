import React from 'react'

const FooterCard = ({title,subtitle_1,subtitle_2,subtitle_3,subtitle_4,subtitle_5}) => {
  return (
    <div className="w-full h-full ">
           
    <h3 className="text-xl uppercase text-designColor tracking-wider ">{title}</h3>

    <ul className=" flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6 ">
       <li>
         <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">{subtitle_1} <span className="footerchild_2"></span>
         </span>
     </li>

     <li>
         <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">{subtitle_2}<span className="footerchild_2"></span>
         </span>
     </li>

     <li>
         <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">{subtitle_3}<span className="footerchild_2"></span>
         </span>
     </li>

     <li>
         <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">{subtitle_4}<span className="footerchild_2"></span>
         </span>
     </li>

     <li>
         <span className=" w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">{subtitle_5}<span className="footerchild_2"></span>
         </span>
     </li>
      
    </ul>
 </div>
  )
}

export default FooterCard