
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Headphones, Wrench } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const parallaxBg = heroRef.current.querySelector('.parallax-bg') as HTMLElement;
      
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-secondary/30 to-transparent opacity-40"></div>
        <div className="parallax-bg absolute inset-0 bg-[url('/lovable-uploads/b6d64a1a-6135-43ca-a2e2-e0382b1b3871.png')] bg-center bg-cover opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight md:leading-tight">
            <AnimatedText 
              text="Shariq Lalani" 
              className="text-primary text-glow mb-2"
              delay={0.3}
            />
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8">
            <AnimatedText 
              text="ARTIST | PRODUCER | ENGINEER" 
              className="text-accent"
              delay={0.6}
            />
          </h2>
          
          <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            Creating music that moves and inspires, from jazz and R&B to pop and world music.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
            <Button asChild variant="default" size="lg" className="group">
              <a href="#artist">
                <Headphones className="mr-2 h-4 w-4" />
                Listen to My Music
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a href="#services">
                <Wrench className="mr-2 h-4 w-4" />
                Work With Me
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <a 
            href="#about" 
            className="flex flex-col items-center text-primary/60 hover:text-accent transition-all hover:translate-y-2"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium mb-2">Explore</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full fill-secondary/20">
          <path 
            d="M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,245.3C672,224,768,192,864,181.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
