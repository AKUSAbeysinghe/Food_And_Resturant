import React from 'react';

// Icons for the contact information
import { MapPin, Phone, Mail, Clock } from 'lucide-react'; 

const Footer = () => {
  return (
    // Footer container with the dark brown background color
    <footer className="bg-[#412E27] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          {/* Column 1: Logo and Description */}
          <div>
            <h3 className="text-4xl font-serif text-white mb-4">
              Maison Ember
            </h3>
            <p className="text-base font-light text-gray-300 mb-6 max-w-xs">
              A contemporary dining room celebrating wood-fired cuisine, crafted cocktails, and intimate hospitality in the heart of the city.
            </p>
            
            {/* Social Links */}
            <div className="space-y-1 text-base text-gray-300">
              <p>
                <span className="font-medium text-white">Instagram</span> <a href="#" className="hover:text-[#E55D3A] transition-colors">@maisonember</a>
              </p>
              <p>
                <span className="font-medium text-white">Facebook</span> <a href="#" className="hover:text-[#E55D3A] transition-colors">Maison Ember</a>
              </p>
            </div>
          </div>
          
          {/* Column 2: Visit & Contact Info */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">
              Visit
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#E55D3A] flex-shrink-0 mt-1 mr-3" />
                <address className="not-italic text-base font-light text-gray-300">
                  415 Ember Lane<br />
                  Portland, OR 97205
                </address>
              </div>
              
              {/* Phone */}
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#E55D3A] flex-shrink-0 mr-3" />
                <a href="tel:+15558601234" className="text-base font-light text-gray-300 hover:text-[#E55D3A] transition-colors">
                  +1 (555) 860-1234
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#E55D3A] flex-shrink-0 mr-3" />
                <a href="mailto:hello@maisonember.com" className="text-base font-light text-gray-300 hover:text-[#E55D3A] transition-colors">
                  hello@maisonember.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 3: Hours */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">
              Hours
            </h3>
            <div className="space-y-3 text-base font-light text-gray-300">
              <p>
                <span className="font-medium text-white">Tuesday – Thursday:</span> 5pm – 10pm
              </p>
              <p>
                <span className="font-medium text-white">Friday – Saturday:</span> 5pm – 11pm
              </p>
              <p>
                <span className="font-medium text-white">Sunday:</span> 4pm – 9pm
              </p>
              <p className="pt-2 italic text-sm text-gray-400">
                Closed Mondays for chef tastings.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-700 pt-6 pb-6">
          <p className="text-center text-sm text-gray-400">
            © 2025 Maison Ember. Crafted with seasonal ingredients.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
