
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
    
    // Make sure all sections have their IDs properly set
    const sections = {
      contact: document.getElementById('contact'),
      spotify: document.getElementById('spotify'),
      about: document.querySelector('section:nth-child(3)') // About is usually the 3rd section
    };
    
    console.log('Available sections on mount:', 
      Object.entries(sections).map(([key, el]) => `${key}: ${!!el}`).join(', ')
    );
    
    // Ensure contact section has ID if it exists but ID is missing
    const possibleContactSection = document.querySelector('.section-padding:last-of-type:not(#contact)');
    if (possibleContactSection && !sections.contact) {
      console.log('Found contact section without ID, adding ID');
      possibleContactSection.id = 'contact';
    }
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
