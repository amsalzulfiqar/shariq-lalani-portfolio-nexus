
import React from 'react';
import Navbar from '@/components/Navbar';

const ServicesHero = () => {
  return (
    <div className="h-[40vh] relative">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png" 
          alt="Shariq in studio" 
          className="w-full h-full object-cover object-[center_50%]"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default ServicesHero;
