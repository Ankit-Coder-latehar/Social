
import React from 'react';
import VisionCard from '../Vision/Vision';
import './VisionSection.css'; 

const VisionSection = () => {
    const visions = [
        {
            title: 'Innovation',
            description:
                'We aim to innovate by constantly exploring new ideas and technologies.',
            imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Global Impact',
            description:
                'We strive to make a positive global impact through our products and services.',
            imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            title: 'Sustainability',
            description:
                'We are committed to sustainable practices and reducing our environmental footprint.',
            imageUrl: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1737&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        },
    ];

    return (
        <section id="vision" className="vision-section py-5">
            <div className="container">
                <h2 className="section-title text-center mb-5">Our Vision</h2>
                <div className="card-deck">
                    {visions.map((vision, index) => (
                        <VisionCard
                            key={index}
                            title={vision.title}
                            description={vision.description}
                            imageUrl={vision.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
