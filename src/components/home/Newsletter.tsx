import React from 'react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fish-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40,10 C60,10 60,30 40,30 C20,30 20,10 40,10 Z" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M40,10 L55,0 L55,20 Z" fill="currentColor" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fish-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with FishingPro</h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to our newsletter for fishing tips, gear reviews, special discounts, and community events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;