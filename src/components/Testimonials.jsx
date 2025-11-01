import React from 'react';

const testimonials = [
  {
    quote: "The best travel experience I've ever had! Wanderlust handled everything perfectly, from flights to accommodations. Highly recommended!",
    author: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "Our family trip to Japan was a dream come true. The itinerary was well-planned, and our guide was incredibly knowledgeable. Thank you, Wanderlust!",
    author: "David Chen",
    location: "Toronto, Canada",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote: "I went on the Southeast Asia adventure, and it was life-changing. I met amazing people and saw incredible places. I can't wait for my next trip with them.",
    author: "Emily Rodriguez",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const TestimonialCard = ({ quote, author, location, avatar }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
    <img src={avatar} alt={author} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-200" />
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <h4 className="font-bold text-lg">{author}</h4>
    <p className="text-sm text-gray-500">{location}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;