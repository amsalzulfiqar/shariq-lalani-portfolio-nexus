
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Artist from '@/components/Artist';

const BioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-10">Bio</h1>
            
            {/* Bio content will go here */}
            <div className="prose prose-invert max-w-none">
              {/* Moving the Artist component (Music Videos) to Bio page */}
              <Artist />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default BioPage;
