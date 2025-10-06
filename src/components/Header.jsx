import React from 'react';
import Resturant from '../assets/Backgrounds/Resturant-pica.png';

const CulinaryHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${Resturant})`,
      }}
    >
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-24 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Culinary Excellence <br />
          <span className="text-orange-500">Awaits You</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg">
          Experience our chef's masterpieces across diverse cuisines. From
          signature specialties to comfort classics, every dish tells a story of
          passion and perfection.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
            View Our Menu
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300">
            Make Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CulinaryHero;