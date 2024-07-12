import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Work.css';

function Work() {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.from(cardsRef.current, {
            opacity: 10,
            y: 50,
            duration: 1,
            repeat:-1,
            yoyo: true,
            stagger: 0.6,
            ease: "power3.out",
        });
        gsap.to(".services h2" ,{
            opacity :1,
            y:-60,
            duartion : 4, 
            delay: 2,
            repeat: -1,
            yoyo: true,
        });
      
    }, []);

    return (
        <div className="services">
            <h2>Our Services</h2>
            <p>We offer a wide range of digital marketing services <br/>to help your business thrive in the online world.<br/> Our team of experts is dedicated to delivering top-notch services<br/> tailored to meet your specific needs.</p>
            <div className="card-container">
                <div className="cards" ref={el => cardsRef.current[0] = el}>
                    <img src="https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="SEO Optimization" />
                    <h3>SEO Optimization</h3>
                    <ul>
                        <li>Keyword Research</li>
                        <li>On-page SEO</li>
                        <li>Off-page SEO</li>
                        <li>Technical SEO</li>
                    </ul>
                </div>
                <div className="cards" ref={el => cardsRef.current[1] = el}>
                    <img src="https://images.unsplash.com/photo-1675516490928-e8fdfdf65ca8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Social Media Management" />
                    <h3>Social Media Management</h3>
                    <ul>
                        <li>Profile Setup</li>
                        <li>Content Creation</li>
                        <li>Engagement Strategies</li>
                        <li>Analytics & Reporting</li>
                    </ul>
                </div>
                <div className="cards" ref={el => cardsRef.current[2] = el}>
                    <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Content Marketing" />
                    <h3>Content Marketing</h3>
                    <ul>
                        <li>Blog Writing</li>
                        <li>Video Production</li>
                        <li>Infographics</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
                <div className="cards" ref={el => cardsRef.current[3] = el}>
                    <img src="https://images.unsplash.com/photo-1574333751907-d1df49fde1c3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Email Marketing" />
                    <h3>Email Marketing</h3>
                    <ul>
                        <li>Campaign Strategy</li>
                        <li>Email Design</li>
                        <li>List Management</li>
                        <li>Performance Tracking</li>
                    </ul>
                </div>
                <div className="cards" ref={el => cardsRef.current[4] = el}>
                    <img src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="PPC Advertising" />
                    <h3>PPC Advertising</h3>
                    <ul>
                        <li>Google Ads</li>
                        <li>Social Media Ads</li>
                        <li>Retargeting</li>
                        <li>Conversion Tracking</li>
                    </ul>
                </div>
                <div className="cards" ref={el => cardsRef.current[4] = el}>
                    <img src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="PPC Advertising" />
                    <h3>PPC Advertising</h3>
                    <ul>
                        <li>Google Ads</li>
                        <li>Social Media Ads</li>
                        <li>Retargeting</li>
                        <li>Conversion Tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Work;