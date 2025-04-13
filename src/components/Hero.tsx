
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Square } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/af0cf2f3-9f6b-44b1-ade8-f3ac2b7510b2.png" 
          alt="Shariq playing piano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-8 opacity-0 animate-fade-in bg-black/40 px-4 py-2 rounded"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Artist <Square size={8} className="inline mx-2 text-white fill-white" />
          Producer <Square size={8} className="inline mx-2 text-white fill-white" />
          Engineer
        </h1>

        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          <Button asChild size="lg" className="bg-[#F97316] hover:bg-orange-600 text-black font-medium px-8">
            <a href="#spotify">Listen to My Music</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
