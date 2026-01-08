import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <FeaturedEvents />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}

export default App;
