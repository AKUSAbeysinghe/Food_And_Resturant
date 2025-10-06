import React, { useState } from 'react';
import Beefburger from "../assets/Backgrounds/Burger.jpg";
import DiningBanner from "../assets/Dining/Beveragers.jpg";
import Coffee1 from "../assets/Beveragers/Cofee1.jpg";
import Macha from "../assets/Beveragers/Macha.jpg";
import Orange from "../assets/Beveragers/OrangeJuice.jpg";
import Stab from "../assets/Beveragers/Stab.jpg";
import GreenS from "../assets/Beveragers/Greendetox.jpg";
import Soda from "../assets/Beveragers/Cofee3.jpg";
import Hibi from "../assets/Beveragers/Hibi.jpg";

const menuItems = [
  {
    image: Coffee1,
    name: 'Iced Coffee',
    price: 4.99,
    popular: true,
    description: 'Chilled coffee with a hint of vanilla and cream',
    barista: 'Barista Isabella Chen',
  },
  {
    image: Macha,
    name: 'Matcha Latte',
    price: 5.49,
    popular: false,
    description: 'Vibrant green tea latte with a creamy finish',
    barista: 'Barista Sophie Laurent',
  },
];

const friedChickenItems = [
  {
    image: Orange,
    name: 'Fresh Orange Juice',
    price: 4.49,
    popular: true,
    description: 'Freshly squeezed oranges for a zesty boost',
    barista: 'Barista Maria Santos',
  },
  {
    image: Stab,
    name: 'Strawberry Banana Smoothie',
    price: 5.99,
    popular: true,
    description: 'Creamy blend of strawberries and bananas',
    barista: 'Barista Isabella Chen',
  },
  {
    image: GreenS,
    name: 'Green Detox Smoothie',
    price: 6.49,
    popular: false,
    description: 'Spinach, kale, apple, and ginger blend',
    barista: 'Barista Maria Santos',
  },
];

const sidesItems = [
  {
    image: Soda,
    name: 'Artisan Lemonade',
    price: 3.99,
    popular: true,
    description: 'Freshly squeezed lemonade with a touch of mint',
    barista: 'Barista Isabella Chen',
  },
  {
    image: Hibi,
    name: 'Sparkling Hibiscus Cooler',
    price: 4.49,
    popular: false,
    description: 'Fizzy hibiscus tea with a hint of berry',
    barista: 'Barista Antonio Rivera',
  },
];

const beveragesItems = [
  {
    image: 'https://via.placeholder.com/300',
    name: 'Iced Coffee',
    price: 4.99,
    popular: true,
    description: 'Chilled coffee with a hint of vanilla and cream',
    barista: 'Barista Isabella Chen',
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Lemonade',
    price: 3.99,
    popular: false,
    description: 'Freshly squeezed lemonade with a touch of mint',
    barista: 'Barista Isabella Chen',
  },
];

const dessertsItems = [
  {
    image: 'https://via.placeholder.com/300',
    name: 'Chocolate Lava Cake',
    price: 7.99,
    popular: true,
    description: 'Warm chocolate cake with molten center and vanilla ice cream',
    barista: 'Chef Sophie Laurent',
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Fruit Tart',
    price: 6.99,
    popular: false,
    description: 'Crisp pastry filled with fresh fruit and custard',
    barista: 'Chef Sophie Laurent',
  },
];

const menuCategories = [
  {
    image: 'https://i.imgur.com/4f1bf0.jpg',
    category: 'Beverages',
    description: 'Explore our refreshing selection of drinks designed to quench your thirst',
    dishes: 7, // Coffees & Teas (2), Juices & Smoothies (3), Sodas & Specialty Drinks (2)
    priceRange: '$3.99 - $6.49', // Matches new beverage item prices
  },
];

const signatureSpecials = [
  {
    image: 'https://i.imgur.com/4f7288.jpg',
    name: 'Truffle Ribeye Steak',
    price: 48,
    description: 'Premium 16oz ribeye with black truffle sauce, roasted vegetables, and garlic mashed potatoes.',
    barista: 'Executive Chef Marcus Rodriguez',
  },
  {
    image: 'https://i.imgur.com/4f7288.jpg',
    name: 'Lobster Risotto',
    price: 36,
    description: 'Creamy arborio rice with fresh Maine lobster, saffron, and microgreens.',
    barista: 'Sous Chef Isabella Chen',
  },
];

const services = [
  {
    title: 'Artisanal Blends',
    description: 'Handcrafted beverages made with premium ingredients',
    icon: '⚡',
  },
  {
    title: 'Variety of Flavors',
    description: 'Options for every taste, from bold to refreshing',
    icon: '💰',
  },
  {
    title: 'Perfect Pairings',
    description: 'Ideal for meals, snacks, or standalone enjoyment',
    icon: '🛡️',
  },
  {
    title: 'Fast Refreshment',
    description: 'Quick delivery to keep you hydrated on the go',
    icon: '📱',
  },
];

const FastFoodHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${DiningBanner || 'https://via.placeholder.com/1700x400'})`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Beverages <br />
          <span className="text-green-500">Refresh</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg">
          Savor refreshing beverages crafted to delight your senses. Perfect for any time of day.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300">
            Browse Beverages
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
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
        <p className="mt-4 text-xs text-gray-500">{item.barista}</p>
        <button className="mt-6 w-full py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

const TabbedMenu = () => {
  const [activeTab, setActiveTab] = useState('Beverages');

  const tabs = [
    { name: 'Beverages', items: beveragesItems },
    { name: 'Desserts', items: dessertsItems },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Beverage Menu</h2>
        <p className="mt-2 text-gray-600">Explore our refreshing selection of drinks designed to quench your thirst</p>
      </div>
      <div className="flex justify-center mb-8 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-4 text-lg font-semibold transition duration-300 ${activeTab === tab.name ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600 hover:text-green-500'}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{activeTab}</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tabs.find((tab) => tab.name === activeTab).items.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const CoffeesAndTeas = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Coffees & Teas</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const JuicesAndSmoothies = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Juices & Smoothies</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friedChickenItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const SodasAndSpecialtyDrinks = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sodas & Specialty Drinks</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sidesItems.map((item, index) => (
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Beverage Categories</h2>
        <p className="mt-2 text-gray-600">
          Explore our refreshing selection of drinks designed to quench your thirst
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

const WhyChooseBeverages = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Our Beverages?</h2>
        <p className="mt-2 text-gray-600">
          Experience the refreshment of artisanal drinks with every sip
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
      <div className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-md bg-green-50">
        <h2 className="text-3xl font-bold text-gray-800">Craving Refreshment?</h2>
        <p className="mt-4 text-gray-600">
          Order from our beverage collection and enjoy refreshing drinks delivered to you!
        </p>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FastFoodHero />
      <CoffeesAndTeas />
      <JuicesAndSmoothies />
      <SodasAndSpecialtyDrinks />
      {/* <TabbedMenu /> */}
      <WhyChooseBeverages />
      <CallToAction />
      <style jsx>{`
        html, body {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;