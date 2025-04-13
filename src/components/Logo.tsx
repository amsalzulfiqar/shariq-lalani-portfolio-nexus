
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  fixed?: boolean;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size?: 'small' | 'medium' | 'large';
  zIndex?: number;
}

const Logo = ({
  className = '',
  fixed = false,
  position = { top: '4', left: '4' },
  size = 'medium',
  zIndex = 50
}: LogoProps) => {
  // Determine size class based on prop
  const sizeClass = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16'
  }[size];
  
  // Build position classes
  const positionClasses = fixed ? 
    `fixed ${position.top ? `top-${position.top}` : ''} ${position.left ? `left-${position.left}` : ''} ${position.right ? `right-${position.right}` : ''} ${position.bottom ? `bottom-${position.bottom}` : ''}` :
    '';
  
  return (
    <Link 
      to="/" 
      className={`block ${positionClasses} ${zIndex ? `z-${zIndex}` : ''} ${className}`}
    >
      <img 
        src="/lovable-uploads/dc174800-b0fc-4a75-9d17-4cbe25413fd2.png" 
        alt="Shariq Lalani Logo"
        className={`${sizeClass} w-auto object-contain`}
      />
    </Link>
  );
};

export default Logo;
