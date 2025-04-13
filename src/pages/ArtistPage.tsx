
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Artist from '@/components/Artist';

const ArtistPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        {/* Hero section with reduced height like in Bio page */}
        <div className="h-[50vh] relative">
          {/* Background image */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/lovable-uploads/4ded3494-a7a7-48dc-b3e6-efbbaf0d51e1.png" 
              alt="Shariq playing piano" 
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
            <div className="text-center mb-12">
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
