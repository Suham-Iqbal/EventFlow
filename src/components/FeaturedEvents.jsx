import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import EventCard from './EventCard';
import eventsData from '../data/events.json';

const categories = ['All', 'Tech', 'Wedding', 'Birthday', 'Festival', 'Community'];

const FeaturedEvents = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setEvents(eventsData);
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section id="events" className="events-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Sparkles size={14} />
                        Curated For You
                    </span>
                    <h2 className="section-title">
                        Featured <span>Events</span>
                    </h2>
                    <p className="section-subtitle">
                        Handpicked experiences waiting for you. From tech talks to celebrations,
                        find your next adventure.
                    </p>
                </div>

                <div className="filter-bar">
                    <div className="search-wrapper">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Search events by name..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Loading events...</p>
                    </div>
                ) : (
                    <div className="events-grid">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No events found matching your criteria</p>
                            </div>
                        )}
                    </div>
                )}

                <div className="view-all-wrapper">
                    <button className="btn-view-all">
                        View All Events <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
