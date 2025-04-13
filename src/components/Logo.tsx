
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link 
      to="/" 
      className={`fixed top-4 left-4 z-50 block ${className}`}
    >
      <img 
        src="/lovable-uploads/dc174800-b0fc-4a75-9d17-4cbe25413fd2.png" 
        alt="Shariq Lalani Logo"
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
