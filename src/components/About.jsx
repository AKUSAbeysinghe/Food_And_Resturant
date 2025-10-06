import React from 'react';
import About from "../assets/Backgrounds/NAbout.jpg";
import Specilities from "../components/Specificationiar.jsx";
import Special from "../components/Specifications.jsx";
import Visionair from "../components/VisionMission.jsx";

const AboutUsSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        {/* Left Content Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight font-playfair">
            <br></br>
            <br></br>
            <br></br>
            Our Story of <br />
            <span className="text-orange-500">Culinary Excellence</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg font-lora">
            Founded with a passion for exceptional dining experiences, FoodHub has been serving delicious, high-quality meals for over two decades. Our journey began with a simple mission: to bring people together through the love of great food.
          </p>
          <p className="mt-4 text-gray-600 text-lg font-lora">
            From our humble beginnings as a small family restaurant to becoming a premier food destination, we've never compromised on quality, freshness, or the authentic flavors that make every meal memorable.
          </p>
          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-2 gap-y-8 gap-x-4 text-center">
            <div>
              <p className="text-4xl font-bold text-orange-500 font-playfair">50+</p>
              <p className="text-gray-500 text-base font-lora">Expert Chefs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 font-playfair">10k+</p>
              <p className="text-gray-500 text-base font-lora">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 font-playfair">25+</p>
              <p className="text-gray-500 text-base font-lora">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 font-playfair">15+</p>
              <p className="text-gray-500 text-base font-lora">Awards Won</p>
            </div>
          </div>
        </div>
        {/* Right Image Column */}
        <div className="lg:w-1/2">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <img
            src={About}
            alt="A chef preparing food in a kitchen"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
   
    <Special/>
    <Specilities/>
    <Visionair />
    </div>
    
    
  );
};

export default AboutUsSection;