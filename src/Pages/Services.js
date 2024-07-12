import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'
import OurServices from '../components/OurServices/OurServices'
import WhatsApp from '../components/Whatsapp/Whatsapp'
import FAQs from '../components/Faq/Faq'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <OurServices/>
      <FAQs/>
      <WhatsApp/>
      <Footer/>
    </div>
  )
}

export default Services