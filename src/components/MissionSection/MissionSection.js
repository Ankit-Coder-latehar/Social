
import React from 'react';
import MissionCard from '../Mission/Mission';
import './MissionSection.css'; 

const MissionSection = () => {
    const missions = [
        {
            title: 'Customer Satisfaction',
            description:
                'We prioritize customer satisfaction by delivering high-quality products and exceptional service.',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        },
        {
            title: 'Innovation',
            description:
                'We foster innovation by continually seeking new ideas and technologies to improve our solutions.',
            imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        },
        {
            title: 'Community Impact',
            description:
                'We are committed to making a positive impact in our community through sustainable practices and social responsibility.',
            imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <section id="mission" className="mission-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">Our Mission</h2>
                <div className="card-deck">
                    {missions.map((mission, index) => (
                        <MissionCard
                            key={index}
                            title={mission.title}
                            description={mission.description}
                            imageUrl={mission.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
