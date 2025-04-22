import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockFishingSpots } from '../../data/mockData';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const FishingSpots: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Popular Fishing Spots</h2>
            <p className="text-gray-600 mt-2">Discover the best locations to cast your line</p>
          </div>
          <Link to="/spots" className="mt-4 md:mt-0 flex items-center text-blue-800 hover:text-blue-900 font-medium transition-colors">
            View All Spots
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFishingSpots.map(spot => (
            <Card key={spot.id} hoverEffect className="h-full flex flex-col">
              <Card.Image 
                src={spot.image} 
                alt={spot.name} 
                aspectRatio="video"
              />
              <Card.Body className="flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Card.Title>{spot.name}</Card.Title>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{spot.location}</span>
                    </div>
                  </div>
                  <Badge variant={
                    spot.difficulty === 'beginner' ? 'success' : 
                    spot.difficulty === 'intermediate' ? 'warning' : 
                    'error'
                  }>
                    {spot.difficulty}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{spot.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Fish species:</p>
                  <div className="flex flex-wrap gap-2">
                    {spot.fishTypes.map((fish, index) => (
                      <Badge key={index} variant="outline" size="sm">
                        {fish}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(spot.rating) ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-600">({spot.reviewCount})</span>
                  </div>
                  <Link to={`/spots/${spot.id}`} className="text-blue-800 hover:text-blue-900 font-medium transition-colors text-sm">
                    View Details
                  </Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FishingSpots;