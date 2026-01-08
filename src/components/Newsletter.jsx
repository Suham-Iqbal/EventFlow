import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-card">
                <div className="newsletter-content">
                    <h3>Stay in the Loop</h3>
                    <p>Get the latest events delivered straight to your inbox</p>
                </div>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="newsletter-input"
                    />
                    <button type="submit" className="btn-subscribe">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
