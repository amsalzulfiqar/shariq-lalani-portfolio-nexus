
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedWork from '@/components/FeaturedWork';

const FeaturedWorksPage = () => {
  // Force scroll to top on mount as a backup to the global ScrollToTop component
  useEffect(() => {
    // Extra aggressive scroll reset
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      const mainContent = document.querySelector('main');
      if (mainContent) mainContent.scrollTop = 0;
    };
    
    // Immediate reset
    resetScroll();
    
    // And with a small delay to ensure it happens after any initial rendering
    setTimeout(resetScroll, 10);
  }, []);

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
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
            <div className="container-custom">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Featured Works</h1>
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
