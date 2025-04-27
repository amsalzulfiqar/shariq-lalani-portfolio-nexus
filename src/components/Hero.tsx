
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Square } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '@/components/Navbar';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Navigation */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white/60 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4">
            <span>Artist</span>
            <Square size={8} className="hidden md:block text-white/60 fill-white/60" />
            <span>Producer</span>
            <Square size={8} className="hidden md:block text-white/60 fill-white/60" />
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
    </div>
  );
};

export default Hero;
