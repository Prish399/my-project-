import React from 'react';

const Cta = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519677100203-a0e668c97d45?q=80&w=1771&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Let us help you plan the perfect trip. Contact our travel experts today and start your journey.</p>
        <a 
          href="#contact" 
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 inline-block"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Cta;