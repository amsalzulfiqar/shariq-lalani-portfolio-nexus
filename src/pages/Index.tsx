
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
    
    // Ensure all important sections have IDs
    setTimeout(() => {
      // Make sure all sections have their IDs properly set
      const sections = {
        contact: document.getElementById('contact'),
        spotify: document.getElementById('spotify')
      };
      
      console.log('Available sections after delay:', 
        Object.entries(sections).map(([key, el]) => `${key}: ${!!el}`).join(', ')
      );
      
      // Find section with Contact component by looking for the heading text
      const headings = Array.from(document.querySelectorAll('h2'));
      const contactHeading = headings.find(h => h.textContent?.includes('Get in Touch'));
      
      if (contactHeading) {
        const parentSection = contactHeading.closest('section');
        if (parentSection && parentSection.id !== 'contact') {
          parentSection.id = 'contact';
          console.log('Added ID to contact section via heading match');
        }
      }
      
      // Try by class and position as fallback
      const possibleContactSections = document.querySelectorAll('section.section-padding');
      const lastSection = possibleContactSections[possibleContactSections.length - 1];
      if (lastSection && lastSection.id !== 'contact') {
        lastSection.id = 'contact';
        console.log('Added ID to last section with section-padding class');
      }
    }, 300);
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
