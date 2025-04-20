import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Square } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    console.log("Work with Me button clicked");
    
    // Find the contact section
    const contactSection = document.getElementById('contact');
    console.log("Contact section found:", contactSection);
    
    if (contactSection) {
      // Improved scrolling implementation with better header adjustment
      const headerHeight = 80; // Height of the fixed header
      
      // Get the element's position relative to the viewport
      const elementPosition = contactSection.getBoundingClientRect().top;
      // Add current scroll position to get absolute position
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Added extra 20px padding
      
      console.log("Scrolling to absolute position:", offsetPosition);
      
      // Use scrollTo for consistent behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error("Contact section not found in the DOM");
      // Ultimate fallback - just go to bottom of page
      window.scrollTo({
        top: document.body.scrollHeight - 300, // Scroll to near bottom but not completely
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-screen h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="animate-pulse h-16 w-16 rounded-full bg-gray-700"></div>
          </div>
        )}
        <img 
          src="/lovable-uploads/21005048-580b-49bd-9bbb-5e9f1335a17c.png" 
          alt="Musician playing piano in recording studio"
          className={`w-full h-full object-cover object-center ${!imageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className={`text-4xl md:text-5xl font-bold text-white/60 mb-8 opacity-0 animate-fade-in ${isMobile ? 'text-2xl' : ''}`}
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <div className="flex items-center justify-center space-x-4 flex-nowrap">
            <span>Artist</span>
            <Square size={8} className="text-white/60 fill-white/60" />
            <span>Producer</span>
            <Square size={8} className="text-white/60 fill-white/60" />
            <span>Engineer</span>
          </div>
        </h1>

        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-[#F97316] hover:bg-orange-600 text-black font-medium px-8"
          >
            <a 
              href="https://open.spotify.com/artist/6XochsfQsPMfehEQhWDDaz" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Listen to My Music
            </a>
          </Button>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-black/80 px-8 border-none"
            onClick={scrollToContact}
          >
            Work with Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
