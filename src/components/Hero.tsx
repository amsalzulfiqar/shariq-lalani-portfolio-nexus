
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/af0cf2f3-9f6b-44b1-ade8-f3ac2b7510b2.png" 
          alt="Shariq playing piano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for better text visibility */}
      </div>
      
      <div className="container-custom relative z-10 text-center mt-20">
        <div className="flex flex-col items-center justify-center">
          {/* Logo in hero section */}
          <img 
            src="/lovable-uploads/c0dc08e5-34f7-44c1-835e-2acbf8405179.png" 
            alt="Shariq Lalani Logo"
            className="w-64 md:w-80 mb-4 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          />
          
          {/* Hero Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 mt-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Artist | Producer | Engineer
          </h1>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8">
              <a href="#artist">
                Listen to My Music
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              <a href="#services">
                Work With Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
