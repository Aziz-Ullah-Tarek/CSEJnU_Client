import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-cyan-600 via-yellow-300 to-blue-400 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:opacity-90 transition">
            CSE @ JNU
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`hover:opacity-80 transition ${isActive('/') ? 'font-bold' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:opacity-80 transition ${isActive('/about') ? 'font-bold' : ''}`}>
              About
            </Link>
            
            {/* Academics Dropdown */}
            <div className="relative group">
              <button className="hover:opacity-80 transition flex items-center gap-1">
                Booking
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/classroom" className="block px-4 py-2 hover:bg-purple-100 rounded-t-lg">
                  Classrooms
                </Link>
                <Link to="/lab" className="block px-4 py-2 hover:bg-purple-100 rounded-b-lg">
                  Labs
                </Link>
              </div>
            </div>

            <Link to="/faculty" className={`hover:opacity-80 transition ${isActive('/faculty') ? 'font-bold' : ''}`}>
              Faculty
            </Link>
            <Link to="/events" className={`hover:opacity-80 transition ${isActive('/events') ? 'font-bold' : ''}`}>
              Events
            </Link>
            <Link to="/gallery" className={`hover:opacity-80 transition ${isActive('/gallery') ? 'font-bold' : ''}`}>
              Gallery
            </Link>
            <Link to="/contact" className={`hover:opacity-80 transition ${isActive('/contact') ? 'font-bold' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Login Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/student-login" className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-purple-600 transition">
              Login
            </Link>
            <Link to="/admin" className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition font-semibold">
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-white/20 pt-4">
            <Link to="/" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/classroom" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              Classrooms
            </Link>
            <Link to="/lab" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              Labs
            </Link>
            <Link to="/faculty" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              Faculty
            </Link>
            <Link to="/events" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              Events
            </Link>
            <Link to="/gallery" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link to="/contact" className="block py-2 hover:bg-white/10 rounded px-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="pt-2 space-y-2">
              <Link to="/student-login" className="block py-2 border border-white rounded-lg text-center" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/admin" className="block py-2 bg-white text-purple-600 rounded-lg text-center font-semibold" onClick={() => setIsOpen(false)}>
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;
