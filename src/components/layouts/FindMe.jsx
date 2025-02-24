import React from 'react'
import {FaLinkedinIn,FaGithub, FaFacebookF} from "react-icons/fa"

const FindMe = () => {
  return (
    <div className="flex gap-4">
    <span className="bannericon">              
      <a href="https://www.linkedin.com/in/mirza-sabika-95428529b/" target='_blank'><FaLinkedinIn/></a>
    </span>
   
    <span className="bannericon">              
     <a href="https://github.com/mirzasabika" target='_blank'> <FaGithub /></a>
    </span>

    <span className="bannericon">              
      <a href="">< FaFacebookF /></a>
    </span>

  </div>
  )
}

export default FindMe