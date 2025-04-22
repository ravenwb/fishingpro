import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockFishingEvents } from '../../data/mockData';
import Card from '../ui/Card';
import Button from '../ui/Button';

const UpcomingEvents: React.FC = () => {
  // Format date
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-gray-600 mt-2">Join the fishing community at these exciting events</p>
          </div>
          <Link to="/events" className="mt-4 md:mt-0 flex items-center text-blue-800 hover:text-blue-900 font-medium transition-colors">
            View All Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFishingEvents.map(event => (
            <Card key={event.id} hoverEffect className="h-full flex flex-col">
              <Card.Image 
                src={event.image} 
                alt={event.name} 
                aspectRatio="video"
              />
              <Card.Body className="flex-grow">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-blue-800 mr-2" />
                  <span className="text-sm text-gray-600">{formatDate(event.date)}</span>
                </div>
                <Card.Title>{event.name}</Card.Title>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Organized by: <span className="font-medium">{event.organizer}</span></span>
                    {event.price > 0 ? (
                      <span className="font-medium text-blue-900">${event.price.toFixed(2)}</span>
                    ) : (
                      <span className="text-green-600 font-medium">Free</span>
                    )}
                  </div>
                  <Button variant="primary" size="sm" fullWidth>
                    Register Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;