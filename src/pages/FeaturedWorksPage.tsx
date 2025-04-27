
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedWork from '@/components/FeaturedWork';

const FeaturedWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-[50vh] relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png" 
            alt="Studio equipment" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>
      
      <div className="pt-10">
        <div className="bg-background">
          <FeaturedWork />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FeaturedWorksPage;
