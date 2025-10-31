import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg sticky top-0 z-50">
            <div className="w-11/12 max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl md:text-2xl font-bold hover:scale-105 transition-transform">
                        CSE @ JNU
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-12">
                        <Link 
                            to="/" 
                            className={`px-3 py-2 rounded-lg transition-all font-medium ${isActive('/') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className={`px-3 py-2 rounded-lg transition-all font-medium ${isActive('/about') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                        >
                            About
                        </Link>
                        <div className="relative group">
                            <button className="px-3 py-2 rounded-lg hover:bg-white/20 transition-all flex items-center gap-1 font-medium">
                                Academics
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <Link to="/classroom" className="block px-4 py-3 hover:bg-purple-100 rounded-t-lg">Classrooms</Link>
                                <Link to="/lab" className="block px-4 py-3 hover:bg-purple-100 rounded-b-lg">Labs</Link>
                            </div>
                        </div>
                        <Link 
                            to="/faculty" 
                            className={`px-3 py-2 rounded-lg transition-all font-medium ${isActive('/faculty') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                        >
                            Faculty
                        </Link>
                        <Link 
                            to="/events" 
                            className={`px-3 py-2 rounded-lg transition-all font-medium ${isActive('/events') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                        >
                            Events
                        </Link>
                        <Link 
                            to="/gallery" 
                            className={`px-3 py-2 rounded-lg transition-all font-medium ${isActive('/gallery') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                        >
                            Gallery
                        </Link>
                        <Link 
                            to="/contact" 
                            className={`px-3 py-2 rounded-lg transition-all font-medium ${isActive('/contact') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/student-login" className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 transition-all">
                            Student Login
                        </Link>
                        <Link to="/admin" className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all font-semibold">
                            Admin
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
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
                    <div className="lg:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                            <Link 
                                to="/" 
                                className={`px-4 py-2 rounded-lg ${isActive('/') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/about" 
                                className={`px-4 py-2 rounded-lg ${isActive('/about') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <div>
                                <button 
                                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-white/20 flex items-center justify-between"
                                    onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                                >
                                    Academics
                                    <svg className={`w-4 h-4 transition-transform ${isAcademicsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isAcademicsOpen && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        <Link 
                                            to="/classroom" 
                                            className="block px-4 py-2 rounded-lg hover:bg-white/20"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Classrooms
                                        </Link>
                                        <Link 
                                            to="/lab" 
                                            className="block px-4 py-2 rounded-lg hover:bg-white/20"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Labs
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link 
                                to="/faculty" 
                                className={`px-4 py-2 rounded-lg ${isActive('/faculty') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Faculty
                            </Link>
                            <Link 
                                to="/events" 
                                className={`px-4 py-2 rounded-lg ${isActive('/events') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Events
                            </Link>
                            <Link 
                                to="/gallery" 
                                className={`px-4 py-2 rounded-lg ${isActive('/gallery') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Gallery
                            </Link>
                            <Link 
                                to="/contact" 
                                className={`px-4 py-2 rounded-lg ${isActive('/contact') ? 'bg-white text-purple-600' : 'hover:bg-white/20'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="flex flex-col gap-2 mt-4 md:hidden">
                                <Link 
                                    to="/student-login" 
                                    className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 transition-all text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Student Login
                                </Link>
                                <Link 
                                    to="/admin" 
                                    className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all text-center font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Admin
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navber;