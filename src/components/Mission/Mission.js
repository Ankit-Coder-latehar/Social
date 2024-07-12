
import React from 'react';
import './Mission.css'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MissionCard = ({ title, description, imageUrl }) => {
    useGSAP(()=>{
        gsap.from(".mission-card" , {
            opacity: 4,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".mission-card",
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            },
        })
    })
    return (
        <div className="mission-card">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default MissionCard;

