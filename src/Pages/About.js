import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import AboutIntro from '../components/AboutIntro/AboutIntro'
import AboutCard from '../components/AboutCard/AboutCard'
import WhyChooseUsCard from '../components/WhyChooseus/WhyChooseus'
import MissionSection from '../components/MissionSection/MissionSection'
import VisionSection from '../components/VisionSection/VisionSection'
import WhatsApp from '../components/Whatsapp/Whatsapp'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutIntro/>
        <AboutCard/>
        <section id="why-choose-us" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Why Choose Us?</h2>
                    <div className="card-container">
                        <WhyChooseUsCard
                            title="Quality"
                            description="We are committed to delivering high-quality products and services."
                            icon="https://images.unsplash.com/photo-1530476609330-4c1acb54f479?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <WhyChooseUsCard
                            title="Innovation"
                            description="We foster a culture of innovation to stay ahead in the industry."
                            icon="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <WhyChooseUsCard
                            title="Customer Satisfaction"
                            description="Customer satisfaction is our top priority in every project."
                            icon="https://images.unsplash.com/photo-1698084068165-69a631a3ba1b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                </div>
            </section>
            <MissionSection/>
            <VisionSection/>
            <WhatsApp/>
        <Footer/>
    </div>
  )
}

export default About