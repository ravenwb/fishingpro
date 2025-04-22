import React from 'react';
import { cn } from '../../utils/helpers';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  hoverEffect = false
}) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-lg overflow-hidden',
        'border border-gray-100',
        'shadow-sm',
        hoverEffect && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  className
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: ''
  };

  return (
    <div className={cn('overflow-hidden', aspectRatioClasses[aspectRatio])}>
      <img 
        src={src} 
        alt={alt} 
        className={cn(
          'w-full h-full object-cover transition-transform duration-500 hover:scale-105',
          className
        )} 
      />
    </div>
  );
};

interface CardBodyProps {
  className?: string;
  children: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({
  className,
  children
}) => {
  return (
    <div className={cn('p-4', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({
  className,
  children
}) => {
  return (
    <h3 className={cn('font-semibold text-lg text-gray-900 mb-2', className)}>
      {children}
    </h3>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children
}) => {
  return (
    <div className={cn('px-4 py-3 bg-gray-50 border-t border-gray-100', className)}>
      {children}
    </div>
  );
};

Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Footer = CardFooter;

export default Card;