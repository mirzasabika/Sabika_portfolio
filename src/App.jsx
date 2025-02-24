import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import Resume from './components/aboutMe/Resume'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import FooterBottom from './components/footer/FooterBottom'



function App() {
  return (
    <div className="w-full h-auto text-lightText bg-bodyColor px-4 ">
      <Navbar/>
      <div className="max-w-screen-xl  mx-auto ">
       
      
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
       <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
      
    </div>
  )
}

export default App