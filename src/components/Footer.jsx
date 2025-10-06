import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from "../assets/Backgrounds/Logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
       
        {/* About Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="FoodHub Logo" className="h-12 rounded-full" />
            <span className="text-2xl font-bold text-orange-500 font-josefin">FoodHub</span>
          </div>
          <p className="text-sm text-gray-400 font-lora leading-relaxed">
            Your ultimate destination for discovering amazing food crafted by our expert chefs. Quality ingredients, exceptional flavors.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/foodhub"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/foodhub"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/foodhub"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white font-josefin mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm font-lora">
            <li>
              <Link
                to="/fast-food"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Fast Food
              </Link>
            </li>
            <li>
              <Link
                to="/casual-dining"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Casual Dining
              </Link>
            </li>
            <li>
              <Link
                to="/cafes-bakeries"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Cafés & Bakeries
              </Link>
            </li>
            <li>
              <Link
                to="/OurChefs"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Our Chefs
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white font-josefin mb-4">Support</h3>
          <ul className="space-y-2 text-sm font-lora">
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-semibold text-white font-josefin mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm font-lora">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a.925.925 0 00-.916.141L6 14.281V18a2 2 0 002 2h4a2 2 0 002-2v-3.719L15.939 12.3c.091.045.18.09.266.136a.925.925 0 00.916-.141l2.257-1.128a1 1 0 01.502-1.21l-1.498-4.493A1 1 0 0118.72 3H21a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5z"
                />
              </svg>
              <span>0112002002</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4l4 4m8-4l4-4"
                />
              </svg>
              <a
                href="mailto:support@foodhub.com"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                support@foodhub.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Company Address</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Bottom Links */}
      <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between text-sm font-lora">
        <p className="mb-4 md:mb-0 text-gray-400">
          © {new Date().getFullYear()} FoodHub. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          <Link
            to="/privacy-policy"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
          >
            Terms of Service
          </Link>
          <Link
            to="/FAQ"
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
          >
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;