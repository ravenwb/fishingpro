import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../../data/mockData';
import ProductCard from '../product/ProductCard';

const FeaturedProducts: React.FC = () => {
  // Filter products that are featured or have a discount
  const featuredProducts = mockProducts.filter(product => product.featured || product.discountPrice);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-2">Top-rated fishing gear for the serious angler</p>
          </div>
          <Link to="/shop" className="mt-4 md:mt-0 flex items-center text-blue-800 hover:text-blue-900 font-medium transition-colors">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;