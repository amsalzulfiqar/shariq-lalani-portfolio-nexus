
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpotifyPlayer from '@/components/SpotifyPlayer';
import Logo from '@/components/Logo';

const Index = () => {
  // Force scroll to top on mount as a backup to the global ScrollToTop component
  React.useEffect(() => {
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <SpotifyPlayer id="spotify" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
