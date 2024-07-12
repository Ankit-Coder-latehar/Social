
import React, { useState } from 'react';
import './Faq.css';

const faqsData = [
    {
        question: 'What web development services do you offer?',
        answer: 'We offer responsive design, high performance, and SEO-friendly web development services.'
    },
    {
        question: 'Do you provide mobile app development?',
        answer: 'Yes, we develop seamless mobile applications for both iOS and Android platforms.'
    },
    {
        question: 'What is included in your UI/UX design services?',
        answer: 'Our UI/UX design services include user research, wireframing, and prototyping.'
    },
    {
        question: 'How can your digital marketing services help my business?',
        answer: 'Our digital marketing services include SEO, social media marketing, and content marketing to boost your online presence.'
    },
    {
        question: 'What e-commerce solutions do you offer?',
        answer: 'We offer custom development, payment gateway integration, and scalable solutions for e-commerce platforms.'
    },
   
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faqs-section">
            <h2 className="faqs-title">Frequently Asked Questions</h2>
            <div className="faqs-cards">
                {faqsData.map((faq, index) => (
                    <div className="faq-card" key={index} onClick={() => toggleFAQ(index)}>
                        <div className="faq-header">
                            <h3 className="faq-question">{faq.question}</h3>
                            <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                        </div>
                        {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
