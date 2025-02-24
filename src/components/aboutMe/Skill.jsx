import React from 'react'
import {motion} from "framer-motion"


const Skill = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className=" w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 ">

      {/* PART-1 */}

    <div className="w-full lgl:w-1/2">

      <div className=" py-2 font-titleFont flex flex-col gap-4 ">
        <p className="text-sm text-designColor  pb-2  mt-9 tracking-[4px]">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold"> Technical skills</h2>
      </div>

      <div className="mt-14 w-full flex flex-col gap-7">
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">html & css</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
            initial={{ x:"-100%", opacity:0}}
            animate={{ x: 0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
            className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">95%</span>
            </motion.span>
          </span>
        </div>


        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">javascript</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}}
            className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>


        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">FIGMA & Designing</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
            initial={{ x:"-100%", opacity:0}}
            animate={{ x: 0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
            className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>


        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">react.js</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}} 
            className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">85%</span>
            </motion.span>
          </span>
        </div>

        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">java</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}}
            className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">70%</span>
            </motion.span>
          </span>
        </div>

        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">tailwindCss & bootstrap</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}}
            className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">95%</span>
            </motion.span>
          </span>
        </div>
         
      </div>

    </div>





    {/* PART-1 */}
    
    <div className="w-full lgl:w-1/2">
      <div className=" py-2 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor pb-2 mt-9 tracking-[4px]">Features</p>
        <h2 className="text-3xl md:text-4xl  font-bold">Soft Skills</h2>
      </div>

      <div className="mt-14  w-full flex flex-col gap-7 ">
          
      <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">team work </p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
            initial={{ x:"-100%", opacity:0}}
            animate={{ x: 0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
            className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">95%</span>
            </motion.span>
          </span>
        </div>


        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">adaptability</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}}
            className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>


        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Creativity</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
            initial={{ x:"-100%", opacity:0}}
            animate={{ x: 0, opacity:1}}
            transition={{duration:0.5, delay:0.5}}
            className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">100%</span>
            </motion.span>
          </span>
        </div>


        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">leadership</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}}
            className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>

        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Problem-solving</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}}
            className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">85%</span>
            </motion.span>
          </span>
        </div>

        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Emotional intelligence</p>
          <span className="w-full h-4 bgOpacity inline-flex rounded-sm p-[4px]">
            <motion.span 
             initial={{ x:"-100%", opacity:0}}
             animate={{ x: 0, opacity:1}}
             transition={{duration:0.5, delay:0.5}}
            className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative ">
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
         
      </div>
    </div>
 </motion.div>
  )
}

export default Skill