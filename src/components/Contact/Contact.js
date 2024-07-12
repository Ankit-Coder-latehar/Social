
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_8q0pmeo',
      'template_k0yhq0s',
      e.target,
      'rPTUj4nOHNlBsvy5w'  
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });

        e.target.reset();
    };

    return (
        <div className='contact'>
            <div className="contact-form-container">
                <video autoPlay loop muted className="background-video">
                    <source src={`${process.env.PUBLIC_URL}/8516632-uhd_2160_3840_30fps.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user" alt="Contact Illustration" className="contact-illustration" />
                <div className="contact-form-content">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
