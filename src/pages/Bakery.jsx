import React, { useState, useEffect } from "react";
import BakeryBanner from "../assets/Bakery/Banner.jpg";

// Define subcategory IDs from AdminPanel.jsx
const SUBCATEGORY_IDS = {
  ARTISAN_COFFEE_BEVERAGES: 16,
  FRESH_BAKED_PASTRIES: 17,
  LIGHT_MEALS_SANDWICHES: 18,
};

const FastFoodHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BakeryBanner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-serif text-white">
          Cafés & Bakeries
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg font-sans text-gray-200">
          Start your day right with premium coffee, fresh pastries, and artisanal baked goods delivered warm.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 bg-[#E55D3A] text-white font-semibold rounded-md hover:bg-[#c94b2f] transition duration-300 font-sans">
            Order Coffee & Pastries
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#E55D3A] transition duration-300 font-sans">
            Browse Bakeries
          </button>
        </div>
      </div>
    </div>
  );
};

const ArtisanCoffeeBeverages = ({ items }) => {
  return (
    <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">Artisan Coffee & Beverages</h2>
        <p className="mt-2 text-gray-600 font-sans">Artisan coffee, fresh-baked pastries, and wholesome light meals crafted daily</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full font-sans">No items available</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={item.image_url || "https://via.placeholder.com/150?text=No+Image"}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150?text=No+Image";
                    console.error(`Failed to load image: ${item.image_url}`);
                  }}
                />
                {item.popular && (
                  <div className="absolute top-2 left-2 bg-[#E55D3A] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
                  ₹{new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.price)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 font-sans">{item.name}</h3>
                <p className="mt-2 text-gray-600 text-sm font-sans">{item.description || "N/A"}</p>
                <p className="mt-4 text-xs text-gray-500 font-sans">{item.chef || "N/A"}</p>
                <button className="mt-6 w-full py-3 bg-[#E55D3A] text-white font-semibold rounded-md hover:bg-[#c94b2f] transition duration-300 font-sans">
                  Order Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const FreshBakedPastries = ({ items }) => {
  return (
    <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">Fresh Baked Pastries</h2>
        <p className="mt-2 text-gray-600 font-sans">Handcrafted pastries baked fresh daily with premium ingredients</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full font-sans">No items available</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={item.image_url || "https://via.placeholder.com/150?text=No+Image"}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150?text=No+Image";
                    console.error(`Failed to load image: ${item.image_url}`);
                  }}
                />
                {item.popular && (
                  <div className="absolute top-2 left-2 bg-[#E55D3A] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
                  ₹{new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.price)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 font-sans">{item.name}</h3>
                <p className="mt-2 text-gray-600 text-sm font-sans">{item.description || "N/A"}</p>
                <p className="mt-4 text-xs text-gray-500 font-sans">{item.chef || "N/A"}</p>
                <button className="mt-6 w-full py-3 bg-[#E55D3A] text-white font-semibold rounded-md hover:bg-[#c94b2f] transition duration-300 font-sans">
                  Order Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const LightMealsSandwiches = ({ items }) => {
  return (
    <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">Light Meals & Sandwiches</h2>
        <p className="mt-2 text-gray-600 font-sans">Wholesome meals and sandwiches for a quick, satisfying bite</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full font-sans">No items available</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={item.image_url || "https://via.placeholder.com/150?text=No+Image"}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150?text=No+Image";
                    console.error(`Failed to load image: ${item.image_url}`);
                  }}
                />
                {item.popular && (
                  <div className="absolute top-2 left-2 bg-[#E55D3A] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
                  ₹{new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.price)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 font-sans">{item.name}</h3>
                <p className="mt-2 text-gray-600 text-sm font-sans">{item.description || "N/A"}</p>
                <p className="mt-4 text-xs text-gray-500 font-sans">{item.chef || "N/A"}</p>
                <button className="mt-6 w-full py-3 bg-[#E55D3A] text-white font-semibold rounded-md hover:bg-[#c94b2f] transition duration-300 font-sans">
                  Order Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const FastFoodServices = () => {
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

  return (
    <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">Why Choose Café Delivery?</h2>
        <p className="mt-2 text-gray-600 font-sans">Experience the perfect café atmosphere from the comfort of your home</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E55D3A]/10 text-[#E55D3A] text-3xl">
                {service.icon === "⚡" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#E55D3A]"
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
                    className="h-8 w-8 text-[#E55D3A]"
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
                    className="h-8 w-8 text-[#E55D3A]"
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
                    className="h-8 w-8 text-[#E55D3A]"
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
              <h3 className="mt-4 text-xl font-semibold text-gray-800 font-sans">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-center font-sans">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-sm bg-white border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 font-serif">Start Your Day Right</h2>
        <p className="mt-4 text-gray-600 font-sans">
          Order your favorite coffee and pastries for delivery or pickup. Perfect for busy mornings!
        </p>
        <button className="mt-6 px-8 py-3 bg-[#E55D3A] text-white font-semibold rounded-md hover:bg-[#c94b2f] transition duration-300 font-sans">
          Order Coffee
        </button>
      </div>
    </div>
  );
};

const CafesBakeries = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState("");

  // Fetch menu items for Cafés & Bakeries category (category_id: 6)
  const fetchMenuItems = async () => {
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_menu_items.php?category_id=6");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      if (data.success === false) {
        setError(data.message || "⚠️ Could not fetch menu items.");
        setMenuItems([]);
      } else {
        setMenuItems(Array.isArray(data.data) ? data.data : []);
        setError("");
      }
    } catch (e) {
      setError("⚠️ Could not fetch menu items: " + e.message);
      setMenuItems([]);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Filter items by subcategory
  const artisanCoffeeBeverages = menuItems.filter((item) => item.sub_category_id === SUBCATEGORY_IDS.ARTISAN_COFFEE_BEVERAGES);
  const freshBakedPastries = menuItems.filter((item) => item.sub_category_id === SUBCATEGORY_IDS.FRESH_BAKED_PASTRIES);
  const lightMealsSandwiches = menuItems.filter((item) => item.sub_category_id === SUBCATEGORY_IDS.LIGHT_MEALS_SANDWICHES);

  return (
    <div className="bg-[#fcf8f3]">
      {error && (
        <div className="p-4 mb-6 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium text-center font-sans">
          {error}
        </div>
      )}
      <FastFoodHero />
      <ArtisanCoffeeBeverages items={artisanCoffeeBeverages} />
      <FreshBakedPastries items={freshBakedPastries} />
      <LightMealsSandwiches items={lightMealsSandwiches} />
      <FastFoodServices />
      <CallToAction />
    </div>
  );
};

export default CafesBakeries;