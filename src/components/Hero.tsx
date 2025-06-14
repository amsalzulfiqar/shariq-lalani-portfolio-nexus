import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Square } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const desktopImageUrl = "/lovable-uploads/21005048-580b-49bd-9bbb-5e9f1335a17c.png";
  const mobileImageUrl = "/lovable-uploads/6f6bc79b-11f3-4bb4-a730-61666af2c750.png";

  // Preload hero image on component mount
  useEffect(() => {
    const heroImage = new Image();
    heroImage.src = isMobile ? mobileImageUrl : desktopImageUrl;
    heroImage.onload = () => setImageLoaded(true);

    // Attempt to load from cache first
    if (caches) {
      caches.match(heroImage.src).then(response => {
        if (response) {
          console.log('Hero image loaded from cache');
          setImageLoaded(true);
        }
      });
    }
  }, [isMobile]);
  const navigateToServices = () => {
    navigate('/services');
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        {!imageLoaded && <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="animate-pulse h-16 w-16 rounded-full bg-gray-700"></div>
          </div>}
        <img src={isMobile ? mobileImageUrl : desktopImageUrl} alt="Musician playing piano in recording studio" className={`w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`} style={{
        objectPosition: isMobile ? 'center 30%' : 'center 35%',
        objectFit: 'cover',
        transform: 'scale(1.05)' // Slight scale to ensure full coverage
      }} loading="eager" fetchPriority="high" onLoad={() => setImageLoaded(true)} />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Navigation */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white/60 mb-8 opacity-0 animate-fade-in" style={{
        animationDelay: '0.6s',
        animationFillMode: 'forwards'
      }}>
          <div className="flex items-center justify-center gap-2 sm:gap-4 whitespace-nowrap">
            <span className="text-xl">Artist</span>
            <Square size={8} className="inline-block text-white/60 fill-white/60 flex-shrink-0" />
            <span className="text-xl">Producer</span>
            <Square size={8} className="inline-block text-white/60 fill-white/60 flex-shrink-0" />
            <span className="text-xl">Engineer</span>
          </div>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{
        animationDelay: '0.9s',
        animationFillMode: 'forwards'
      }}>
          <Button asChild size="lg" className="bg-[#F97316] hover:bg-orange-600 text-black font-medium px-8">
            <a href="https://open.spotify.com/artist/6XochsfQsPMfehEQhWDDaz" target="_blank" rel="noopener noreferrer">
              Listen to My Music
            </a>
          </Button>
          <Button size="lg" className="bg-black/90 text-white hover:bg-black/80 px-8 border border-white/90" onClick={navigateToServices}>
            Work with Me
          </Button>
        </div>
      </div>
    </div>;
};
export default Hero;