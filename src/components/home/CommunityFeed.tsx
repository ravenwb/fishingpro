import React from 'react';
import { Heart, MessageCircle, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockPosts } from '../../data/mockData';
import Card from '../ui/Card';

const CommunityFeed: React.FC = () => {
  // Format date
  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Community Feed</h2>
            <p className="text-gray-600 mt-2">See what other anglers are catching and sharing</p>
          </div>
          <Link to="/community" className="mt-4 md:mt-0 flex items-center text-blue-800 hover:text-blue-900 font-medium transition-colors">
            View Full Feed
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.map(post => (
            <Card key={post.id} className="h-full flex flex-col">
              <Card.Body className="pb-2">
                <div className="flex items-center mb-4">
                  <img 
                    src={post.userAvatar || 'https://via.placeholder.com/40'} 
                    alt={post.userName} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{post.userName}</h4>
                    <p className="text-xs text-gray-500">{formatTimeAgo(post.createdAt)}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                {post.images && post.images.length > 0 && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={post.images[0]} 
                      alt="Post" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </Card.Body>
              
              <Card.Footer className="flex items-center justify-between">
                <button className="flex items-center text-gray-600 hover:text-coral-500 transition-colors">
                  <Heart className="w-5 h-5 mr-1" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-800 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                  <Share2 className="w-5 h-5 mr-1" />
                  <span className="text-sm">Share</span>
                </button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeed;