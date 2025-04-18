import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Square } from 'lucide-react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image with loading state */}
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="animate-pulse h-16 w-16 rounded-full bg-gray-700"></div>
          </div>
        )}
        <img 
          src="/lovable-uploads/21005048-580b-49bd-9bbb-5e9f1335a17c.png" 
          alt="Musician playing piano in recording studio"
          className={`w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white/60 mb-8 opacity-0 animate-fade-in flex items-center space-x-4"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <span>Artist</span>
          <Square size={8} className="text-white/60 fill-white/60" />
          <span>Producer</span>
          <Square size={8} className="text-white/60 fill-white/60" />
          <span>Engineer</span>
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
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 px-8"
          >
            <Link to="/services">Work with Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
