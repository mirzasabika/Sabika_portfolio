import React from 'react'
import {motion} from "framer-motion"
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className=" w-full flex flex-col lgl:flex-row gap-8 lgl:gap-16 ">
      
      {/* PART-1 */}
    <div className="">

      <div className="flex flex-col gap-4 font-titleFont lgl:py-12 py-6">
        <p className="text-sm text-designColor tracking-[4px]">2017-2025</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
      </div>

      <div className="lgl:mt-14 mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10  ">

         <ResumeCard 
            title="B.tech in Computer Science and Engineering"
            subTitle="Kamla nehru institute of physical and social sciences  (2021 - 2025)"
            des="A four-year undergraduate program focused on software development, algorithms, data structures, networking, artificial intelligence, and cybersecurity. It combines theoretical knowledge with practical applications, preparing students for careers in software development, data science, IT."
          />
        <ResumeCard
           title="Senior Secondary Education"
           subTitle="Tabish Public Senior secondary school (2019 - 2021)"
           des="Completed senior secondary education with specialization in Science  Stream. Gained strong knowledge in physic, chemistry, Mathematics. Developed analytical, problem-solving, and communication skills. Participated in extracurricular activities, showcasing leadership and teamwork."
         />
         <ResumeCard
           title="Secondary Education"
           subTitle="Tabish Public Senior secondary school (2017 - 2019)"
           des="Completed secondary education with a strong academic foundation, demonstrating proficiency in Mathematics, Science, English. Developed critical thinking, problem-solving, and communication skills. Engaged in extracurricular activities such as sports, volunteer work."
          />
       </div>
    </div>
    
    {/* PART-2 */}

    <div className="">
      <div className="flex flex-col gap-4 font-titleFont lgl:py-12 py-6">
        <p className="text-sm text-designColor  tracking-[4px]">2024 - 2025</p>
        <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
      </div>

       <div className="lgl:mt-14 mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 capitalize ">

         <ResumeCard 
            title="java full stack developer"
            subTitle="cetpa infotech pvt ltd (08/07/2024 - 12/01/2025)"
            des="Completed a 6-month internship as a Java Full Stack Developer, gained hands-on experience in developing web applications using Java, Spring Boot, Hibernate, React and MySQL. Worked on both front-end and back-end development, API integration, and database management. Collaborated in an Agile environment."
            link="public/internship certificates cetpa.pdf"
          />
        <ResumeCard
           title="full stack web developer"
           subTitle="unified mentor (2024 - 2025)"
           des="Completed a 2-month internship as a Full Stack Web Developer, gaining hands-on experience in developing and deploying web applications using HTML, CSS, JavaScript, React, MySQL. Worked on both front-end and back-end development, API integration, and debugging, enhancing problem-solving and teamwork skills."
           link="public/unified mentor mirza sabika.pdf"
         />
         <ResumeCard
           title="java full stack developer"
           subTitle="cetpa infotech pvt ltd (08/07/2024 - 12/01/2025)"
           des="Completed 6 months of intensive training in Java Full Stack Development, gaining expertise in Java, Spring Boot, Hibernate, Frontend technologies React, MySQL, and RESTful APIs. Developed and deployed web applications, improving coding, debugging, and problem-solving skills."
          link="public/Mirza Sabika trainig certificates.pdf"
          />
       </div>
    </div>
 </motion.div>
  )
}

export default Education