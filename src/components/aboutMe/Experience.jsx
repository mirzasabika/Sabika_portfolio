import React from 'react'
import { ImArrowDownRight2 } from "react-icons/im";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { Link } from 'react-scroll';





const Experience = () => {
  return (
  

    <section className="flex flex-col  gap-14 justify-center items-center w-full  ">
      <h1 className="capitalize text-3xl font-bold mt-10">Basic Infomation about me</h1>

      <div className="w-[80%] min-w-[400px]rounded-lg h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8  shadow-shadowOne flex flex-col gap-10  ">
        <h1 className="flex gap-4 text-2xl tracking-wider">I'm <span className="text-designColor font-mono text-2xl">Mirza sabika</span></h1>

        <p className=" pr-4">
          Motivated and detail-oriented B.tech graduate with a strong foundation in Computer Science and Engineering. Skilled in Java, HTML, CSS, JS, React.JS with a passion for learning and problem-solving. Eager to apply academic knowledge and internship experience to contribute effectively in a dynamic work environment. Strong analytical, teamwork, and communication skills, with a commitment to continuous professional growth
        </p> 

        <div className="flex flex-col gap-5 lgl:gap-0 lgl:flex-row justify-between text-lg items-center w-full ">
           <ul className="flex gap-5 flex-col  w-[400px]">
             <li className="aboutMe  capitalize  "> profession  :<span className="opacity-70 text-lg text-lightText">Java full stack developer</span></li>
             <li className="aboutMe  capitalize">Degree :<span className="opacity-70 text-lg text-lightText">B.tecth [CSE]</span></li>
             <li  className="aboutMe">Email :<span className="opacity-70 text-lg text-lightText">mirzasabikabeig@gmail.com</span></li>
             <li className="aboutMe  capitalize">location :<span className="opacity-70 text-lg text-lightText">delhi</span></li>
           </ul>
           <ul className="flex gap-5 flex-col  w-[400px]">
             <li className="aboutMe  capitalize  ">birthday :<span className="opacity-70 text-lg text-lightText">04/04/2002</span></li>
             <li className="aboutMe  capitalize ">strength :<span className="opacity-70 text-lg text-lightText">adaptability,quick learner</span></li>
             <li  className="aboutMe  capitalize ">weekness :<span className="opacity-70 text-lg text-lightText">too perfectionism</span></li>
             <li  className="aboutMe  capitalize ">hobbies  :<span className="opacity-70 text-lg text-lightText">designing,sketching</span></li>
           </ul>
        </div>  

        <div className=" flex gap-6 flex-col md:flex-row">

          <div className=" ">
            {
             
                <Link to="contact" className=" download   w-[200px] h-14 rounded-full text-center p-3 flex  gap-3 justify-center align-middle  active:opacity-70"> 
                  <button id='1005' className=" text-[18px] capitalize">hire me</button>
                  <ImArrowDownRight2 /> 
                </Link>
            
            }
          
            
          </div>

          <div className="download  w-[250px] h-14 rounded-full text-center p-3 flex  gap-3 justify-center align-middle  active:opacity-70 ">
           <a href="/file/sabika web development.pdf" download="MirzaSabikaResume.pdf"> <button className=" text-[18px] capitalize ">download resume</button> </a>
            <HiMiniArrowDownTray />
          </div>

        </div>
      </div>

    </section>

  )
}

export default Experience