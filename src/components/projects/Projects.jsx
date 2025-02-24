import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { images } from '../../assets/images'

const Projects = () => {
  return (
    <section id="projects"  className="w-full py-20 border-b-[1px] border-b-black ">

       <div className="flex justify-center items-center text-center ">

       <Title
        title="visit my portfolio and give your feedback"
        des="my Project"
        
        />
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2
       xl:grid-cols-3 xl:gap-14  gap-9 ">
        <ProjectCard 
        title="gemini clone"
        des="Developed a Gemini AI Clone using React.js for the frontend, integrating AI-powered chat functionalities. Implemented real-time user interactions, API integration for AI responses, and a responsive UI. Focused on performance optimization, seamless UX, and scalable architecture."
        src={images.gemini}
        gitLink ="https://github.com/mirzasabika/Gmini-2"
        globeLink = "https://gmini-2-git-main-mirza-sabikas-projects.vercel.app/"
        />

<ProjectCard 
        title="music website"
        des="Developed a music website using HTML and CSS, featuring a responsive design, interactive UI, and smooth navigation. Designed engaging layouts, integrated multimedia elements, and optimized performance for a seamless user experience."
        src={images.music}
        gitLink =""
        globeLink = ""
        />

<ProjectCard 
        title="weather app"
        des="Developed a weather app using HTML, CSS, and JavaScript, fetching real-time weather data from an API. Designed a responsive UI with dynamic updates, user-friendly interface, and interactive features for an enhanced experience"
        src={images.weather}
        gitLink ="https://github.com/mirzasabika/WeatherApp"
        globeLink = "https://clinquant-croissant-ea7dba.netlify.app/"
        />

<ProjectCard 
        title="basic calculator"
        des="Developed a basic calculator using HTML, CSS, and JavaScript to perform arithmetic operations.with a responsive and user-friendly UI with real-time calculations.Implemented event handling and DOM manipulation for seamless functionality"
        src={images.calculator}
         gitLink ="https://github.com/mirzasabika/Calculator"
        globeLink = "https://classy-haupia-d4add7.netlify.app/"
        />

<ProjectCard 
        title="Grow & Shine website"
        des="Developed the 'Grow and Shine' website using HTML, CSS. focusing on user-friendly interface  Implemented interactive elements, optimized performance. Enhanced web development skills through hands-on coding and problem-solving."
        src={images.food}
        gitLink ="https://github.com/mirzasabika/Grow-shine"
        globeLink = "https://resonant-ganache-13a58a.netlify.app/"
        />

  <ProjectCard 
        title="Stone Paper Scissor Game"
        des="Developed an interactive 'Stone Paper Scissors' game website using HTML, CSS, and JavaScript. Implemented game logic, user interface design, and real-time score tracking. Ensured responsiveness and smooth user experience through optimized animations and event handling "
        src={images.eCommerce}
        gitLink ="https://github.com/mirzasabika/ROCK-PAPER-SECISSOR-GAME"
        globeLink = "https://astounding-dasik-c8c7b9.netlify.app/"
        
        />
       

       </div>
    </section>
  )
}

export default Projects