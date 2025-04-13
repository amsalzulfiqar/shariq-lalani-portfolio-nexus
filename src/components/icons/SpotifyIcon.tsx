
import React from 'react';

interface SpotifyIconProps {
  className?: string;
  size?: number | string;
}

const SpotifyIcon: React.FC<SpotifyIconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 11.5a4.8 4.7 0 0 1 3.4-1.4c1.9 0 3.7.9 4.6 2.4M8 14.3a4.5 4.8 0 0 1 4-1.6c1.6 0 3.2.8 3.9 2" />
      <path d="M9 16.7c.9-.4 2-.6 2.9-.5 1 0 1.8.2 2.3.7" />
    </svg>
  );
};

export default SpotifyIcon;
