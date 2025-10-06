import React from 'react';
import FastFoodBanner from "../assets/FastFoods/Banner.jpg";
import Beefburger from "../assets/Backgrounds/Burger.jpg";
import Sandwitch from "../assets/FastFoods/Sandwitch.jpg";
import ChesseBurger from "../assets/FastFoods/CheeseBurger.jpg";
import PotWings from "../assets/FastFoods/Potwings.jpg";
import Wings from "../assets/FastFoods/Wingis.jpg";
import Fries from "../assets/FastFoods/Fries.jpg";
import Rings from "../assets/FastFoods/Rings.jpg";

const menuItems = [
  {
    image: Beefburger,
    name: 'Classic Beef Burger',
    price: 12.99,
    popular: true,
    description: 'Juicy beef patty, lettuce, tomato, onion, pickles, special sauce',
    chef: 'Chef Mike Thompson',
  },
  {
    image: Sandwitch,
    name: 'Crispy Chicken Sandwich',
    price: 13.99,
    popular: false,
    description: 'Breaded chicken breast, coleslaw, spicy mayo, brioche bun',
    chef: 'Chef Sarah Kim',
  },
  {
    image: ChesseBurger,
    name: 'BBQ Bacon Cheeseburger',
    price: 16.99,
    popular: true,
    description: 'Double beef patty, bacon, cheddar cheese, BBQ sauce, onion rings',
    chef: 'Chef Mike Thompson',
  },
];

const friedChickenItems = [
  {
    image: PotWings,
    name: '8-Piece Family Bucket',
    price: 24.99,
    popular: true,
    description: 'Mixed pieces of our signature crispy fried chicken',
    chef: 'Chef Sarah Kim',
  },
  {
    image: Wings,
    name: 'Spicy Chicken Wings (12pc)',
    price: 15.99,
    popular: false,
    description: 'Buffalo-style wings with your choice of sauce',
    chef: 'Chef Sarah Kim',
  },
];

const sidesItems = [
  {
    image: Fries,
    name: 'Loaded Cheese Fries',
    price: 8.99,
    popular: true,
    description: 'Crispy fries topped with melted cheese, bacon bits, green onions',
    chef: 'Chef Mike Thompson',
  },
  {
    image: Rings,
    name: 'Onion Rings',
    price: 6.99,
    popular: false,
    description: 'Thick-cut onions in crispy golden batter',
    chef: 'Chef Mike Thompson',
  },
];

const menuCategories = [
  {
    image: 'https://i.imgur.com/4f1bf0.jpg',
    category: 'Fast Food Classics',
    description: 'Comfort food favorites and quick bites',
    dishes: 15,
    priceRange: '$8 - $18',
  },
  {
    image: 'https://i.imgur.com/4f1bf0.jpg',
    category: 'Casual Dining',
    description: 'Hearty meals perfect for family gatherings',
    dishes: 24,
    priceRange: '$15 - $32',
  },
  {
    image: 'https://i.imgur.com/4f1bf0.jpg',
    category: 'Café & Bakery',
    description: 'Artisan coffee, pastries and light meals',
    dishes: 18,
    priceRange: '$4 - $16',
  },
];

const signatureSpecials = [
  {
    image: 'https://i.imgur.com/4f7288.jpg',
    name: 'Truffle Ribeye Steak',
    price: 48,
    description: 'Premium 16oz ribeye with black truffle sauce, roasted vegetables, and garlic mashed potatoes.',
    chef: 'Executive Chef Marcus Rodriguez',
  },
  {
    image: 'https://i.imgur.com/4f7288.jpg',
    name: 'Lobster Risotto',
    price: 36,
    description: 'Creamy arborio rice with fresh Maine lobster, saffron, and microgreens.',
    chef: 'Sous Chef Isabella Chen',
  },
];

const services = [
  {
    title: 'Lightning Fast',
    description: 'Average delivery time under 20 minutes for most orders',
    icon: '⚡',
  },
  {
    title: 'Best Prices',
    description: 'Same prices as in-store with exclusive app discounts',
    icon: '💰',
  },
  {
    title: 'Quality Guaranteed',
    description: 'Fresh food guarantee or your money back',
    icon: '🛡️',
  },
  {
    title: 'Easy Ordering',
    description: 'Order with just a few taps on your phone',
    icon: '📱',
  },
];

const FastFoodHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${FastFoodBanner})`
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center bg-black bg-opacity-30 rounded-lg p-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-shadow">
          Fast Food <br />
          <span className="text-red-500">Chains</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg text-shadow">
          Quick, delicious, and convenient. Order from your favorite fast food chains with lightning-fast delivery.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CulinaryHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://i.imgur.com/4f1450.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-24 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Culinary Excellence <br />
          <span className="text-orange-500">Awaits You</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg">
          Experience our chef's masterpieces across diverse cuisines. From signature specialties to comfort classics, every dish tells a story of passion and perfection.
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

const BurgersAndSandwiches = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Burgers & Sandwiches</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              {item.popular && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
                ${item.price.toFixed(2)}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              <p className="mt-4 text-xs text-gray-500">{item.chef}</p>
              <button className="mt-6 w-full py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FriedChicken = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Fried Chicken</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friedChickenItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              {item.popular && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
                ${item.price.toFixed(2)}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              <p className="mt-4 text-xs text-gray-500">{item.chef}</p>
              <button className="mt-6 w-full py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sides = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sides</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sidesItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              {item.popular && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
                ${item.price.toFixed(2)}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              <p className="mt-4 text-xs text-gray-500">{item.chef}</p>
              <button className="mt-6 w-full py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Menu Categories</h2>
        <p className="mt-2 text-gray-600">
          Explore our diverse selection of carefully crafted dishes across different dining styles
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
              <h3 className="text-xl font-semibold text-gray-800">{item.category}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-orange-500 hover:text-orange-600 transition duration-300"
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

const FastFoodServices = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Fast Food Delivery?</h2>
        <p className="mt-2 text-gray-600">
          Get your favorite fast food delivered with unmatched speed and convenience
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 text-3xl">
                {service.icon === '⚡' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
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
                    className="h-8 w-8 text-red-500"
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
                    className="h-8 w-8 text-red-500"
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
                    className="h-8 w-8 text-red-500"
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
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{service.description}</p>
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
      <div className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-md bg-red-50">
        <h2 className="text-3xl font-bold text-gray-800">Ready for Fast Food?</h2>
        <p className="mt-4 text-gray-600">
          Download our app and get your first fast food order with free delivery!
        </p>
        <button className="mt-6 px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300">
          Start Ordering
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FastFoodHero />
      <BurgersAndSandwiches />
      <FriedChicken />
      <Sides />
      <FastFoodServices />
      <CallToAction />
    </div>
  );
};

export default App;