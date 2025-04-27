
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedWork from '@/components/FeaturedWork';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const FeaturedWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-[40vh] relative">
        <div className="absolute inset-0 overflow-hidden">
          <AspectRatio ratio={16 / 9} className="h-full">
            <img 
              src="/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png" 
              alt="Studio equipment" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>
      
      <div className="pt-10" id="featured-work">
        <div className="bg-background">
          <FeaturedWork />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FeaturedWorksPage;
