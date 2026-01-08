import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <img
                    src="/images/Gathering Event/WhatsApp Image 2026-01-08 at 9.55.12 PM (2).jpeg"
                    alt="Event background"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    <span>Discover Amazing Events Near You</span>
                </div>

                <h1 className="hero-title">
                    Discover Events<br />
                    <span className="hero-title-gradient">Near You</span>
                </h1>

                <p className="hero-subtitle">
                    From intimate gatherings to grand celebrations, find the perfect events
                    that match your vibe. Create memories that last a lifetime.
                </p>

                <div className="hero-search">
                    <div className="search-input-group">
                        <Search size={20} />
                        <input type="text" placeholder="Search events..." />
                    </div>
                    <div className="search-divider"></div>
                    <div className="search-input-group">
                        <MapPin size={20} />
                        <input type="text" placeholder="Location" />
                    </div>
                    <button className="btn-search">
                        Search <ArrowRight size={18} />
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-value">10K+</div>
                        <div className="stat-label">Events</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">50K+</div>
                        <div className="stat-label">Attendees</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">100+</div>
                        <div className="stat-label">Cities</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
