import React, { useState } from 'react';
import { Navbar, Dropdown } from 'flowbite-react';

const AdminVerifierNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <Navbar fluid className="px-4 py-2.5 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <span className="text-green-800 font-bold text-lg">CREDIT APP</span>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <span className="text-lg">🔔</span>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="text-lg">💬</span>
            </button>
            
            {/* User Dropdown */}
            {/* <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="flex items-center">
                  <span className="text-lg mr-1">👤</span>
                  <span className="text-sm text-gray-600">Verifier</span>
                  <span className="text-xs ml-1">▼</span>
                </div>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Your Account</span>
              </Dropdown.Header>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown> */}
          </div>
        </div>

        {/* Mobile Menu (shown when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <nav className="flex flex-col">
              <a href="#" className="py-2 px-1 text-green-700 font-medium">Home</a>
              <a href="#" className="py-2 px-1 text-gray-600 hover:text-green-700">Payments</a>
              <a href="#" className="py-2 px-1 text-gray-600 hover:text-green-700">Budget</a>
              <a href="#" className="py-2 px-1 text-gray-600 hover:text-green-700">Card</a>
            </nav>
          </div>
        )}
      </Navbar>
    </header>
  );
};

export default AdminVerifierNav;