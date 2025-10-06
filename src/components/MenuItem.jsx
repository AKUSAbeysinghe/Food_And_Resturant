import React from 'react';
import Chefspecialone from "../assets/Foods/ChefsSpecial1.jpg";
import Chefspecialtwo from "../assets/Foods/ChefsSpecial2.jpg";
import Chefspecialthree from "../assets/Foods/SpecialIcecream.jpg";
import Chefspecialfour from "../assets/Foods/SpecialCake.jpg";

const signatureSpecials = [
  {
    image: Chefspecialone,
    name: 'Truffle Ribeye Steak',
    price: 48,
    description:
      'Premium 16oz ribeye with black truffle sauce, roasted vegetables, and garlic mashed potatoes.',
    chef: 'Executive Chef Marcus Rodriguez',
  },
  {
    image: Chefspecialtwo,
    name: 'Lobster Risotto',
    price: 36,
    description:
      'Creamy arborio rice with fresh Maine lobster, saffron, and microgreens.',
    chef: 'Sous Chef Isabella Chen',
  },
  {
    image: Chefspecialthree,
    name: 'Truffle Ribeye Steak',
    price: 48,
    description:
      'Premium 16oz ribeye with black truffle sauce, roasted vegetables, and garlic mashed potatoes.',
    chef: 'Executive Chef Marcus Rodriguez',
  },
  {
    image: Chefspecialfour,
    name: 'Lobster Risotto',
    price: 36,
    description:
      'Creamy arborio rice with fresh Maine lobster, saffron, and microgreens.',
    chef: 'Sous Chef Isabella Chen',
  },
];

const ChefSpecials = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Chef's Signature Specialties</h2>
        <p className="mt-2 text-gray-600">
          Masterfully crafted dishes that showcase our culinary team's expertise and creativity
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {signatureSpecials.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Chef's Special
              </span>
              <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
                ${item.price}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              <p className="mt-4 text-xs text-gray-500">{item.chef}</p>
              <button className="mt-6 w-full py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSpecials;