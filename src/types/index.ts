// Common types used throughout the application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'vendor' | 'customer';
  avatar?: string;
  bio?: string;
  location?: string;
  followers?: number;
  following?: number;
  joinedDate: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  tags: string[];
  vendorId: string;
  vendorName: string;
  rating: number;
  reviewCount: number;
  stock: number;
  featured?: boolean;
  specifications?: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  createdAt: Date;
}

export interface FishingSpot {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  fishTypes: string[];
  bestSeasons: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  addedBy: string;
  rating: number;
  reviewCount: number;
}

export interface FishingEvent {
  id: string;
  name: string;
  description: string;
  location: string;
  date: Date;
  image: string;
  organizer: string;
  registrationLink?: string;
  price?: number;
}