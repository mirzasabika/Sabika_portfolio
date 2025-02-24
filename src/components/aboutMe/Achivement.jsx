import React from 'react'
import {motion} from "framer-motion"
import ResumeCard from './ResumeCard'

const Achivement = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex flex-col lgl:flex-row gap-8 lgl:gap-16 ">

    <div className="">

      <div className="flex flex-col gap-4 lgl:py-10 py-6">
        <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
        <h2 className="text-3xl md:text-4xl font-bold">Achivements</h2>
      </div>

       <div className="lgl:mt-14 mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 capitalize ">

         <ResumeCard
            title="java"
            subTitle="complete coding (24/12/2024)"
            des=" Core Java (OOPs, Collections, Multithreading, Exception Handling), Servlets, JSP Spring & Hibernate,JDBC & JPA, Microservice, maven tomcat."
            link="public/certificates/Java-certificate.pdf"
           />
        
        <ResumeCard
           title="Technology Software Development Job Simulation"
           subTitle="citi (26/11/2024)"
           des="Create a state diagram, Write a feature proposal, Query data from the web, Visualize live data"
           link="public/certificates/CITI-SABIKA.pdf"
         />
        
         <ResumeCard
           title="React.js"
           subTitle="complete coding (02/01/2025)"
           des="Reusable and modular UI, Hooks, Context API, Redux, React Router for navigation, Fetch, Axios for RESTful APIs, Fast rendering for better performance."
            link="public/certificates/Certificate_React.pdf"

          />

         <ResumeCard
           title="javaScript"
           subTitle="complete coding (24/12/2024)"
           des=" ES6+, Variables, Functions, OOP, DOM Manipulation, Callbacks, Promises, Async/Await, API Integration."
            link="public/certificates/JavaScript-certificate.pdf"
          />
       </div>
    </div>
    
    <div className="">
      <div className="flex flex-col gap-4 font-titleFont lgl:py-10 py-6 ">
        <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
        <h2 className="text-3xl md:text-4xl font-bold">certificates</h2>
      </div>

       <div className="lgl:mt-14 mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 capitalize ">

       <ResumeCard
           title="java fullstack"
           subTitle="CETPA INFOTECH pvt.ltd (11/22/2024)"
           des="HTML, CSS, JavaScript, React.js, Core Java, Spring Boot, REST APIs,  MySQL, Git, GitHub, tailwind css"
            link="public/certificates/Mirza_Sabika_java.pdf"
         />

         <ResumeCard 
            title="SQL and Relational Databases 101"
            subTitle="Cognitive Class (19/11/2010)"
            des=" SQL Basics( SELECT, INSERT, UPDATE, DELETE), Joins & Relationships(INNER, LEFT, RIGHT, FULL JOIN),  Database Management (mysql)"
             link="public/certificates/sql.pdf"
          />
       
         <ResumeCard
           title="Developer and Technology Job Simulation"
           subTitle="accenture (24/11/2024)"
           des="The Software Development Lifecycle (SDLC), Software Development Methodologies: Waterfall and
          Agile, The Software Testing Lifecycle (STLC),   Algorithmic Thinking"
           link="public/certificates/acenture.pdf"
          />

          <ResumeCard
           title="Advanced Excel"
           subTitle="cetpa infotech pvt.ltd (17/08/2024)"
           des=" VLOOKUP, HLOOKUP, IF, SUMIF, Sorting, Filtering, Text Functions, Charts, Conditional Formatting."
            link="public/certificates/msExcel.pdf"
          />
       </div>
    </div>
 </motion.div>
  )
}

export default Achivement