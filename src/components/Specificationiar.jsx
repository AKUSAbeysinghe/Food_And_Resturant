import React from 'react';

const achievements = [
  {
    icon: '🏆', // A placeholder. Use an SVG or icon library for production.
    title: 'Award Winning',
    description:
      'Recognized for culinary excellence with multiple awards and stellar reviews from critics.',
  },
  {
    icon: '❤️', // A placeholder.
    title: 'Made with Love',
    description:
      'Every dish is prepared with care, attention to detail, and genuine passion for great food.',
  },
  {
    icon: '🛡️', // A placeholder.
    title: 'Quality Assured',
    description:
      'Rigorous quality standards ensure every meal meets our high expectations and yours.',
  },
];

const Achievements = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {achievements.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-orange-200">
              {/* Replace with actual SVG or icon component */}
              {item.icon === '🏆' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 111.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.023 12.023 0 002.5 9.5c0 4.17 2.76 7.625 6.5 9.176V21h3v-2.324c3.74-1.551 6.5-5.006 6.5-9.176a12.023 12.023 0 00-2.5-4.476z"
                  />
                </svg>
              )}
              {item.icon === '❤️' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              )}
              {item.icon === '🛡️' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 111.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.023 12.023 0 002.5 9.5c0 4.17 2.76 7.625 6.5 9.176V21h3v-2.324c3.74-1.551 6.5-5.006 6.5-9.176a12.023 12.023 0 00-2.5-4.476z"
                  />
                </svg>
              )}
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-800 font-josefin tracking-wide">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-lg font-lora leading-relaxed max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;