import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'

import Achivement from './Achivement'
import Experience from './Experience'
import Skill from './Skill'

const Resume = () => {
   const[education,setEducation]=useState(true);
   const[skillData,setSkillData]=useState(false);
   const[experience,setExperience]=useState(false);
   const[achivement,setAchivement]=useState(false);
  return (
   <section id="about"  className="w-full py-20 border-b-[1px] border-b-black" >

      <div className="flex justify-center items-center text-center uppercase">
          <Title
             title="visit my portfolio and give your feedback"
             des="about me" 
           />
      </div>

      <div className="">
         <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li onClick={()=>
              setEducation(true)& 
              setSkillData(false)&
              setExperience(false)&
              setAchivement(false)
              }
              className={`${education ? "border-designColor rounded-lg" : "border-transparent"} resumeli`}>Education & Experience
            </li>

            <li onClick={()=> 
              setEducation(false)& 
              setSkillData(true)&
              setExperience(false)&
              setAchivement(false)
              } className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"} resumeli`}>
             Professional Skills
            </li>

            <li onClick={()=> 
              setEducation(false)& 
              setSkillData(false)&
              setExperience(true)&
              setAchivement(false)
              } className={`${experience ? "border-designColor rounded-lg" : "border-transparent"} resumeli`}>Basic Information
            </li>

            <li onClick={()=> 
              setEducation(false)& 
              setSkillData(false)&
              setExperience(false)&
              setAchivement(true)
              } className={`${achivement ? "border-designColor rounded-lg" : "border-transparent"} resumeli`}>Achivements
            </li>

         </ul>
      </div>

      {education && <Education/>}
      {skillData && <Skill/>}
      {achivement &&  <Achivement/> }
      {experience &&   <Experience/>}
   
  

   </section>
  )
}

export default Resume