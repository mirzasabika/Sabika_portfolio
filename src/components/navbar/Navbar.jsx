import React, { useState } from 'react'
import {Link } from 'react-scroll'
import { images } from '../../assets/images'
import { BsGridFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import{navlinkData} from '../../constant/navlink'
import ChangeColor from '../change color/ChangeColor';
import FindMe from '../layouts/FindMe';


function Navbar() {

  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex  justify-between items-center font-titleFont  border-b-[1px] border-b-gray-600 ">
      <div className="h-[50%] w-auto px-4 text-center bg-bodyColor ">
      
        <img src={images.about_me} alt="" className='h-full w-full'/>
     </div>

     <div>
      <ul className="hidden mdl:inline-flex items-center lg:gap-10 gap-6 pr-4">
        {
          navlinkData.map(({_id,title,link})=>(
            <li  className="text-base font-normal text-gray-400 
            tracking-wide cursor-pointer hover:text-designColor
            duration-300 pr-7 group"
            key={_id} >

             <Link
             activeClass="active"
             to={link}
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}> {title}</Link>

             <div className="mx-auto bg-designColor w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>

            </li>
            
          ))

          
        }
      </ul>
      <span onClick={()=>setShowMenu(!showMenu)}   className="text-xl mdl:hidden  w-20 h-20 inline-flex items-center justify-center rounded-full hover:text-designColor text-lightText cursor-pointer">< BsGridFill  />
      </span>

      {
        showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 backdrop-blur-3xl  p-4 scrollbar-hide mdl:hidden "> 

            <div className="flex flex-col gap-8 py-2 relative">

              <div >
               <img src={images.about_me} alt="img not available" className=' w-32'/>
               <p className="text-sm text-gray-400
               mt-2">       
                  Aspiring Full-Stack Developer with a strong foundation in front-end and back-end development, proficient in technologies like 
                  HTML, CSS, JavaScript, React and databases such as MySQL and Java.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {
                  navlinkData.map((item)=>(
                    <li  
                    key={item._id}
                    className="text-base font-normal text-gray-400 
                    tracking-wide cursor-pointer hover:text-designColor
                    duration-300 ">
                      <Link
                      onClick={()=>setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500} 
                      > {item.title} </Link>
                    </li>
                  ))
                }
              </ul>

              <div className="flex flex-col gap-4 ">
    
                  <h2 className="text-base uppercase font-titleFont mb-4  ">FIND ME IN</h2>
    
                  <FindMe/>
                </div>

              <span 
            onClick={()=> setShowMenu(false)}
            className="absolute  top-4 right-4  text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
             <IoClose />
            </span>
            </div>

            
          </div>
        )
      }
     </div>
     
     {/* <ChangeColor/> */}
    </div>
  )
}

export default Navbar