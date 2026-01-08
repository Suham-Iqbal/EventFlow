import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <div className="logo-icon-wrapper">
                                <Sparkles className="logo-icon" size={20} />
                            </div>
                            <span>EventFlow</span>
                        </a>
                        <p>
                            Connecting people through unforgettable experiences.
                            Discover, celebrate, and create memories.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Instagram size={18} /></a>
                            <a href="#" className="social-link"><Twitter size={18} /></a>
                            <a href="#" className="social-link"><Facebook size={18} /></a>
                            <a href="#" className="social-link"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact</h4>
                        <div className="contact-item">
                            <Mail size={16} />
                            <span>hello@eventflow.com</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={16} />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={16} />
                            <span>123 Event Street, San Francisco, CA 94102</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 EventFlow. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
