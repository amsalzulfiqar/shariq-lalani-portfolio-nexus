
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Artist from '@/components/Artist';

const ArtistPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        {/* Hero section with reduced height */}
        <div className="h-[50vh] relative">
          {/* Background image */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/lovable-uploads/efe1c634-276d-42b7-8c8b-42eb649ad761.png" 
              alt="Artist background" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Navigation */}
          <div className="relative z-10">
            <Navbar />
            
            {/* Hero content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
              <div className="container-custom">
                <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Feel. Groove. Repeat.</h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="py-12">
          <div className="container-custom">
            <p className="text-lg md:text-xl text-center mx-auto max-w-3xl mb-12">
              Explore Shariq's musical journey through his original compositions, collaborations, and performances. This showcase highlights his versatility as an artist across various genres and contexts.
            </p>
            <Artist />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default ArtistPage;
