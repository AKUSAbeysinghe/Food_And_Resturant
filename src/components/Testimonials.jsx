import React, { useState } from 'react';
import Client1 from "../assets/Backgrounds/logo.jpg";
import Testimge from "../assets/Backgrounds/testi.jpg";

const testimonials = [
  {
    rating: 4,
    quote:
      'Maison Ember has completely transformed how I discover new dishes. The quality of food and service is absolutely amazing!',
    name: 'Sarah Johnson',
    title: 'Food Blogger',
    avatar: Client1,
  },
  {
    rating: 5,
    quote:
      'The best dining experience I have ever had. The menu is exquisite, and the ambiance is top-notch.',
    name: 'Michael Davis',
    title: 'Software Engineer',
    avatar: Client1,
  },
  {
    rating: 5,
    quote:
      'I love the variety of cuisines available at Maison Ember. It is so easy to find something new and delicious to try every time.',
    name: 'Emily Chen',
    title: 'Graphic Designer',
    avatar: Client1,
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="relative bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Testimge})`,
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      ></div>
      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-[#fcf8f3] opacity-80 z-10"></div>
      <div className="relative max-w-4xl mx-auto text-center z-20">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-gray-600 font-sans">
          Join thousands of satisfied customers who love our dining experience
        </p>
        <div className="relative mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="h-6 w-6 text-[#E55D3A] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            {[...Array(5 - testimonial.rating)].map((_, i) => (
              <svg
                key={i + testimonial.rating}
                className="h-6 w-6 text-gray-300 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="italic text-lg md:text-xl leading-relaxed text-gray-800 font-sans">"{testimonial.quote}"</p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src={testimonial.avatar}
              alt={testimonial.name}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150?text=No+Image";
                console.error(`Failed to load image: ${testimonial.avatar}`);
              }}
            />
            <div>
              <p className="font-semibold text-gray-800 font-sans">{testimonial.name}</p>
              <p className="text-sm text-gray-600 font-sans">{testimonial.title}</p>
            </div>
          </div>
          {/* Contact Us Button */}
          {/* <a
            href="https://wa.me/+1234567890?text=Hi%20Maison%20Ember,%20I%20love%20your%20service!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-[#E55D3A] text-white font-medium rounded-md shadow-md hover:bg-[#c94b2f] transition-colors font-sans"
          >
            Contact Us
          </a> */}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-[#E55D3A] hover:bg-[#c94b2f] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-[#E55D3A] hover:bg-[#c94b2f] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;