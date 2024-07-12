
import React from 'react';
import './WhyChooseus.css'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const WhyChooseUsCard = ({ title, description, icon }) => {
    useGSAP(()=>{
        gsap.to(".why-choose-us-card", {
            opacity: 1 , 
            stagger:0.88,
            scale:0,
            y: -20,
            duration:2,
            delay:1,
            repeat:1,
            yoyo: true,
        })
    })
    return (
        <div className="why-choose-us-card">
            <div className="card-icon">
                <img src={icon} alt={title} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default WhyChooseUsCard;

