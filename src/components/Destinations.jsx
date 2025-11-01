import React from 'react';

const destinations = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=1770&auto=format&fit=crop",
    description: "The city of love, art, and fashion. Explore iconic landmarks and charming streets."
  },
  {
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1770&auto=format&fit=crop",
    description: "Experience ancient temples, beautiful gardens, and traditional geishas."
  },
  {
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-52b9be4ac20c?q=80&w=1770&auto=format&fit=crop",
    description: "Famous for its stunning sunsets, white-washed villages, and blue-domed churches."
  },
];

const DestinationCard = ({ name, image, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={name} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;