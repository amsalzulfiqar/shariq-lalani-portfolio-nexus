
import React from 'react';
import Navbar from '@/components/Navbar';

const ServicesHero = () => {
  return (
    <div className="h-[50vh] md:h-[70vh] relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile image */}
        <img 
          src="/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png" 
          alt="Shariq in studio" 
          className="w-full h-full object-cover object-[center_30%] md:hidden"
        />
        {/* Desktop image */}
        <img 
          src="/lovable-uploads/2c4cef90-79d6-44c2-82ed-4722562df6d7.png" 
          alt="Shariq working in studio" 
          className="hidden md:block w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
};

export default ServicesHero;
