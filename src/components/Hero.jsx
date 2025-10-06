import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        {/* Left Content Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Our Story of <br />
            <span className="text-orange-500">Culinary Excellence</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Founded with a passion for exceptional dining experiences, FoodHub has been serving delicious, high-quality meals for over two decades. Our journey began with a simple mission: to bring people together through the love of great food.
          </p>
          <p className="mt-4 text-gray-600">
            From our humble beginnings as a small family restaurant to becoming a premier food destination, we've never compromised on quality, freshness, or the authentic flavors that make every meal memorable.
          </p>
          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-2 gap-y-8 gap-x-4 text-center">
            <div>
              <p className="text-3xl font-bold text-orange-500">50+</p>
              <p className="text-gray-500">Expert Chefs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">10k+</p>
              <p className="text-gray-500">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">25+</p>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">15+</p>
              <p className="text-gray-500">Awards Won</p>
            </div>
          </div>
        </div>
        {/* Right Image Column */}
        <div className="lg:w-1/2">
          <img
            src="https://i.imgur.com/4f8c32.jpg"
            alt="A chef preparing food in a kitchen"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;