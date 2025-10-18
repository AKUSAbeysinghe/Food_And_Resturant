import React from 'react';
import Menu1 from "../assets/Menu/Menu1.jpg";
import Menu2 from "../assets/Menu/Menu2.jpg";
import Menu3 from "../assets/Menu/Menu3.jpg";

// Card component for a single dish
const DishCard = ({ tag, title, price, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Image Container with Tag */}
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={`Image of ${title}`}
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for better tag contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        {/* Tag */}
        <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm bg-black/50 text-white uppercase tracking-wider">
          {tag}
        </span>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          {/* Dish Title */}
          <h3 className="text-xl font-serif text-gray-800 pr-2 leading-snug">
            {title}
          </h3>
          {/* Price Bubble */}
          <span className="flex-shrink-0 px-4 py-1.5 text-sm font-medium text-[#C94B2F] bg-[#f8e8e3] rounded-full">
            ${price}
          </span>
        </div>
        
        {/* Dish Description */}
        <p className="text-sm text-gray-600 mt-3 font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const SignatureDishesSection = () => {
  const dishes = [
    {
      tag: "Northwest Waters",
      title: "Cedar-Smoked King Salmon",
      price: 38,
      description: "Maple miso glaze, charred citrus, preserved fennel, and smoked roe served tableside under a glass dome of cedar vapors.",
      imageUrl: Menu1, // Use imported Menu1
    },
    {
      tag: "Chef's Signature",
      title: "Ember-Fired Dry-Aged Ribeye",
      price: 62,
      description: "45-day dry-aged ribeye kissed by flame, ember potatoes, bone marrow sabayon, and fire-forged herb oil.",
      imageUrl: Menu2, // Use imported Menu2
    },
    {
      tag: "Garden Harvest",
      title: "Heirloom Carrot Tart",
      price: 24,
      description: "Hazelnut pâté brisée, smoked honey custard, carrot tops, and bergamot preserved petals finished with citrus chantilly.",
      imageUrl: Menu3, // Use imported Menu3
    },
  ];

  return (
    <section className="bg-[#fcf8f3] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-sm font-medium tracking-widest uppercase text-[#C94B2F] mb-2">
            Signature Dishes
          </h2>
          <h1 className="text-5xl font-serif text-gray-800 mb-6 leading-tight">
            Fire-forged plates designed for savoring
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Our menu changes with the tide and the harvest. These guest favorites capture the spirit of Maison Ember—elegant plates with embers at their core.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <DishCard
              key={index}
              tag={dish.tag}
              title={dish.title}
              price={dish.price}
              description={dish.description}
              imageUrl={dish.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishesSection;