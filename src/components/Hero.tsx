
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Square } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Updated to cover the entire section */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img 
          src="/lovable-uploads/af0cf2f3-9f6b-44b1-ade8-f3ac2b7510b2.png" 
          alt="Shariq playing piano"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }} // Ensuring image is centered
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Adjusted overlay for better visibility */}
      </div>
      
      <div className="container-custom relative z-10 text-center mt-20">
        <div className="flex flex-col items-center justify-center">
          {/* Hero Tagline with square markers instead of dots */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 mt-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Artist <Square size={8} className="inline mx-2 text-white fill-white" /> Producer <Square size={8} className="inline mx-2 text-white fill-white" /> Engineer
          </h1>
          
          {/* Call to action buttons - Updated the second button to "Work With Me" linking to Services */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <Button asChild size="lg" className="bg-[#F97316] hover:bg-orange-600 text-black font-medium px-8">
              <a href="#spotify">
                Listen to My Music
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              <Link to="/services">
                Work With Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
