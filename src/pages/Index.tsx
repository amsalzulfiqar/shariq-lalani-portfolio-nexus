
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
    
    if (scrollToSection === 'contact-form') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          // Find the form section within contact
          const formSection = contactSection.querySelector('h3')?.parentElement;
          
          if (formSection) {
            // Scroll to the form section specifically
            const rect = formSection.getBoundingClientRect();
            const scrollPosition = window.pageYOffset + rect.top - 80;
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            });
          } else {
            // Fallback to the whole contact section
            const rect = contactSection.getBoundingClientRect();
            const scrollPosition = window.pageYOffset + rect.top - 80;
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 500); // Give time for the page to fully render
    } else if (scrollToSection) {
      setTimeout(() => {
        const section = document.getElementById(scrollToSection);
        if (section) {
          // Calculate position with offset
          const rect = section.getBoundingClientRect();
          const scrollPosition = window.pageYOffset + rect.top - 80;
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
        }
      }, 500); // Give time for the page to fully render
    }
    
    // Check for hash in URL (e.g., /#contact)
    if (location.hash) {
      setTimeout(() => {
        const sectionId = location.hash.replace('#', '');
        const section = document.getElementById(sectionId);
        if (section) {
          // If it's the contact section, try to scroll to the form
          if (sectionId === 'contact') {
            const formSection = section.querySelector('h3')?.parentElement;
            
            if (formSection) {
              // Scroll to the form section specifically
              const rect = formSection.getBoundingClientRect();
              const scrollPosition = window.pageYOffset + rect.top - 80;
              window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
              });
              return;
            }
          }
          
          // Default scrolling for other sections
          const rect = section.getBoundingClientRect();
          const scrollPosition = window.pageYOffset + rect.top - 80;
          window.scrollTo({
            top: scrollPosition,
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
