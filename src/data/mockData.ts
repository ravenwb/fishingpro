// Mock data for development purposes
import { Product, Post, User, FishingSpot, FishingEvent } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@fishingpro.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Fishing enthusiast for over 20 years. Love to share my knowledge with beginners.',
    location: 'Seattle, WA',
    followers: 2456,
    following: 345,
    joinedDate: new Date('2020-01-15')
  },
  {
    id: '2',
    name: 'Marina Coast',
    email: 'marina@fishingpro.com',
    role: 'vendor',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Owner of CoastLine Fishing Gear. Quality products for serious anglers.',
    location: 'Miami, FL',
    followers: 1286,
    following: 187,
    joinedDate: new Date('2021-03-22')
  },
  {
    id: '3',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'customer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Weekend fishing hobbyist looking to up my game.',
    location: 'Portland, OR',
    followers: 54,
    following: 112,
    joinedDate: new Date('2022-08-10')
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Pro Angler Fishing Rod',
    description: 'High-quality carbon fiber fishing rod designed for professional anglers. Features a comfortable grip and excellent balance.',
    price: 199.99,
    discountPrice: 179.99,
    images: [
      'https://images.pexels.com/photos/1321646/pexels-photo-1321646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1321645/pexels-photo-1321645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Rods',
    subcategory: 'Casting Rods',
    tags: ['professional', 'carbon fiber', 'freshwater'],
    vendorId: '2',
    vendorName: 'CoastLine Fishing Gear',
    rating: 4.8,
    reviewCount: 124,
    stock: 45,
    featured: true,
    specifications: {
      'Length': '7\'6"',
      'Weight': '4.6 oz',
      'Material': 'Carbon Fiber',
      'Action': 'Fast',
      'Power': 'Medium Heavy'
    },
    createdAt: new Date('2023-06-12'),
    updatedAt: new Date('2023-06-12')
  },
  {
    id: '2',
    name: 'DeepSea Spinning Reel',
    description: 'Durable spinning reel with 10 ball bearings for ultra-smooth performance. Perfect for saltwater fishing.',
    price: 159.99,
    images: [
      'https://images.pexels.com/photos/1321637/pexels-photo-1321637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Reels',
    subcategory: 'Spinning Reels',
    tags: ['saltwater', 'heavy-duty', 'bearings'],
    vendorId: '2',
    vendorName: 'CoastLine Fishing Gear',
    rating: 4.6,
    reviewCount: 89,
    stock: 32,
    specifications: {
      'Gear Ratio': '6.2:1',
      'Weight': '8.2 oz',
      'Max Drag': '30 lbs',
      'Line Capacity': '12/220 lb/yds',
      'Bearings': '10+1'
    },
    createdAt: new Date('2023-05-18'),
    updatedAt: new Date('2023-05-18')
  },
  {
    id: '3',
    name: 'OceanMaster Fishing Line',
    description: 'Ultra-strong braided fishing line that resists abrasion and provides superior knot strength.',
    price: 29.99,
    discountPrice: 24.99,
    images: [
      'https://images.pexels.com/photos/1321643/pexels-photo-1321643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Lines',
    tags: ['braided', 'saltwater', 'strong'],
    vendorId: '2',
    vendorName: 'CoastLine Fishing Gear',
    rating: 4.7,
    reviewCount: 215,
    stock: 120,
    specifications: {
      'Test': '30 lb',
      'Length': '300 yds',
      'Material': 'Braided Polyethylene',
      'Color': 'Green'
    },
    createdAt: new Date('2023-07-05'),
    updatedAt: new Date('2023-07-05')
  },
  {
    id: '4',
    name: 'Bass Hunter Lure Set',
    description: 'Collection of 10 premium lures designed specifically for bass fishing in various conditions.',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/5859346/pexels-photo-5859346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Lures',
    subcategory: 'Bass Lures',
    tags: ['bass', 'freshwater', 'set'],
    vendorId: '2',
    vendorName: 'CoastLine Fishing Gear',
    rating: 4.5,
    reviewCount: 76,
    stock: 28,
    specifications: {
      'Count': '10 pieces',
      'Types': 'Crankbaits, Spinners, Soft Baits',
      'Target Species': 'Bass',
      'Case Included': 'Yes'
    },
    createdAt: new Date('2023-08-20'),
    updatedAt: new Date('2023-08-20')
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Alex Johnson',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'Just caught this amazing 24" bass at Lake Washington! The Pro Angler rod made it so easy.',
    images: ['https://images.pexels.com/photos/2748612/pexels-photo-2748612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    likes: 143,
    comments: 32,
    createdAt: new Date('2023-09-15T14:23:00')
  },
  {
    id: '2',
    userId: '3',
    userName: 'John Smith',
    userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'First time using the DeepSea Spinning Reel today. Caught 5 fish and it performed flawlessly! Highly recommend to any weekend angler.',
    likes: 56,
    comments: 8,
    createdAt: new Date('2023-09-14T09:45:00')
  },
  {
    id: '3',
    userId: '2',
    userName: 'Marina Coast',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: 'New shipment of OceanMaster lines just arrived at the shop! Special discount for community members - use code FISH25 at checkout.',
    images: ['https://images.pexels.com/photos/1321643/pexels-photo-1321643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    likes: 87,
    comments: 14,
    createdAt: new Date('2023-09-12T11:32:00')
  }
];

export const mockFishingSpots: FishingSpot[] = [
  {
    id: '1',
    name: 'Lake Washington',
    location: 'Seattle, WA',
    description: 'Large freshwater lake with excellent bass and trout fishing opportunities. Multiple access points and boat launches available.',
    image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    fishTypes: ['Bass', 'Trout', 'Perch'],
    bestSeasons: ['Spring', 'Summer'],
    difficulty: 'beginner',
    addedBy: 'Alex Johnson',
    rating: 4.6,
    reviewCount: 87
  },
  {
    id: '2',
    name: 'Biscayne Bay',
    location: 'Miami, FL',
    description: 'Incredible saltwater fishing destination with a variety of fish species. Great for both shore and boat fishing.',
    image: 'https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    fishTypes: ['Tarpon', 'Snook', 'Bonefish', 'Permit'],
    bestSeasons: ['Fall', 'Winter'],
    difficulty: 'intermediate',
    addedBy: 'Marina Coast',
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: '3',
    name: 'Columbia River',
    location: 'Portland, OR',
    description: 'Famous for its salmon and steelhead runs. One of the premier fishing destinations in the Pacific Northwest.',
    image: 'https://images.pexels.com/photos/34392/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    fishTypes: ['Salmon', 'Steelhead', 'Sturgeon'],
    bestSeasons: ['Summer', 'Fall'],
    difficulty: 'advanced',
    addedBy: 'John Smith',
    rating: 4.7,
    reviewCount: 92
  }
];

export const mockFishingEvents: FishingEvent[] = [
  {
    id: '1',
    name: 'Annual Bass Tournament',
    description: 'Join us for the biggest bass tournament of the year! Cash prizes for the top three winners.',
    location: 'Lake Washington, Seattle, WA',
    date: new Date('2023-10-15'),
    image: 'https://images.pexels.com/photos/4124167/pexels-photo-4124167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    organizer: 'Northwest Fishing Club',
    registrationLink: 'https://example.com/bass-tournament',
    price: 75
  },
  {
    id: '2',
    name: 'Saltwater Fishing Workshop',
    description: 'Learn techniques for successful saltwater fishing from expert anglers. Equipment provided.',
    location: 'Marina Bay, Miami, FL',
    date: new Date('2023-11-05'),
    image: 'https://images.pexels.com/photos/4127333/pexels-photo-4127333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    organizer: 'CoastLine Fishing Gear',
    registrationLink: 'https://example.com/saltwater-workshop',
    price: 120
  },
  {
    id: '3',
    name: 'Family Fishing Day',
    description: 'A free event for families to introduce children to fishing. Equipment and guidance provided.',
    location: 'Columbia River, Portland, OR',
    date: new Date('2023-10-28'),
    image: 'https://images.pexels.com/photos/1670177/pexels-photo-1670177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    organizer: 'Portland Parks & Recreation',
    registrationLink: 'https://example.com/family-fishing',
    price: 0
  }
];

// Mock cart data
export const mockCart: CartItem[] = [
  {
    productId: '1',
    quantity: 1,
    product: mockProducts[0]
  },
  {
    productId: '3',
    quantity: 2,
    product: mockProducts[2]
  }
];