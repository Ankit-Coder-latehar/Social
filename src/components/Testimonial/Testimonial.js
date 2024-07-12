import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1643490742331-b51a113bdf4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'John Doe',
            rating: 5,
            text: 'This agency has helped us grow our business tremendously. Their expertise in SEO and content marketing is top-notch!',
        },
        {
            image: 'https://images.unsplash.com/photo-1643490742331-b51a113bdf4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Jane Smith',
            rating: 4,
            text: 'The social media management services provided by this team are exceptional. Our engagement rates have skyrocketed!',
        },
        {
            image: 'https://images.unsplash.com/photo-1643490742331-b51a113bdf4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Mike Johnson',
            rating: 5,
            text: 'I highly recommend their email marketing services. We have seen a significant increase in our open and click-through rates.',
        },
    ];

    return (
        <div className="testimonials">
            <h2>What Our Clients Say</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <div className="rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} role="img" aria-label="star">&#9733;</span>
                            ))}
                        </div>
                        <p>{testimonial.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;