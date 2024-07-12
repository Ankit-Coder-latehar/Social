import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Blogging from '../components/Blogging/Blogging';
import WhatsApp from '../components/Whatsapp/Whatsapp';

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <Blogging/>
        <WhatsApp/>
        <Footer/>
    </div>
  )
}

export default Blog;