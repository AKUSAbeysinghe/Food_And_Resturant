import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Backgrounds/Logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCasualDiningOpen, setIsCasualDiningOpen] = useState(false);
  const [isCafesBakeriesOpen, setIsCafesBakeriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCasualDiningOpen, setIsMobileCasualDiningOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const navigate = useNavigate();

  const categories = [
    { name: "Fast Food", path: "/fast-food" },
    { name: "Casual Dining", path: "/casual-dining" },
    { name: "Cafés & Bakeries", path: "/cafes-bakeries" },
    { name: "Mains", path: "/mains" },
    { name: "Beverages", path: "/beverages" },
    { name: "Desserts", path: "/desserts" },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search navigation
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
        setIsMobileMenuOpen(false);
      } else {
        navigate("/");
        setSearchQuery("");
        setSuggestions([]);
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Handle Enter key for search
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      handleSearch();
    }
  };

  // Filter suggestions based on input
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions(categories);
    }
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setSuggestions([]);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Toggle search bar and initialize suggestions
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSuggestions(categories);
    } else {
      setSearchQuery("");
      setSuggestions([]);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearchOpen(false);
  };

  // Toggle mobile Casual Dining sub-menu
  const toggleMobileCasualDining = () => {
    setIsMobileCasualDiningOpen(!isMobileCasualDiningOpen);
  };

  // Handle dropdown with delay
  const handleMouseEnter = (setter) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setter(true);
  };

  const handleMouseLeave = (setter) => {
    const timeout = setTimeout(() => {
      setter(false);
    }, 400);
    setDropdownTimeout(timeout);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] min-w-0 rounded-2xl z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white/70 shadow-lg backdrop-blur-md" : "bg-white/40 backdrop-blur-sm"
      }`}
      style={{ position: "fixed" }} // Explicitly enforce fixed positioning
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center font-poppins">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="FoodHub Logo" className="h-12 rounded-full" />
          <span className="text-2xl font-extrabold text-orange-600">FoodHub</span>
        </div>

        {/* Desktop Navigation Links */}
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

          {/* Casual Dining Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(setIsCasualDiningOpen)}
            onMouseLeave={() => handleMouseLeave(setIsCasualDiningOpen)}
          >
            <Link
              to="/casual-dining"
              className="hover:text-orange-600 transition-colors duration-300 relative group"
            >
              Casual Dining
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            {isCasualDiningOpen && (
              <ul
                className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-[101] font-poppins text-gray-900 pointer-events-auto"
                style={{ top: "100%" }}
                onMouseEnter={() => handleMouseEnter(setIsCasualDiningOpen)}
                onMouseLeave={() => handleMouseLeave(setIsCasualDiningOpen)}
              >
                <li>
                  <Link
                    to="/starters"
                    className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                  >
                    Starters
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mains"
                    className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                  >
                    Mains
                  </Link>
                </li>
                <li>
                  <Link
                    to="/beverages"
                    className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                  >
                    Beverages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/desserts"
                    className="block px-5 py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                  >
                    Desserts
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Cafés & Bakeries */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(setIsCafesBakeriesOpen)}
            onMouseLeave={() => handleMouseLeave(setIsCafesBakeriesOpen)}
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
              to="/our-chefs"
              className="hover:text-orange-600 transition-colors duration-300 relative group"
              onClick={() => window.scrollTo(0, 0)} // Force scroll to top on click
            >
              Our Chefs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/food-gallery"
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
          {/* <li>
            <Link
              to="/contact"
              className="hover:text-orange-600 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li> */}
        </ul>

        {/* Mobile Menu Button and Search Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="text-gray-900 hover:text-orange-600 transition-colors duration-300 focus:outline-none text-xl"
            aria-label={isSearchOpen ? "Close search" : "Open search"}
          >
            {isSearchOpen ? <FaTimes className="h-6 w-6" /> : <FaSearch className="h-6 w-6" />}
          </button>
          <button
            className="md:hidden text-gray-900 hover:text-orange-600 transition-colors duration-300 focus:outline-none text-xl"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[4.5rem] left-1/2 transform -translate-x-1/2 w-[90%] bg-white/70 backdrop-blur-md rounded-lg shadow-lg z-[100]">
          <ul className="flex flex-col items-start p-6 text-gray-900 font-semibold text-lg font-poppins">
            <li className="w-full">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-orange-600 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/fast-food"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-orange-600 transition-colors duration-300"
              >
                Fast Food
              </Link>
            </li>
            <li className="w-full">
              <button
                onClick={toggleMobileCasualDining}
                className="flex justify-between items-center w-full py-2 hover:text-orange-600 transition-colors duration-300"
              >
                Casual Dining
                <span>{isMobileCasualDiningOpen ? "−" : "+"}</span>
              </button>
              {isMobileCasualDiningOpen && (
                <ul className="pl-4 mt-2">
                  <li>
                    <Link
                      to="/starters"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Starters
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mains"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Mains
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/beverages"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Beverages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/desserts"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      Desserts
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full">
              <Link
                to="/cafes-bakeries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-orange-600 transition-colors duration-300"
              >
                Cafés & Bakeries
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/our-chefs"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0); // Force scroll to top
                }}
                className="block py-2 hover:text-orange-600 transition-colors duration-300"
              >
                Our Chefs
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/food-gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-orange-600 transition-colors duration-300"
              >
                Gallery
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-orange-600 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            {/* <li className="w-full">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 hover:text-orange-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      )}

      {/* Search Bar and Dropdown */}
      {isSearchOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md z-[100] md:top-28">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full px-5 py-3 rounded-t-lg bg-white/70 backdrop-blur-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all duration-300 text-lg font-poppins text-gray-900 placeholder-gray-500"
          />
          <ul className="bg-white/70 backdrop-blur-md rounded-b-lg shadow-lg py-2 max-h-64 overflow-y-auto">
            {suggestions.map((category, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(category.path)}
                className="px-5 py-2 text-gray-900 hover:bg-orange-600 hover:text-white transition-colors duration-300 cursor-pointer font-poppins text-base"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;