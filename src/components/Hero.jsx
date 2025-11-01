import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 sm:py-48" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">Your Adventure Awaits</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Discover breathtaking destinations and create unforgettable memories with our curated travel experiences.
        </p>
        <a 
          href="#tours" 
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 inline-block animate-fade-in-up" 
          style={{ animationDelay: '1s' }}
        >
          Explore Tours
        </a>
      </div>
    </section>
  );
};

export default Hero;