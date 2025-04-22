import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Fish, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 text-white fill-current"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".5"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Fish className="w-8 h-8 text-teal-400" />
              <span className="ml-2 font-bold text-xl text-white">FishingPro</span>
            </Link>
            <p className="text-blue-100 mb-4">
              Your one-stop destination for all fishing needs. Quality gear, community, and expert advice.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-blue-100">123 Fishing Way, Seattle, WA 98101</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" />
                <span className="text-blue-100">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" />
                <span className="text-blue-100">info@fishingpro.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/spots" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Fishing Spots
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/rods" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Fishing Rods
                </Link>
              </li>
              <li>
                <Link to="/shop/reels" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Fishing Reels
                </Link>
              </li>
              <li>
                <Link to="/shop/lines" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Fishing Lines
                </Link>
              </li>
              <li>
                <Link to="/shop/lures" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Lures & Baits
                </Link>
              </li>
              <li>
                <Link to="/shop/accessories" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/shop/apparel" className="text-blue-100 hover:text-teal-400 transition-colors">
                  Apparel
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Join Our Community</h3>
            <p className="text-blue-100 mb-4">
              Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-teal-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-teal-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-teal-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-teal-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            &copy; {new Date().getFullYear()} FishingPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-blue-100 hover:text-teal-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-blue-100 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/shipping" className="text-blue-100 hover:text-teal-400 text-sm transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;