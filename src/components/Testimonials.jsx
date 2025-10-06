import React, { useState } from 'react';
import Client1 from "../assets/Backgrounds/logo.jpg";

const testimonials = [
  {
    rating: 4,
    quote:
      'FoodieHub has completely transformed how I discover new restaurants. The quality of food and delivery speed is absolutely amazing!',
    name: 'Sarah Johnson',
    title: 'Food Blogger',
    avatar: Client1,
  },
  {
    rating: 5,
    quote:
      'The best food delivery service I have ever used. The app is intuitive and the customer support is top-notch.',
    name: 'Michael Davis',
    title: 'Software Engineer',
    avatar: Client1,
  },
  {
    rating: 5,
    quote:
      'I love the variety of restaurants and cuisines available. It is so easy to find something new and delicious to try every time.',
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
    <div className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
        <p className="mt-2 text-gray-400">
          Join thousands of satisfied customers who love our food delivery service
        </p>
        <div className="relative mt-10 bg-white p-8 rounded-xl shadow-lg text-gray-800">
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="h-6 w-6 text-yellow-400 fill-current"
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
          <p className="italic text-lg md:text-xl leading-relaxed">"{testimonial.quote}"</p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src={testimonial.avatar}
              alt={testimonial.name}
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors duration-300"
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
            className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors duration-300"
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