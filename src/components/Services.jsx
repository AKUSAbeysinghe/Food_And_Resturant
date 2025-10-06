import React from 'react';

const menuItemsData = [
  // Items from image_e602b0.jpg and image_e60b47.jpg
  {
    id: 1,
    title: 'Grilled Fillet',
    price: 26.95,
    description: 'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    imageUrl: null,
  },
  {
    id: 2,
    title: 'Artisan Cheeses',
    price: null,
    description: 'A selection of fine artisan cheeses.',
    imageUrl: 'https://via.placeholder.com/400x300/E0E0E0/000000?text=Artisan+Cheeses',
  },
  {
    id: 3,
    title: 'Chicken Breast',
    price: 53.30,
    description: 'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    imageUrl: null,
  },
  {
    id: 4,
    title: 'King Crab',
    price: 40.50,
    description: 'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    imageUrl: null,
  },
  {
    id: 5,
    title: 'Baked Tart',
    price: null,
    description: 'A delightful baked tart, a perfect blend of sweet and savory flavors.',
    imageUrl: 'https://via.placeholder.com/400x300/E0E0E0/000000?text=Baked+Tart',
  },
  {
    id: 6,
    title: 'Avocado Toast',
    price: null,
    description: 'Fresh avocado on toasted sourdough, topped with microgreens and feta.',
    imageUrl: 'https://via.placeholder.com/400x300/E0E0E0/000000?text=Avocado+Toast',
  },
  
  // Items from image_e66fe8.jpg
  {
    id: 7,
    title: 'Sea Trout',
    price: 40.50,
    description: 'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    imageUrl: null,
  },
  {
    id: 8,
    title: 'Crab on Ice',
    price: null,
    description: 'Freshly caught crab on a bed of ice, ready to be prepared.',
    imageUrl: 'https://via.placeholder.com/400x300/E0E0E0/000000?text=Crab+on+Ice',
  },
  {
    id: 9,
    title: 'Roasted Bakra',
    price: 22.30,
    description: 'Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    imageUrl: null,
  },
  {
    id: 10,
    title: 'Fresh Mackerel',
    price: null,
    description: 'Two whole fresh mackerel, perfect for grilling or pan-searing.',
    imageUrl: 'https://via.placeholder.com/400x300/E0E0E0/000000?text=Fresh+Mackerel',
  },
  {
    id: 11,
    title: 'Pomegranate',
    price: null,
    description: 'A vibrant, ripe pomegranate, full of delicious and juicy arils.',
    imageUrl: 'https://via.placeholder.com/400x300/E0E0E0/000000?text=Pomegranate',
  },
];

const MenuItem = ({ title, price, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {imageUrl && (
        <div className="w-full h-64 overflow-hidden mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      {price && <div className="text-2xl font-bold text-gray-800">${price}</div>}
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-center text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
};

const FullMenuGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItemsData.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FullMenuGrid;