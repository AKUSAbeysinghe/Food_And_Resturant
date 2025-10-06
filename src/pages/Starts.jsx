import React, { useState } from 'react';
import StarterBanner from "../assets/foods/Starts.jpg"; // Reuse DiningBanner; replace with actual starter image
import Soup1 from "../assets/starts/soup1.jpg"; // Placeholder, replace with actual images
import Soup2 from "../assets/starts/soup2.jpg"; // Placeholder, replace with actual images
import Soup3 from "../assets/starts/soup3.jpg"; // Placeholder, replace with actual images


import appt1 from "../assets/starts/app1.jpg"; // Placeholder, replace with actual images
import appt2 from "../assets/starts/app2.jpg"; // Placeholder, replace with actual images
import salad1 from "../assets/starts/salad1.jpg"; // Placeholder, replace with actual images
import salad2 from "../assets/starts/salad2.jpg"; // Placeholder, replace with actual images




const starterItems = [
  {
    image: appt1,
    name: 'Spring Rolls',
    price: 6.99,
    popular: true,
    description: 'Crispy vegetable spring rolls served with sweet chili dipping sauce',
    chef: 'Chef Sophie Laurent',
  },
  {
    image: appt2,
    name: 'Bruschetta',
    price: 5.99,
    popular: false,
    description: 'Toasted bread topped with fresh tomatoes, basil, and balsamic glaze',
    chef: 'Chef Sophie Laurent',
  },
];

const soupItems = [
  {
    image: Soup1,
    name: 'Tomato Basil Soup',
    price: 7.49,
    popular: true,
    description: 'Rich tomato soup with fresh basil and a touch of cream',
    chef: 'Chef Isabella Chen',
  },
  {
    image: Soup2,
    name: 'French Onion Soup',
    price: 7.99,
    popular: false,
    description: 'Caramelized onions in a savory broth topped with croutons and melted cheese',
    chef: 'Chef Isabella Chen',
  },
  {
    image: Soup3,
    name: 'Miso Soup',
    price: 6.49,
    popular: true,
    description: 'Traditional Japanese miso soup with tofu, seaweed, and scallions',
    chef: 'Chef Maria Santos',
  },
];

const saladItems = [
  {
    image: salad1,
    name: 'Caesar Salad',
    price: 8.99,
    popular: true,
    description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan',
    chef: 'Chef Antonio Rivera',
  },
  {
    image: salad2,
    name: 'Greek Salad',
    price: 7.99,
    popular: false,
    description: 'Fresh cucumbers, tomatoes, feta cheese, olives, and red onions with Greek dressing',
    chef: 'Chef Antonio Rivera',
  },
];

const beveragesItems = [
  {
    image: salad1,
    name: 'Iced Coffee',
    price: 4.99,
    popular: true,
    description: 'Chilled coffee with a hint of vanilla and cream',
    chef: 'Chef Isabella Chen',
  },
  {
    image: salad2,
    name: 'Lemonade',
    price: 3.99,
    popular: false,
    description: 'Freshly squeezed lemonade with a touch of mint',
    chef: 'Chef Isabella Chen',
  },
];

const menuCategories = [
  {
    image: 'https://via.placeholder.com/300', // Replace with actual starter category image
    category: 'Starters',
    description: 'Kick off your meal with our flavorful selection of appetizers, soups, and salads',
    dishes: 7, // Appetizers (2), Soups (3), Salads (2)
    priceRange: '$5.99 - $8.99',
  },
];

const services = [
  {
    title: 'Fresh Ingredients',
    description: 'Starters made with the freshest, high-quality ingredients',
    icon: '⚡',
  },
  {
    title: 'Variety of Flavors',
    description: 'From savory bites to refreshing salads, something for every palate',
    icon: '💰',
  },
  {
    title: 'Perfect Start',
    description: 'Ideal to whet your appetite for any dining occasion',
    icon: '🛡️',
  },
  {
    title: 'Quick Service',
    description: 'Fast preparation to start your meal without delay',
    icon: '📱',
  },
];

const StartersHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${StarterBanner || 'https://via.placeholder.com/1700x400'})`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-poppins">
          Starters <br />
          <span className="text-green-500">Savor the Start</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg font-poppins">
          Kick off your meal with our delicious selection of appetizers, soups, and salads, crafted to awaken your taste buds.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300 font-poppins">
            Browse Starters
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
        {item.popular && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Popular
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
          ${item.price.toFixed(2)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 font-poppins">{item.name}</h3>
        <p className="mt-2 text-gray-600 text-sm font-poppins">{item.description}</p>
        <p className="mt-4 text-xs text-gray-500 font-poppins">{item.chef}</p>
        <a
          href="https://wa.me/+YOUR_PHONE_NUMBER?text=Hi%20FoodHub,%20I'd%20like%20to%20order%20a%20starter!" // Replace with actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300 font-poppins block text-center"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

const TabbedMenu = () => {
  const [activeTab, setActiveTab] = useState('Starters');

  const tabs = [
    { name: 'Starters', items: [...starterItems, ...soupItems, ...saladItems] }, // Combine all starter items
    { name: 'Beverages', items: beveragesItems },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Starters Menu</h2>
        <p className="mt-2 text-gray-600 font-poppins">Discover our flavorful selection of starters to begin your dining experience</p>
      </div>
      <div className="flex justify-center mb-8 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-4 text-lg font-semibold transition duration-300 font-poppins ${
              activeTab === tab.name ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600 hover:text-green-500'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 font-poppins">{activeTab}</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tabs.find((tab) => tab.name === activeTab).items.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Appetizers = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Appetizers</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {starterItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Soups = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Soups</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {soupItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Salads = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Salads</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {saladItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const MenuSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Our Starter Categories</h2>
        <p className="mt-2 text-gray-600 font-poppins">
          Discover our flavorful selection of starters to begin your dining experience
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuCategories.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.category} className="w-full h-64 object-cover" />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {item.dishes} dishes
              </div>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm font-semibold px-2 py-1 rounded-full">
                {item.priceRange}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 font-poppins">{item.category}</h3>
              <p className="mt-2 text-gray-600 font-poppins">{item.description}</p>
              <a
                href="/casual-dining/starters"
                className="mt-4 inline-flex items-center text-orange-500 hover:text-orange-600 transition duration-300 font-poppins"
              >
                View Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyChooseStarters = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Why Choose Our Starters?</h2>
        <p className="mt-2 text-gray-600 font-poppins">
          Kick off your meal with our expertly crafted starters, designed to excite your palate
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 text-3xl">
                {service.icon === '⚡' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {service.icon === '💰' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                    />
                  </svg>
                )}
                {service.icon === '🛡️' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.023 12.023 0 002.5 9.5c0 4.17 2.76 7.625 6.5 9.176V21h3v-2.324c3.74-1.551 6.5-5.006 6.5-9.176a12.023 12.023 0 00-2.5-4.476z"
                    />
                  </svg>
                )}
                {service.icon === '📱' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 font-poppins">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-center font-poppins">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-md bg-green-50">
        <h2 className="text-3xl font-bold text-gray-800 font-poppins">Craving a Perfect Start?</h2>
        <p className="mt-4 text-gray-600 font-poppins">
          Order from our starter collection and kick off your meal with delicious appetizers!
        </p>
        <a
          href="https://wa.me/+YOUR_PHONE_NUMBER?text=Hi%20FoodHub,%20I'd%20like%20to%20order%20a%20starter!" // Replace with actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 font-poppins inline-block"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

const Starters = () => {
  return (
    <div>
      <StartersHero />
      <Appetizers />
      <Soups />
      <Salads />
      {/* <TabbedMenu /> */}
      <WhyChooseStarters />
      <CallToAction />
      <style jsx>{`
        html, body {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Starters;