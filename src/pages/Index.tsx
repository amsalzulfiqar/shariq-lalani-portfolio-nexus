
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpotifyPlayer from '@/components/SpotifyPlayer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetId = href.includes('#') ? href.split('#')[1] : href.substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 z-0 bg-noise"></div>
      <div className="relative z-10">
        <div className="h-[50vh] relative">
          {/* Background image */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/lovable-uploads/af0cf2f3-9f6b-44b1-ade8-f3ac2b7510b2.png" 
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
                <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Shariq Lalani Music</h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <Hero />
          <About />
          <SpotifyPlayer />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;

