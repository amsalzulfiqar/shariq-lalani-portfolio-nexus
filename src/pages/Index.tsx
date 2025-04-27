
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpotifyPlayer from '@/components/SpotifyPlayer';

const Index = () => {
  // Fix scrolling issues by ensuring body overflow is properly handled
  useEffect(() => {
    // Reset any overflow issues when component mounts
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    
    return () => {
      // Cleanup
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <Hero />
      <About />
      <SpotifyPlayer id="spotify" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
