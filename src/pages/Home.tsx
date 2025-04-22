import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FishingSpots from '../components/home/FishingSpots';
import UpcomingEvents from '../components/home/UpcomingEvents';
import CommunityFeed from '../components/home/CommunityFeed';
import Newsletter from '../components/home/Newsletter';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <FishingSpots />
      <UpcomingEvents />
      <CommunityFeed />
      <Newsletter />
    </div>
  );
};

export default Home;