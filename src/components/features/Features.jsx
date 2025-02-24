import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { FaGlobe, FaDatabase, FaJava, FaMobile } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { BsStack } from "react-icons/bs";

function Features() {
  return (

    <section id="features" className="w-full  py-20 border-b-[1px] border-b-black ">

      <Title title=" Features" des="what i do"/>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-16 ">

      <Card
        title="java fullstack developer"
        des="Skilled in developing end-to-end web applications using Java, Spring Boot, Hibernate, and RESTful APIs for backend development, along with HTML, CSS, JavaScript, React for frontend. Experienced in database management (MySQL, PostgreSQL), version control (Git). Strong understanding of SDLC and agile methodologies."
        icon={<BsStack />}
        li1="Backend Technologies: Java, Spring Boot, Spring MVC, Hibernate."
        li2="Frontend Technologies: React.js, JavaScript, HTML, CSS"
        li3="Databases: MySQL, PostgreSQL"
        li4="Tools & Version Control: Git, GitHub, VS Code, IntelliJ IDEA, Eclipse"
        li5="API Development: JSON"
        />

        <Card
        title="web developer"
        des="Proficient in designing and developing responsive web applications using HTML, CSS, JavaScript, and modern frameworks like React. Experienced in tailwind css and bootstrap and database management using MySQL. Skilled in RESTful API integration and designing. Strong problem-solving skills and a keen eye for UI/UX design."
        icon={<FaGlobe />}
        li1="Front-End Technologies: HTML5, CSS3, JavaScript, React.js."
        li2="Databases: MySQL"
        li3="Version Control: Git, GitHub."
        li4=" Deployment: Netlify, Vercel"
        li5="Tools: Figma, Adobe XD, Canva"
        />


<Card
        title="java developer"
        des="Proficient in developing scalable and efficient applications using Java, Spring Boot, Hibernate, and RESTful APIs. Experienced in object-oriented programming, Collections Framework, Multithreading, Exception Handling and database management (MySQL, PostgreSQL), and microservices architecture, Strong problem-solving abilities."
        icon={<FaJava />}
        li1="Programming Languages: Java, MySQL, JavaScript"
        li2="Frameworks & Libraries: Spring Boot, Hibernate, JPA"
        li3="Web Technologies: Servlets, JSP"
        li4="Databases: MySQL"
        li5="Tools: Eclipse, vs code, Maven"
        />

<Card
        title="frontend developer"
        des="Creative and detail-oriented Frontend Developer have experience in developing responsive and user-friendly web applications. Proficient in React.js, JavaScript, HTML, CSS, and TailwindCSS. Passionate about UI/UX design, performance optimization, and building scalable web applications. Experienced in working with REST APIs."
        icon={< FaMobile />}
        li1="Programming Languages: HTML, CSS, JavaScript."
        li2="Frontend Frameworks: React.js, Redux, Context API"
        li3="Styling & UI Libraries: Tailwind CSS, Bootstrap"
        li4="UI/UX Design: Figma, Adobe XD, Responsive Design, Canva"
        li5="Performance Optimization: Lazy Loading, Code Splitting"
        />

<Card
        title="backend developer"
        des="Experienced Backend Developer expertise in building scalable, high-performance web applications. Proficient in Java, Spring Boot and database (MySQL). Strong background in designing RESTful APIs, microservices architecture. Passionate about optimizing system performance, ensuring security and collaborating with cross-functional teams."
        icon={<AiFillAppstore />}
        li1="Programming Languages: Java, SQL"
        li2="Frameworks & Libraries: Spring Boot, Hibernate, JPA"
        li3="Databases: MySQL, PostgreSQL."
        li4="Tools: VS Code, Esclipse,"
        li5="Technologies: Maven"
        />


<Card
        title="Software Engineer"
        des="A highly motivated Software Engineer, Proficient in Java, JavaScript, html, css, react.js. Strong background in backend and full-stack development, microservices architecture, and database optimization.Adept at problem-solving, writing clean and efficient code, and collaborating with cross-functional teams to deliver high-quality software solutions"
        icon={< FaDatabase/>}
        li1="Programming Languages: Java, JavaScript"
        li2="Frameworks & Libraries: Spring Boot, React"
        li3="Databases: MySQL, PostgreSQL"
        li4="Version Control: Git, GitHub"
        li5="Tools: Eclipse, Visual Studio Code"
        />
        

      </div>

    </section>
  )
}

export default Features