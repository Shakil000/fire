import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/eurofyre-logo-1.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  // Set initial state to false (closed) for a normal application
  const [open, setOpen] = useState(false);

  // --- Utility Component for the Mobile Menu Link Style ---
  const MenuLink = ({ to, children }) => (
    <Link
      onClick={() => setOpen(false)}
      to={to}
      className="block w-full py-5 px-4 text-white text-lg font-semibold uppercase tracking-wider border-b border-gray-800 transition-colors duration-200 hover:bg-gray-800"
    >
      {children}
    </Link>
  );
  // --------------------------------------------------

  return (
    <header className="sticky top-0 z-50 bg-gradient from-black/70 via-black/20 to-transparent text-white">
      
      {/* 1. CLOSED HEADER (Mobile & Desktop) */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Mobile Menu Button (Left Side on Mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl p-2 focus:outline-none z-10"
            aria-label="Open menu"
          >
            {/* Show Hamburger icon when menu is closed */}
            ☰
          </button>
          
          {/* Logo (Centered on Mobile, Left on Desktop) */}
          <div className="flex items-center absolute w-full justify-center lg:relative lg:w-auto lg:justify-start">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Eurofyre" className="h-6 w-auto filter lg:filter-none" />
            </Link>
          </div>

          {/* Search Icon (Right Side on Mobile) */}
          <button className="lg:hidden text-2xl p-2 focus:outline-none z-10" aria-label="Search">
            {/* Using a magnifying glass icon */}
            <FaMagnifyingGlass /> 
          </button>

          {/* Desktop Navigation (Right Side) */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold uppercase">
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/system" className="hover:text-gray-300">Systems</Link>
            <Link to="/news" className="hover:text-gray-300">News</Link>
            <Link to="/support-service" className="hover:text-gray-300">Support & Services</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            {/* Added a search icon for desktop as well for completeness */}
            {/* <button className="text-2xl hover:text-gray-300" aria-label="Search">&#x1F50D;</button> */}
          </nav>
          
        </div>
      </div>

      {/* 2. OPEN MOBILE MENU (Full-Screen Overlay matching the image) */}
      {open && (
        <div className="fixed inset-0 bg-black text-white z-50 overflow-y-auto">
          
          {/* Top Bar of the Open Menu (Matches image layout: Close | Logo | Search) */}
          <div className="flex items-center justify-between h-20 px-4 border-b border-gray-800">
            
            {/* Close Icon (X) on the left */}
            <button
              onClick={() => setOpen(false)}
              className="text-3xl p-2 focus:outline-none"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Logo in the center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <img src={logo} alt="Eurofyre LIMITED" className="h-6 w-auto filter" /> 
            </div>

            {/* Search Icon on the right */}
            <button className="text-2xl p-2 focus:outline-none" aria-label="Search">
              <FaMagnifyingGlass />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col">
            <MenuLink to="/about">About Us</MenuLink>
            <MenuLink to="/system">Systems</MenuLink>
            <MenuLink to="/news">News</MenuLink>
            <MenuLink to="/support-service">Support & Services</MenuLink>
            <MenuLink to="/contact">Contact</MenuLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;