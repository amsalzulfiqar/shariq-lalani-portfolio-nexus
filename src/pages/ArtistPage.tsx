
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Artist from '@/components/Artist';

const ArtistPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero section with background image */}
        <div 
          className="pt-24 pb-16 bg-cover bg-center relative"
          style={{ 
            backgroundImage: "url('/lovable-uploads/43c57eab-5908-4d4a-8af3-092facebb635.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container-custom relative z-10">
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg md:text-xl text-center mx-auto max-w-3xl">
                Explore Shariq's musical journey through his original compositions, collaborations, and performances. This showcase highlights his versatility as an artist across various genres and contexts.
              </p>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="py-12">
          <div className="container-custom">
            <Artist />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default ArtistPage;
