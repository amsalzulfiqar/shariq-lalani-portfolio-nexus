
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/lovable-uploads/c0dc08e5-34f7-44c1-835e-2acbf8405179.png" 
        alt="Shariq Lalani Logo"
        className="h-16 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
