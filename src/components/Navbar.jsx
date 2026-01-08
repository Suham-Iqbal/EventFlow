import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    <div className="logo-icon-wrapper">
                        <Sparkles className="logo-icon" size={20} />
                    </div>
                    <span>EventFlow</span>
                </a>

                <div className="nav-links desktop-menu">
                    <a href="#home" className="nav-link active">Home</a>
                    <a href="#events" className="nav-link">Events</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <button className="btn-get-started">Get Started</button>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                    <div className="mobile-menu animate-fade-in">
                        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#events" onClick={() => setIsOpen(false)}>Events</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
