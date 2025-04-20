
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpotifyPlayer from '@/components/SpotifyPlayer';
import Logo from '@/components/Logo';

const Index = () => {
  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo(0, 0);
    
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

    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          // Event cleanup
        });
      });
    };
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
