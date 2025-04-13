
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
        
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-10">Artist</h1>
            
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg">
                Explore Shariq's musical journey through his original compositions, collaborations, and performances. This showcase highlights his versatility as an artist across various genres and contexts.
              </p>
            </div>
            
            {/* Music Videos section (moved from Bio page) */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-10">Music Videos</h2>
              <Artist />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default ArtistPage;
