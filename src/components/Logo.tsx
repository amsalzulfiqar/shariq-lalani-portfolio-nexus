
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/lovable-uploads/877d2538-ed36-47ac-8ef9-c7f37bbab92f.png" 
        alt="Shariq Lalani Logo"
        className="h-16 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
