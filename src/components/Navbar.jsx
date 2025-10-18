import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  const navItems = [
    {
      name: "Menu",
      path: "/",
      subItems: [
        { name: "Fast Food", path: "/fast-food" },
        { name: "Casual Dining", path: "/casual-dining" },
        { name: "Cafés & Bakeries", path: "/cafes-bakeries" },
        { name: "Starters", path: "/starters" },
        { name: "Mains", path: "/mains" },
        { name: "Beverages", path: "/beverages" },
        { name: "Desserts", path: "/desserts" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Chefs", path: "/our-chefs" },
    { name: "Food Gallery", path: "/food-gallery" },
  ];

  // WhatsApp link for reservations
  const whatsappLink = "https://wa.me/+1234567890?text=I%27d%20like%20to%20reserve%20a%20table%20at%20Maison%20Ember";

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMenuDropdownOpen(false); // Close dropdown when toggling mobile menu
  };

  return (
    <nav className="bg-[#fcf8f3] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* Logo/Restaurant Name - Responsive Font */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#333333]">
              Maison Ember
            </Link>
          </div>

          {/* Navigation Links and Button - Responsive Spacing */}
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            {/* Desktop Nav Links - Show on md+ */}
            <div className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.subItems && handleMouseEnter(setIsMenuDropdownOpen)}
                  onMouseLeave={() => item.subItems && handleMouseLeave(setIsMenuDropdownOpen)}
                >
                  <Link
                    to={item.path}
                    className={`
                      text-sm sm:text-base md:text-lg font-medium transition-colors font-sans py-2 px-1 sm:px-2
                      ${location.pathname === item.path || (item.subItems && item.subItems.some(subItem => location.pathname === subItem.path))
                        ? "text-[#C94B2F] border-b-2 border-[#C94B2F]"
                        : "text-gray-700 hover:text-[#C94B2F]"
                      }
                      relative group
                    `}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                  >
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C94B2F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    ></span>
                  </Link>
                  {item.subItems && isMenuDropdownOpen && (
                    <ul
                      className="absolute left-0 mt-2 w-48 sm:w-52 md:w-56 bg-[#fcf8f3] shadow-lg rounded-md py-2 z-[101] text-gray-700 font-medium font-sans pointer-events-auto"
                      style={{ top: "100%" }}
                      onMouseEnter={() => handleMouseEnter(setIsMenuDropdownOpen)}
                      onMouseLeave={() => handleMouseLeave(setIsMenuDropdownOpen)}
                    >
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={`
                              block px-3 sm:px-4 md:px-5 py-2 text-sm sm:text-base font-sans
                              ${location.pathname === subItem.path ? "text-[#C94B2F]" : "hover:text-[#C94B2F]"}
                              transition-colors duration-300
                            `}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Reserve a Table Button - Responsive Padding */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-[#E55D3A] text-white text-sm sm:text-base font-medium rounded-md shadow-md hover:bg-[#c94b2f] transition-colors font-sans whitespace-nowrap"
            >
              Reserve a Table
            </a>

            {/* Mobile Menu Button - Responsive Icon Size */}
            <button
              className="md:hidden text-gray-700 hover:text-[#C94B2F] transition-colors p-1 sm:p-2"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" /> : <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Responsive Padding & Spacing */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fcf8f3] border-t border-gray-100">
          <ul className="flex flex-col items-start px-3 sm:px-4 py-3 sm:py-4 space-y-1 sm:space-y-2 text-gray-700 font-medium font-sans">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block py-2 sm:py-3 text-base sm:text-lg
                    ${location.pathname === item.path || (item.subItems && item.subItems.some(subItem => location.pathname === subItem.path))
                      ? "text-[#C94B2F]"
                      : "text-gray-700 hover:text-[#C94B2F]"
                    }
                  `}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <ul className="pl-4 sm:pl-6 space-y-1 sm:space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`
                            block py-2 text-sm sm:text-base font-sans
                            ${location.pathname === subItem.path ? "text-[#C94B2F]" : "hover:text-[#C94B2F]"}
                            transition-colors
                          `}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="w-full mt-2 sm:mt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-[#C94B2F] transition-colors font-sans"
              >
                Reserve a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;