import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Tours />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;