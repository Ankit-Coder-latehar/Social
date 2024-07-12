
import React from 'react';
import './OurServices.css'; 

const servicesData = [
    {
        title: 'Web Development',
        description: 'We build responsive and high-quality web applications.',
        features: ['Responsive Design', 'High Performance', 'SEO Friendly'],
        icon: '🌐'
    },
    {
        title: 'Mobile Development',
        description: 'Developing seamless mobile applications for iOS and Android.',
        features: ['Cross-Platform', 'User Friendly', 'High Performance'],
        icon: '📱'
    },
    {
        title: 'UI/UX Design',
        description: 'Creating visually appealing and user-friendly designs.',
        features: ['User Research', 'Wireframing', 'Prototyping'],
        icon: '🎨'
    },
    {
        title: 'Digital Marketing',
        description: 'Boost your online presence with our marketing strategies.',
        features: ['SEO', 'Social Media Marketing', 'Content Marketing'],
        icon: '📈'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Building robust e-commerce platforms for your business.',
        features: ['Custom Development', 'Payment Gateway Integration', 'Scalable Solutions'],
        icon: '🛒'
    },
    {
        title: 'Cloud Services',
        description: 'Offering cloud solutions for storage, computing, and more.',
        features: ['Cloud Storage', 'Server Management', 'Scalability'],
        icon: '☁️'
    },
    {
        title: 'IT Consulting',
        description: 'Expert advice to help you navigate complex IT challenges.',
        features: ['Strategic Planning', 'Technology Assessment', 'Implementation Support'],
        icon: '💡'
    },
    {
        title: 'Blockchain Development',
        description: 'Innovative blockchain solutions to drive your business forward.',
        features: ['Smart Contracts', 'Decentralized Apps', 'Blockchain Consulting'],
        icon: '⛓️'
    },
    {
        title: 'Artificial Intelligence',
        description: 'AI solutions to automate and enhance your business processes.',
        features: ['Machine Learning', 'Natural Language Processing', 'AI Consulting'],
        icon: '🤖'
    }
];

const OurServices = () => {
    return (
        <div className="services-section">
             <video className="background-video" autoPlay loop muted>
                <source src={`${process.env.PUBLIC_URL}/4912684-hd_1920_1080_24fps.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2 className="services-title">Our Services</h2>
            <h6>Retaining customer base is important for any enterprise, it takes great effort to make good customer relationship and minute error can ruin it. Owing to our outstanding customer service we have maintained the 85 % customer retention rate. We, the best IT service provider company in Noida help your business in getting loyalty back by transforming into latest advanced IT technology. Our BA, Designing, Developing, Support and Consultant team are always at your service to assist you in consultant, implementation, integration and support. We are the trustful answer for enterprises that are inclining towards digital era. Digitizing your work help in overall 25 % reduction in the core capital of the company and hence better ROI.</h6>
            <div className="services-cards">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
