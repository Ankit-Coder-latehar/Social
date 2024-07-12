
import React from 'react';
import './AboutIntro.css'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AboutIntro = () => {
    useGSAP(()=>{
        gsap.from(".intro-text h1" , {
            opacity:0,
            y:20,
            duration: 2, 
            delay: 1,
            stagger: 0.5,
        });
        gsap.from(".intro-text h5" , {
            opacity:0,
            y:20,
            duration: 2, 
            delay: 1,
        })
    })
    return (
   <>
   <div>
        <section id="about-intro" className="about-intro">
            <video autoPlay loop muted className="background-video">
        <source src={`${process.env.PUBLIC_URL}/4912684-hd_1920_1080_24fps.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <div className="container">
                <div className="intro-text">
                    <h1>About Us</h1>
                    <h5>
                    At Social Santa, we pride ourselves on being a dynamic<br/> and forward-thinking digital marketing agency. Our expertise lies <br/>in providing businesses from diverse industries with <br/>comprehensive branding and digital solutions. Our team of talented <br/>and imaginative professionals is dedicated to crafting strategies <br/>and creating content that not only captivates audiences <br/>but also generates tangible results in the ever-evolving<br/> digital landscape.
                    </h5>
                </div>
            </div>
        </section>
        </div>
        </>
    );
};

export default AboutIntro;


