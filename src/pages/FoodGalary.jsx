import React, { useState, useEffect } from "react";

const galleryFilters = [
  "All Photos",
  "Signature Dishes",
  "Restaurant",
  "Kitchen",
  "Events",
];

const RestaurantGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchGalleryImages = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_gallery_images.php", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setGalleryItems(data);
      } else {
        setError("⚠️ Could not fetch gallery images: Invalid response format");
        setGalleryItems([]);
      }
    } catch (e) {
      setError("⚠️ Could not fetch gallery images: " + e.message);
      setGalleryItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const filteredItems =
    activeFilter === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#fcf8f3] py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* ✅ RESPONSIVE HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-serif mb-2 sm:mb-3 md:mb-4">
          Restaurant Gallery
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Take a visual journey through our culinary world, from signature dishes to our elegant dining spaces
        </p>

        {/* ✅ ERROR MESSAGE - RESPONSIVE */}
        {error && (
          <div className="mb-6 p-3 sm:p-4 rounded-lg bg-red-100 text-red-800 border-2 border-red-300 font-medium text-center font-sans text-sm sm:text-base">
            {error}
          </div>
        )}

        {/* ✅ LOADING - RESPONSIVE */}
        {isLoading && (
          <div className="mb-6 text-gray-600 font-sans text-sm sm:text-base flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#E55D3A]"></div>
            Loading gallery images...
          </div>
        )}

        {/* ✅ RESPONSIVE FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 md:px-6 py-2 rounded-md font-semibold text-sm sm:text-base transition-all duration-300 font-sans min-w-[100px] sm:min-w-[120px] ${
                activeFilter === filter
                  ? "bg-[#E55D3A] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ✅ RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredItems.length === 0 && !isLoading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 font-sans text-sm sm:text-base">
                No images available for this category
              </p>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-sm border border-gray-100 transform transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <img
                  src={item.image_url || "https://via.placeholder.com/300x250?text=No+Image"}
                  alt={item.category}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x250?text=No+Image";
                    console.error(`Failed to load image: ${item.image_url}`);
                  }}
                />
                {/* ✅ RESPONSIVE OVERLAY */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm md:text-lg font-semibold capitalize font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                    {item.category}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantGallery;