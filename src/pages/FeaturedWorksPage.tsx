
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10">
          <Navbar />
          
          {/* Removed the large "Featured Works" heading */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
            <div className="container-custom">
              {/* Removed h1 with "Featured Works" */}
            </div>
          </div>
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
