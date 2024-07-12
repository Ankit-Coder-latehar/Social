import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>
                        We are a digital marketing agency committed to delivering top-notch services
                        to help your business grow. Our team of experts is dedicated to providing
                        innovative solutions to meet your needs.
                    </p>
                </div>
                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Pay-Per-Click (PPC) Advertising</li>
                        <li>Social Media Marketing</li>
                        <li>Content Marketing</li>
                        <li>Email Marketing</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

