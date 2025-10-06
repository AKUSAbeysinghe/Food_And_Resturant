import React, { useState } from 'react';
import Beefburger from "../assets/Backgrounds/Burger.jpg";
import DiningBanner from "../assets/Dining/Mains.jpg";
import Main1 from "../assets/Mains/Main.jpg";
import Main2 from "../assets/Mains/Main2.jpg";
import Meat2 from "../assets/Mains/Meat2.jpg";
import Meat1 from "../assets/Mains/Meat1.jpg";
import Meat3 from "../assets/Mains/Meat3.jpg";
import veg1 from "../assets/Mains/Cabage.jpg";
import veg2 from "../assets/Mains/veg1.jpg";

const menuItems = [
  {
    image: Main1,
    name: 'Herb-Crusted Salmon',
    price: 26.99,
    popular: true,
    description: 'Fresh Atlantic salmon with herb crust, roasted vegetables, lemon butter sauce',
    chef: 'Chef Maria Santos',
  },
  {
    image: Main2,
    name: 'Grilled Shrimp Scampi',
    price: 24.99,
    popular: false,
    description: 'Juicy shrimp in garlic butter sauce with linguine',
    chef: 'Chef Antonio Rivera',
  },
];

const friedChickenItems = [
  {
    image: Meat1,
    name: 'Chicken Parmesan',
    price: 22.99,
    popular: true,
    description: 'Breaded chicken breast with marinara sauce, mozzarella, served with pasta',
    chef: 'Chef Antonio Rivera',
  },
  {
    image: Meat2,
    name: 'Beef Medallions',
    price: 32.99,
    popular: true,
    description: 'Tender beef tenderloin medallions with mushroom wine sauce and garlic mashed potatoes',
    chef: 'Chef David Wilson',
  },
  {
    image: Meat3,
    name: 'BBQ Pork Ribs',
    price: 28.99,
    popular: false,
    description: 'Slow-cooked pork ribs with smoky BBQ sauce and coleslaw',
    chef: 'Chef Marcus Rodriguez',
  },
];

const sidesItems = [
  {
    image: veg1,
    name: 'Eggplant Parmesan',
    price: 19.99,
    popular: true,
    description: 'Breaded eggplant with marinara sauce and melted mozzarella',
    chef: 'Chef Sophie Laurent',
  },
  {
    image: veg2,
    name: 'Stuffed Portobello Mushrooms',
    price: 21.99,
    popular: false,
    description: 'Portobello mushrooms filled with quinoa, spinach, and feta',
    chef: 'Chef Isabella Chen',
  },
];

const beveragesItems = [
  {
    image: 'https://via.placeholder.com/300',
    name: 'Iced Coffee',
    price: 4.99,
    popular: true,
    description: 'Chilled coffee with a hint of vanilla and cream',
    chef: 'Barista Isabella Chen',
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Lemonade',
    price: 3.99,
    popular: false,
    description: 'Freshly squeezed lemonade with a touch of mint',
    chef: 'Barista Isabella Chen',
  },
];

const dessertsItems = [
  {
    image: 'https://via.placeholder.com/300',
    name: 'Chocolate Lava Cake',
    price: 7.99,
    popular: true,
    description: 'Warm chocolate cake with molten center and vanilla ice cream',
    chef: 'Chef Sophie Laurent',
  },
  {
    image: 'https://via.placeholder.com/300',
    name: 'Fruit Tart',
    price: 6.99,
    popular: false,
    description: 'Crisp pastry filled with fresh fruit and custard',
    chef: 'Chef Sophie Laurent',
  },
];

const menuCategories = [
  {
    image: 'https://i.imgur.com/4f1bf0.jpg',
    category: 'Main Courses',
    description: 'Explore our hearty selection of dishes designed to delight your palate',
    dishes: 7, // Seafood (2), Meat Dishes (3), Vegetarian Dishes (2)
    priceRange: '$19.99 - $32.99', // Matches new main course item prices
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
    title: 'Premium Ingredients',
    description: 'Crafted with the finest meats, seafood, and vegetables',
    icon: '⚡',
  },
  {
    title: 'Diverse Flavors',
    description: 'Options for every taste, from savory to bold',
    icon: '💰',
  },
  {
    title: 'Perfect for Gatherings',
    description: 'Ideal for family dinners or special occasions',
    icon: '🛡️',
  },
  {
    title: 'Quick Delivery',
    description: 'Restaurant-quality meals delivered to your table',
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
          Main Courses <br />
          <span className="text-green-500">Delights</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg">
          Savor hearty main courses crafted with passion and quality. Perfect for satisfying dinners.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300">
            Browse Main Courses
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
        <p className="mt-4 text-xs text-gray-500">{item.chef}</p>
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Main Course Menu</h2>
        <p className="mt-2 text-gray-600">Explore our hearty selection of dishes designed to delight your palate</p>
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

const Seafood = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Seafood</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const MeatDishes = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meat Dishes</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friedChickenItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const VegetarianDishes = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Vegetarian Dishes</h2>
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Main Course Categories</h2>
        <p className="mt-2 text-gray-600">
          Explore our hearty selection of dishes designed to delight your palate
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

const WhyChooseMainCourses = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Our Main Courses?</h2>
        <p className="mt-2 text-gray-600">
          Experience the satisfaction of restaurant-quality meals with every bite
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
        <h2 className="text-3xl font-bold text-gray-800">Craving a Hearty Meal?</h2>
        <p className="mt-4 text-gray-600">
          Order from our main course collection and enjoy restaurant-quality dishes at home!
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
      <Seafood />
      <MeatDishes />
      <VegetarianDishes />
      {/* <TabbedMenu /> */}
      <WhyChooseMainCourses />
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