import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import {SiTailwindcss} from "react-icons/si";
import { FaReact,FaFigma,FaJava,FaDownload } from "react-icons/fa";


function LeftBanner() {

    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'UI Designer', 'Backend Developer'],
        loop: true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
      });


  return (
    
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 ">
    <div className=" flex flex-col gap-5 ">
      <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className=" md:text-6xl text-3xl  font-bold text-white"> 
        Hi, I'm  {"  "}
        <span className="text-designColor capitalize">mirza sabika</span>
      </h1>

      <h2 className="xl:text-4xl text-xl font-bold text-white">a <span>{text}</span>
      
        <Cursor
      
         cursorBlinking="false"
         cursorStyle="|"
         cursorColor="#ff014f"
        />
        
        

      
      </h2>
      <p className="xl:text-base text-sm font-bodyFont flex justify-center items-center xl:justify-start  leading-6 px-2 xl:px-0 tracking-wide">       
      Aspiring Full-Stack Developer with a strong foundation in front-end and back-end development, proficient in technologies like 
      HTML, CSS, JavaScript, React and databases such as MySQL and Java. Hands-on experience with building responsive web 
      applications through academic projects and internships. Passionate about coding, problem-solving, and learning new technologies 
      to contribute effectively to innovative development teams.
      </p>
    </div>

    <div className="flex flex-col items-center xl:flex-row gap-6 lgl:gap-6 justify-between">
     
     <div className="">
       <h2 className="text-base uppercase font-titleFont mb-4">
          download my resume
        </h2>

       <div className="download  w-[200px] h-14 rounded-full text-center p-3 flex  gap-3 justify-center align-middle  active:opacity-70 ">
         <a href="public/sabika web development.pdf" download="MirzaSabikaResume.pdf"><button className=" text-[18px] capitalize   ">Download </button> </a>
         <FaDownload className="text-xl mt-1"/> 
        </div>
     </div>
     
     <div className="">
       <h2 className="text-base uppercase font-titleFont mb-4 flex justify-center lgl:justify-start ">
         best skills on
        </h2>

        <div className=" flex gap-4">
         <span className="bannericon"> <FaReact/> </span>
         <span className="bannericon"><SiTailwindcss/></span>
         <span className="bannericon"><FaJava/></span>
         <span className="bannericon"><FaFigma /></span>
        </div>

     </div>
      
    </div>
  </div>

  )
}

export default LeftBanner