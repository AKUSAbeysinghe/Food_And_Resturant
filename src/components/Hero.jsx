import React from 'react';
import Main from "../assets/Backgrounds/mainn.jpg";

const RestaurantHero = () => {
  return (
    <div className="relative h-screen sm:h-[85vh] md:h-screen bg-gray-900 overflow-hidden">
      {/* Background Image / Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Main})`,
          filter: 'blur(8px) brightness(0.6)',
          transform: 'scale(1.05)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Area - RESPONSIVE */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-white">
        
        {/* Tags/Badges - RESPONSIVE */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
          <span className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-white/50 rounded-full backdrop-blur-sm bg-white/10 text-white cursor-pointer hover:bg-white/20 transition-colors">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.536a.5.5 0 01-.177.587l-4.5 4.5a.5.5 0 01-.708 0L6.536 10.536a.5.5 0 010-.707l4.5-4.5a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .707zM12 21a9 9 0 100-18 9 9 0 000 18z"></path>
            </svg>
            Chef's Counter Experience
          </span>
          <span className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border border-white/50 rounded-full backdrop-blur-sm bg-white/10 text-white cursor-pointer hover:bg-white/20 transition-colors">
            Seasonal Tasting - Winter 2025
          </span>
        </div>

        {/* Main Title - RESPONSIVE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-4 sm:mb-6 md:mb-8" style={{ fontWeight: 400 }}>
          Wood-fired cuisine, curated stories, and intimate hospitality.
        </h1>

        {/* Description - RESPONSIVE */}
        <p className="max-w-sm sm:max-w-md md:max-w-xl text-base sm:text-lg md:text-lg font-light mb-6 sm:mb-8 md:mb-10 text-gray-200 leading-relaxed">
          Maison Ember is a contemporary dining room where flame meets finesse. Chef Camille Rousseau crafts immersive multi-course experiences inspired by hearth cooking and Pacific Northwest terroir.
        </p>

        {/* Buttons - RESPONSIVE */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-[#E55D3A] text-white text-sm sm:text-base font-medium rounded-md shadow-lg hover:bg-[#c94b2f] transition-colors w-full sm:w-auto">
            Explore Seasonal Menu
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12h-11m6.5-5l5 5-5 5"></path>
            </svg>
          </button>
          <button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-white text-sm sm:text-base font-medium rounded-md border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors w-full sm:w-auto text-center">
            Reserve a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHero;