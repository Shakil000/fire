import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/eurofyre-logo-1.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-t from-black/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-2xl p-2 z-10"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="absolute w-full flex justify-center lg:relative lg:w-auto">
            <Link to="/">
              <img src={logo} alt="Eurofyre" className="h-6" />
            </Link>
          </div>

          {/* Mobile Search Icon */}
          <button
            onClick={() => setSearchOpen(true)}
            className="lg:hidden text-2xl p-2 z-10"
            aria-label="Search"
          >
            <FaMagnifyingGlass />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 uppercase text-sm text-white">
            <Link to="/about">About Us</Link>
            <Link to="/system">Systems</Link>
            <Link to="/news">News</Link>
            <Link to="/support-service">Support</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-20 px-4 border-b border-gray-800">
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img src={logo} alt="Eurofyre" className="h-6" />
            </div>

            {/* Search Icon */}
            <button
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
              className="text-2xl"
              aria-label="Search"
            >
              <FaMagnifyingGlass />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col mt-4">
            {[
              { name: "ABOUT US", to: "/about" },
              { name: "SYSTEMS", to: "/system" },
              { name: "NEWS", to: "/news" },
              { name: "SUPPORT & SERVICES", to: "/support-service" },
              { name: "CONTACT", to: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="w-full py-5 px-4 text-white uppercase font-semibold border-b border-gray-800 hover:bg-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* MOBILE SEARCH OVERLAY */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-start pt-24 px-4">
          <div className="relative w-full bg-gray-200 rounded-lg">
            <input
              autoFocus
              type="text"
              placeholder="Search"
              className="w-full h-14 pl-6 pr-12 rounded-lg text-lg text-gray-800 bg-transparent focus:outline-none"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
