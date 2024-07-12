import React from 'react';
import './Description.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Description() {
    useGSAP(()=>{
        gsap.from(".card" , {
            scale:1.12,
            opacity: 0,
            y:80,
            duration:2,
            delay:1,
            repeat:-1,
            yoyo: true,
        })

        gsap.to(".card1" , {
            opacity: 1,
            y:80,
            duration:2,
            delay:1,
            repeat:-1,
            yoyo:true,
        })
        gsap.from(".card2" , {
            opacity: 0,
            y:80,
            duration:2,
            delay:1,
            repeat:-1,
            yoyo: true,
        })
        gsap.from(".about h2" , {
            opacity: 0,
            y: 50,
            duration:2,
            delay:1,
        })
        gsap.from(".about p" , {
            opacity: 0,
            x: 50,
            duration:2,
            delay:1,
        })
    })
    return (
        <div className="about">
            <h2>About Us</h2>
            <p>We are a team of experienced digital marketers <br/>dedicated to helping businesses grow online.<br/> Our services include SEO optimization, <br/>social media management, content marketing, email marketing,<br/> and PPC advertising.</p>
            <div className="card-container">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1" />
                    <h3>John Doe</h3>
                    <p>SEO Specialist</p>
                </div>
                <div className="card1">
                    <img src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 2" />
                    <h3>Jane Smith</h3>
                    <p>Social Media Manager</p>
                </div>
                <div className="card2">
                    <img src="https://images.unsplash.com/photo-1554902748-feaf536fc594?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 3" />
                    <h3>Mike Johnson</h3>
                    <p>Content Strategist</p>
                </div>
            </div>
        </div>
    );
}

export default Description;
