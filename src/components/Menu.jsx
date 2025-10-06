import React from 'react';
import { Link } from 'react-router-dom';
import FastFood from "../assets/Foods/Food1.jpg";
import CasualDining from "../assets/Foods/Spagati.jpg";
import Cafe from "../assets/Foods/Bakery.jpg";

const menuCategories = [
  {
    image: FastFood,
    category: 'Fast Food Classics',
    description: 'Comfort food favorites and quick bites',
    dishes: 15,
    priceRange: '$8 - $18',
    path: '/fast-food',
  },
  {
    image: CasualDining,
    category: 'Casual Dining',
    description: 'Hearty meals perfect for family gatherings',
    dishes: 24,
    priceRange: '$15 - $32',
    path: '/casual-dining',
  },
  {
    image: Cafe,
    category: 'Café & Bakery',
    description: 'Artisan coffee, pastries and light meals',
    dishes: 18,
    priceRange: '$4 - $16',
    path: '/cafes-bakeries',
  },
];

const MenuSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-josefin tracking-wide">Our Menu Categories</h2>
        <p className="mt-2 text-gray-600 text-lg font-lora leading-relaxed">
          Explore our diverse selection of carefully crafted dishes across different dining styles
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuCategories.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-lora font-semibold px-2 py-1 rounded-full">
                {item.dishes} dishes
              </div>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm font-lora font-semibold px-2 py-1 rounded-full">
                {item.priceRange}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 font-josefin tracking-wide">{item.category}</h3>
              <p className="mt-2 text-gray-600 text-lg font-lora leading-relaxed">{item.description}</p>
              <Link
                to={item.path}
                className="mt-4 inline-flex items-center text-orange-500 hover:text-orange-600 text-base font-lora transition duration-300"
              >
                View Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;