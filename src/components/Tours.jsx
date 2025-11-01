import React from 'react';

const tours = [
  {
    title: "European Capitals",
    duration: "10 Days",
    price: "\$2,500",
    features: ["Visit Paris, Rome, & London", "Guided historical tours", "4-star hotel stays", "Daily breakfast included"],
    image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1694&auto=format&fit=crop"
  },
  {
    title: "Southeast Asia Adventure",
    duration: "14 Days",
    price: "\$3,200",
    features: ["Explore Thailand, Vietnam, & Cambodia", "Jungle trekking & island hopping", "Authentic local cuisine", "All internal flights included"],
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1770&auto=format&fit=crop"
  },
  {
    title: "Machu Picchu Trek",
    duration: "7 Days",
    price: "\$1,800",
    features: ["Classic Inca Trail hike", "Guided tour of Machu Picchu", "Camping equipment provided", "Experienced local guides"],
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1674&auto=format&fit=crop"
  }
];

const TourCard = ({ title, duration, price, features, image }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
        <img src={image} alt={title} className="w-full h-56 object-cover"/>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div className="flex items-center text-gray-600 mb-4">
                <span className="mr-4">{duration}</span>
                <span className="font-bold text-xl text-blue-600">{price}</span>
            </div>
            <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <a href="#contact" className="mt-auto w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Book Now
            </a>
        </div>
    </div>
);


const Tours = () => {
  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;