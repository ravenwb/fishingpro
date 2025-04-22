import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="water-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 25C50 25 50 75 100 75C150 75 150 25 200 25L200 100C150 100 150 150 100 150C50 150 50 100 0 100Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0 75C50 75 50 125 100 125C150 125 150 75 200 75L200 150C150 150 150 200 100 200C50 200 50 150 0 150Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#water-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 pt-32 md:py-24 md:pt-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Find Your <span className="text-teal-400">Perfect Catch</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
              Join thousands of fishing enthusiasts. Discover premium gear, connect with other anglers, and find the best fishing spots.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
              >
                Join Community
              </Button>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-8">
              <div>
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-blue-200">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold">15k+</p>
                <p className="text-blue-200">Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-blue-200">Fishing Spots</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img 
              src="https://images.pexels.com/photos/4124158/pexels-photo-4124158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Fisherman with fishing rod by the lake" 
              className="rounded-lg shadow-2xl object-cover object-center h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-start">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="User Avatar" 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Alex J. caught a 24" bass!</p>
                  <p className="text-gray-600 text-sm">Lake Washington, 2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none transform w-full">
        <svg 
          className="relative block w-full h-16 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
            fill="currentColor" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;