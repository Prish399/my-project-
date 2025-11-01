import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">Ghumna</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#destinations" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Destinations</a>
            <a href="#tours" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Tours</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">Contact Us</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="#destinations" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">Destinations</a>
            <a href="#tours" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">Tours</a>
            <a href="#testimonials" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">About</a>
            <a href="#contact" className="block mt-2 py-2 px-4 text-sm bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition-all duration-300">Contact Us</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;