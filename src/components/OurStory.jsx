import React from 'react';
import AboutUs from "../assets/Backgrounds/Abus.jpeg";

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-start">
      {/* Icon */}
      <div className="text-[#E55D3A] mb-4">
        <Icon className="w-8 h-8" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-serif text-gray-800 mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 font-light">
        {description}
      </p>
    </div>
  );
};

// SVG Icons (simplified versions to match the image's style)
const FlameIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 0113.843 3.343a.5.5 0 01.707 0l.707.707a.5.5 0 010 .707l-2.121 2.121a.5.5 0 01-.707 0L8.464 6.343a.5.5 0 01-.707 0L6.657 4.93a.5.5 0 010-.707l.707-.707A8 8 0 0117.657 18.657zM12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16.5l2-4 2 4m-4 0h4"/>
  </svg>
);

const LeafIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657A8 8 0 016.343 5.343a.5.5 0 01.707 0L12 10.293l4.95-4.95a.5.5 0 01.707 0l.707.707a.5.5 0 010 .707l-4.95 4.95 4.243 4.243zM12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3M6 10h12"/>
  </svg>
);

const StarIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.593a1.5 1.5 0 012.902 0l1.285 2.592a1.5 1.5 0 001.12.791l2.858.416a1.5 1.5 0 01.833 2.569l-2.074 2.022a1.5 1.5 0 00-.434 1.332l.49 2.846a1.5 1.5 0 01-2.174 1.583l-2.557-1.345a1.5 1.5 0 00-1.4 0l-2.557 1.345a1.5 1.5 0 01-2.174-1.583l.49-2.846a1.5 1.5 0 00-.434-1.332l-2.074-2.022a1.5 1.5 0 01.833-2.569l2.858-.416a1.5 1.5 0 001.12-.791l1.285-2.592z"/>
  </svg>
);

const OurStorySection = () => {
  const features = [
    {
      icon: FlameIcon,
      title: "Wood-Fired Mastery",
      description: "Every dish is finished over our custom hearth for nuanced smokiness and charred depth.",
    },
    {
      icon: LeafIcon,
      title: "Seasonal Provisions",
      description: "We partner with regional farms to celebrate micro-seasonal produce and sustainable harvests.",
    },
    {
      icon: StarIcon,
      title: "Immersive Dining",
      description: "Curated playlists, candlelight, and chef stories transform dinner into a sensory experience.",
    },
  ];

  return (
    <section className="bg-[#fcf8f3] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-sm font-medium tracking-widest uppercase text-[#C94B2F] mb-2">
            Our Story
          </h2>
          <h1 className="text-5xl font-serif text-gray-800 mb-6 leading-tight">
            Born from the glow of ember and community
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Chef-owner Camille Rousseau grew up beside her family's vineyard, where supper meant wood smoke and lively conversation. Maison Ember is her living homage to that warmth, paired with modern culinary craft.
          </p>
        </div>

        {/* Features Grid and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Left Column: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
            <div className="sm:col-span-2 md:col-span-1">
              <FeatureCard {...features[2]} />
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-64 sm:h-auto min-h-[300px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={AboutUs}
              alt="Chef tending to a wood-fired hearth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;