import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Fish, ShoppingCart, User, Menu, X, Search, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Fish className={`w-8 h-8 ${isScrolled ? 'text-blue-900' : 'text-blue-800'}`} />
            <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-blue-900' : 'text-blue-800'}`}>
              FishingPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/shop" className={`px-3 py-2 rounded-md text-sm font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-800 hover:text-blue-700'
            }`}>
              Shop
            </Link>
            <Link to="/spots" className={`px-3 py-2 rounded-md text-sm font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-800 hover:text-blue-700'
            }`}>
              Fishing Spots
            </Link>
            <Link to="/events" className={`px-3 py-2 rounded-md text-sm font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-800 hover:text-blue-700'
            }`}>
              Events
            </Link>
            <Link to="/community" className={`px-3 py-2 rounded-md text-sm font-medium ${
              isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-gray-800 hover:text-blue-700'
            }`}>
              Community
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex relative mx-4 flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search for products, spots, events..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/wishlist" className="text-gray-700 hover:text-blue-800">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-800 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-coral-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="/profile">
              <Button size="sm" variant="outline" leftIcon={<User className="h-4 w-4" />}>
                Account
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-blue-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 absolute left-4 right-4 z-50">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-2">
              <Link 
                to="/shop" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/spots" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fishing Spots
              </Link>
              <Link 
                to="/events" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/community" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between">
                <Link 
                  to="/wishlist" 
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Link>
                <Link 
                  to="/cart" 
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart (2)
                </Link>
              </div>
              <div className="pt-2">
                <Link 
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button fullWidth leftIcon={<User className="h-4 w-4" />}>
                    My Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;