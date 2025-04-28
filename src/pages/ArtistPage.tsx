
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Artist from '@/components/Artist';

const ArtistPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        {/* Hero section with responsive height */}
        <div className="h-[50vh] md:h-[70vh] relative">
          {/* Background image - mobile */}
          <div className="absolute inset-0 overflow-hidden md:hidden">
            <img 
              src="/lovable-uploads/116d68b0-2138-4bdf-959c-d4a37c50be2f.png" 
              alt="Shariq performing on piano in atmospheric lighting" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Background image - desktop */}
          <div className="absolute inset-0 overflow-hidden hidden md:block">
            <img 
              src="/lovable-uploads/e20a4900-ffe4-48ac-a3d8-5b99ef1f1633.png" 
              alt="Shariq performing on Yamaha piano with atmospheric lighting" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Navigation */}
          <div className="relative z-10">
            <Navbar />
          </div>
        </div>
        
        {/* Content section */}
        <div className="py-12">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Feel. Groove. Repeat.</h2>
              <p className="text-lg md:text-xl text-center mx-auto max-w-3xl">
                Explore Shariq's musical journey through his original compositions, collaborations, and performances. This showcase highlights his versatility as an artist across various genres and contexts.
              </p>
            </div>
            <Artist />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default ArtistPage;
