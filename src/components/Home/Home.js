import React from 'react';
import './Home.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  useGSAP(()=>{
    gsap.from(".content h1" , {
      opacity: 0 ,
      y:30,
      stagger:0.5,
      duration:2,
      delay:1,
    } )

    gsap.from(".content p" , {
      opacity: 0 ,
      y:30,
      duration:2,
      delay:1,
    } )
  })
  return (
    <section className="home-section">
      <video autoPlay loop muted className="background-video">
        <source src={`${process.env.PUBLIC_URL}/4912684-hd_1920_1080_24fps.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="content">
          <h1>Social Santa</h1>
          <p>Social Santa is a dynamic digital marketing agency dedicated to elevating your brand's online presence. We specialize in web design, logo design, and graphics design, crafting visually stunning and highly functional solutions tailored to your unique needs.</p>
          <Link to='/about' className='cta-button'>Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;