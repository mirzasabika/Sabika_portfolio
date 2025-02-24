import React from 'react'
import { images } from '../../assets/images'
import FooterCard from './FooterCard'
import FindMe from '../layouts/FindMe'

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid lgl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="w-full h-full flex flex-col gap-8">
            <img className="w-32" src={images.about_me} alt="logo" />

            <FindMe/>
        </div>


        <FooterCard
         title="QUICK LINK"
         subtitle_1="About"
         subtitle_2="Portfolio"
         subtitle_3="Services"
         subtitle_4="Blog"
         subtitle_5="Contact"
        />

       <FooterCard
         title="RESOURCES"
         subtitle_1="Authentication"
         subtitle_2="System Status"
         subtitle_3="Terms of Service"
         subtitle_4="Pricing"
         subtitle_5="Over Right"
        />

    <FooterCard
         title="DEVELOPERS"
         subtitle_1="Documentation"
         subtitle_2="Authentication"
         subtitle_3="API Reference"
         subtitle_4="Support"
         subtitle_5="Open Source"
        />
       
    </div>
  )
}

export default Footer