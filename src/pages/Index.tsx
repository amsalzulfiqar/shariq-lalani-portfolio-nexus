
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpotifyPlayer from '@/components/SpotifyPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        <Navbar />
        <div className="mt-0"> {/* Removed extra spacing since navbar is not fixed */}
          <Hero />
          <About />
          <SpotifyPlayer id="spotify" />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
