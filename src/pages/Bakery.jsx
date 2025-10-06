import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Backgrounds/Logo.jpg";
import BakeryBanner from "../assets/Bakery/Banner.jpg";
import IceCoff from "../assets/Bakery/Coffee1.jpg";
import Lavander from "../assets/Bakery/Lavander.jpg";
import Cooljoo from "../assets/Bakery/Cool.jpg";
import Cro from "../assets/Bakery/Crossistent.jpg";
import ChocholateM from "../assets/Bakery/Chocolate.jpg";
import Rools from "../assets/Bakery/Rools.jpg";
import Avacado from "../assets/Bakery/Avacado.jpg";
import Dish from "../assets/Bakery/Dish.jpg";
import Power from "../assets/Bakery/Powerboal.jpg";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCasualDiningOpen, setIsCasualDiningOpen] = useState(false);
  const [isCafesBakeriesOpen, setIsCafesBakeriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const categories = [
    { name: "Fast Food", path: "/fast-food" },
    { name: "Casual Dining", path: "/casual-dining" },
    { name: "Cafés & Bakeries", path: "/cafes-bakeries" },
    { name: "Starters", path: "/casual-dining/starters" },
    { name: "Mains", path: "/casual-dining/mains" },
    { name: "Beverages", path: "/casual-dining/beverages" },
    { name: "Desserts", path: "/casual-dining/desserts" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const match = categories.find((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (match) {
        navigate(match.path);
        setSearchQuery("");
        setSuggestions([]);
        setIsSearchOpen(false);
      } else {
        console.log("No matching category found for:", searchQuery);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      handleSearch();
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setSuggestions([]);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    if (isSearchOpen && searchQuery.trim()) {
      handleSearch();
    }
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery("");
      setSuggestions([]);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 
        w-[90%] rounded-2xl z-50 transition-all duration-300 
        ${isScrolled ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-white/40 backdrop-blur-sm"}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center font-poppins">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="FoodHub Logo" className="h-12 rounded-full" />
            <span className="text-2xl font-extrabold text-orange-600">
              FoodHub
            </span>
          </div>
          <ul className="hidden md:flex items-center space-x-10 text-gray-900 font-semibold text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/fast-food"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                Fast Food
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsCasualDiningOpen(true)}
              onMouseLeave={() => setIsCasualDiningOpen(false)}
            >
              <Link
                to="/casual-dining"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                Casual Dining
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              {isCasualDiningOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-10 font-poppins text-gray-900">
                  <li>
                    <Link
                      to="/casual-dining/starters"
                      className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Starters
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/casual-dining/mains"
                      className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Mains
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/casual-dining/beverages"
                      className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Beverages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/casual-dining/desserts"
                      className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Desserts
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsCafesBakeriesOpen(true)}
              onMouseLeave={() => setIsCafesBakeriesOpen(false)}
            >
              <Link
                to="/cafes-bakeries"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                Cafés & Bakeries
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/chefs"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                Our Chefs
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/FoodGalary"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-600 transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="text-gray-900 hover:text-orange-600 transition-colors duration-300 focus:outline-none text-xl"
              >
                {isSearchOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaSearch className="h-6 w-6" />
                )}
              </button>
              {isSearchOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={toggleSearch}></div>
                  <div className="relative bg-white rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto z-50">
                    <input
                      type="text"
                      placeholder="Search Menu Options..."
                      value={searchQuery}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      className="w-full px-5 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all duration-300 text-lg font-poppins text-gray-900 placeholder-gray-900 mb-4"
                    />
                    {suggestions.length > 0 ? (
                      <ul className="space-y-2">
                        {suggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion.path)}
                            className="px-4 py-3 rounded-md hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300 cursor-pointer text-gray-900 font-poppins"
                          >
                            {suggestion.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-900 font-poppins text-center py-4">No matching options found</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const menuItems = [
  {
    image: IceCoff,
    name: "Signature Espresso Blend",
    price: 3.25,
    popular: true,
    description: "Rich, full-bodied espresso made from our house-roasted beans",
    chef: "Barista Emma Johnson",
  },
  {
    image: Lavander,
    name: "Lavender Honey Latte",
    price: 5.75,
    popular: false,
    description: "Smooth espresso with steamed milk, lavender syrup, and local honey",
    chef: "Barista Emma Johnson",
  },
  {
    image: Cooljoo,
    name: "Cold Brew Float",
    price: 6.50,
    popular: true,
    description: "House-made cold brew coffee topped with vanilla bean ice cream",
    chef: "Barista Marcus Chen",
  },
];

const friedChickenItems = [
  {
    image: Cro,
    name: "Almond Croissant",
    price: 4.25,
    popular: true,
    description: "Buttery croissant filled with almond cream and topped with sliced almonds",
    chef: "Pastry Chef Sarah Laurent",
  },
  {
    image: Rools,
    name: "Blueberry Scone",
    price: 3.75,
    popular: false,
    description: "Tender scone loaded with fresh blueberries, served with clotted cream",
    chef: "Pastry Chef Sarah Laurent",
  },
  {
    image: ChocholateM,
    name: "Chocolate Danish",
    price: 4.50,
    popular: true,
    description: "Flaky pastry filled with rich chocolate and topped with chocolate drizzle",
    chef: "Pastry Chef Sarah Laurent",
  },
];

const sidesItems = [
  {
    image: Avacado,
    name: "Avocado Toast Supreme",
    price: 12.99,
    popular: true,
    description: "Multigrain bread topped with smashed avocado, poached egg, and microgreens",
    chef: "Chef Lisa Park",
  },
  {
    image: Dish,
    name: "Turkey Club Panini",
    price: 11.99,
    popular: false,
    description: "Grilled panini with turkey, bacon, tomato, lettuce, and herb aioli",
    chef: "Chef Lisa Park",
  },
  {
    image: Power,
    name: "Quinoa Power Bowl",
    price: 13.99,
    popular: true,
    description: "Quinoa with roasted vegetables, chickpeas, feta cheese, and tahini dressing",
    chef: "Chef Lisa Park",
  },
];

const menuCategories = [
  {
    image: "https://via.placeholder.com/300",
    category: "Café & Bakery",
    description: "Artisan coffee, pastries and light meals",
    dishes: 18,
    priceRange: "$4 - $16",
  },
  {
    image: "https://via.placeholder.com/300",
    category: "Casual Dining",
    description: "Hearty meals perfect for family gatherings",
    dishes: 24,
    priceRange: "$15 - $32",
  },
  {
    image: "https://via.placeholder.com/300",
    category: "Fast Food Classics",
    description: "Comfort food favorites and quick bites",
    dishes: 15,
    priceRange: "$8 - $18",
  },
];

const services = [
  {
    title: "Fresh Brewed Coffee",
    description: "Premium beans roasted to perfection, delivered hot",
    icon: "⚡",
  },
  {
    title: "Daily Fresh Pastries",
    description: "Baked fresh daily with the finest ingredients",
    icon: "💰",
  },
  {
    title: "Perfect for Any Time",
    description: "Morning coffee, afternoon treat, or evening dessert",
    icon: "🛡️",
  },
  {
    title: "Healthy Options",
    description: "Organic, gluten-free, and vegan options available",
    icon: "📱",
  },
];

const FastFoodHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BakeryBanner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-poppins">
          Cafés & Bakeries
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg font-poppins">
          Start your day right with premium coffee, fresh pastries, and artisanal baked goods delivered warm.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300 font-poppins">
            Order Coffee & Pastries
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 font-poppins">
            Browse Bakeries
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
      style={{ backgroundImage: `url(${BakeryBanner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-24 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-poppins">
          Culinary Excellence <br />
          <span className="text-yellow-500">Awaits You</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg font-poppins">
          Experience our chef's masterpieces across diverse cuisines. From signature specialties to comfort classics, every dish tells a story of passion and perfection.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300 font-poppins">
            View Our Menu
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 font-poppins">
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Artisan Coffee & Beverages</h2>
        <p className="mt-2 text-gray-600 font-poppins">Artisan coffee, fresh-baked pastries, and wholesome light meals crafted daily</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              {item.popular && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
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
              <button className="mt-6 w-full py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300 font-poppins">
                Order Now
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Fresh Baked Pastries</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friedChickenItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              {item.popular && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
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
              <button className="mt-6 w-full py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300 font-poppins">
                Order Now
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Light Meals & Sandwiches</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sidesItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              {item.popular && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
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
              <button className="mt-6 w-full py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300 font-poppins">
                Order Now
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Our Menu Categories</h2>
        <p className="mt-2 text-gray-600 font-poppins">
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
              <h3 className="text-xl font-semibold text-gray-800 font-poppins">{item.category}</h3>
              <p className="mt-2 text-gray-600 font-poppins">{item.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-yellow-500 hover:text-yellow-600 transition duration-300 font-poppins"
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Why Choose Café Delivery?</h2>
        <p className="mt-2 text-gray-600 font-poppins">
          Experience the perfect café atmosphere from the comfort of your home
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 text-3xl">
                {service.icon === "⚡" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {service.icon === "💰" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-500"
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
                {service.icon === "🛡️" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-500"
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
                {service.icon === "📱" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-500"
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
      <div className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-md bg-yellow-50">
        <h2 className="text-3xl font-bold text-gray-800 font-poppins">Start Your Day Right</h2>
        <p className="mt-4 text-gray-600 font-poppins">
          Order your favorite coffee and pastries for delivery or pickup. Perfect for busy mornings!
        </p>
        <button className="mt-6 px-8 py-3 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-700 transition duration-300 font-poppins">
          Order Coffee
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
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