import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    name,
    price,
    discountPrice,
    images,
    rating,
    reviewCount,
    category,
    featured
  } = product;

  const hasDiscount = discountPrice !== undefined;
  const discount = hasDiscount ? Math.round(((price - discountPrice) / price) * 100) : 0;

  return (
    <Card hoverEffect className="h-full flex flex-col">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <Card.Image 
            src={images[0]} 
            alt={name} 
            aspectRatio="video"
          />
        </Link>
        {featured && (
          <Badge 
            variant="primary" 
            className="absolute top-3 left-3"
          >
            Featured
          </Badge>
        )}
        {hasDiscount && (
          <Badge 
            variant="accent" 
            className="absolute top-3 right-3"
          >
            -{discount}%
          </Badge>
        )}
        <button 
          className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <Card.Body className="flex-grow flex flex-col">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <Card.Title className="hover:text-blue-800 transition-colors line-clamp-2">
            {name}
          </Card.Title>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="mx-1.5 text-gray-300">|</span>
          <span className="text-sm text-gray-500">{reviewCount} reviews</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center mb-3">
            {hasDiscount ? (
              <>
                <span className="text-xl font-bold text-blue-900">${discountPrice.toFixed(2)}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-xl font-bold text-blue-900">${price.toFixed(2)}</span>
            )}
          </div>
          
          <Button 
            variant="primary" 
            size="sm" 
            fullWidth 
            leftIcon={<ShoppingCart className="w-4 h-4" />}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;