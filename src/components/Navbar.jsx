import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, User, Menu, X } from 'lucide-react';

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md' : 'bg-transparent'
  }`;

  const linkClasses = (path) => 
    `block py-2 px-4 transition-colors duration-200 
    ${location.pathname === path 
      ? 'text-teal-600 font-medium' 
      : 'text-gray-700 hover:text-teal-600'
    }
    md:py-4`;

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="text-teal-600" size={24} />
            <span className="text-xl font-bold text-gray-800">Event Manager</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className={linkClasses('/')}>
              Upcoming Events
            </Link>
            <Link to="/my-events" className={linkClasses('/my-events')}>
              My Events
            </Link>
            <Link
              to="/my-events"
              className="flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
            >
              <User size={18} />
              <span>Account</span>
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-2">
            <Link 
              to="/" 
              className={linkClasses('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming Events
            </Link>
            <Link 
              to="/my-events" 
              className={linkClasses('/my-events')}
              onClick={() => setIsMenuOpen(false)}
            >
              My Events
            </Link>
            <div className="py-2 mt-2">
              <Link
                to="/my-events"
                className="flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={18} />
                <span>Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;