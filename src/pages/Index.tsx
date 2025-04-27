
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpotifyPlayer from '@/components/SpotifyPlayer';

const Index = () => {
  const location = useLocation();

  // Handle scroll to section when page loads
  useEffect(() => {
    // Check if there's a scrollTo parameter in the URL
    const params = new URLSearchParams(location.search);
    const scrollToSection = params.get('scrollTo');
    
    if (scrollToSection) {
      setTimeout(() => {
        const section = document.getElementById(scrollToSection);
        if (section) {
          // Scroll to the section with an offset to bring it up from the bottom
          const offset = 100; // Adjust this value to control how far from the top the section appears
          const elementPosition = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }, 500); // Give time for the page to fully render
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none"></div>
      <Hero />
      <div className="relative z-10">
        <About />
        <SpotifyPlayer id="spotify" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
