
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Artist from '@/components/Artist';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ArtistPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        <div className="h-[50vh] relative">
          <div className="absolute inset-0 overflow-hidden">
            <AspectRatio ratio={16 / 9} className="h-full">
              <img 
                src="/lovable-uploads/4ded3494-a7a7-48dc-b3e6-efbbaf0d51e1.png" 
                alt="Shariq playing piano" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10">
            <Navbar />
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
