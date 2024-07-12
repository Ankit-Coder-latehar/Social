import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Description from '../components/Description/Description'
import ProjectSection from '../components/Projects/Projects'
import Testimonials from '../components/Testimonial/Testimonial'
import HomeSection from '../components/Home/Home'
import Work from '../components/Work/Work'
import Subscribe from '../components/Subscribe/Subscribe'
import Partners from '../components/Partners/Partners'
import WhatsApp from '../components/Whatsapp/Whatsapp'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeSection/>
        <Description/>
        <Work/>
        <ProjectSection/>
        <Testimonials/>
        <Subscribe/>
        <Partners/>
        <WhatsApp/>
        <Footer/>
    </div>
  )
}

export default Home