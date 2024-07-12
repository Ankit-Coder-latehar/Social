import React from 'react';
import Slider from 'react-slick';
import './Partners.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partners() {
   
    const partnerLogos = [
        { id: 1, image: 'https://images.unsplash.com/photo-1616093098223-c32c8144d8ca?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Partner 1' },
        { id: 2, image: 'https://images.unsplash.com/photo-1662947203440-573db428a7ab?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Partner 2' },
        { id: 3, image: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Partner 3' },
        { id: 4, image: 'https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Partner 4' },
        { id: 5, image: 'https://images.unsplash.com/photo-1605152277138-359efd4a6862?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Partner 5' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="partners">
            <h2>Our Partners</h2>
            <Slider {...settings} className="partner-logos">
                {partnerLogos.map(partner => (
                    <div key={partner.id} className="partner-logo">
                        <img src={partner.image} alt={partner.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Partners;

