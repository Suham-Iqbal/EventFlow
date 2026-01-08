import React from 'react';
import { MapPin, Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const EventCard = ({ event }) => {
    return (
        <div className="event-card animate-fade-in">
            <div className="card-image-wrapper">
                <img src={event.image} alt={event.title} className="card-image" loading="lazy" />
                <div className="card-image-overlay"></div>
                <span className="card-category">{event.category}</span>
                <span className={`card-price ${event.price === 'Free' ? 'free' : ''}`}>
                    {event.price}
                </span>
                <div className="card-attendees">
                    <Users size={14} />
                    <span>{event.attendees} attending</span>
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{event.title}</h3>
                <p className="card-description">{event.description}</p>

                <div className="card-meta">
                    <div className="meta-item">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                    </div>
                    <div className="meta-item">
                        <Clock size={14} />
                        <span>{event.time}</span>
                    </div>
                    <div className="meta-item">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                    </div>
                </div>

                <button className="btn-register">
                    Register Now <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default EventCard;
