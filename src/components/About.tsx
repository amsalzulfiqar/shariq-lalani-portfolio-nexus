
import React, { useEffect, useRef } from 'react';

const About = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              About
            </h2>
            
            <div className="space-y-4">
              <p className="text-primary/80 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Shariq Lalani is a versatile artist, composer, and producer whose work spans Jazz, R&B, Pop, World Music, and contemporary influences. With a deep understanding of sound and style, he crafts music that is both innovative and emotionally resonant, seamlessly blending genres to create something fresh and compelling.
              </p>
              
              <p className="text-primary/80 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Shariq's credits include working with renowned artists such as Grammy-winning musician Bobby Sparks II (Prince, Kirk Franklin, Snarky Puppy), Ustad Javed Bashir, and Salim-Sulaiman, to name a few. He has also been part of projects with world-class artists including Olivia Holt, Nibal Malshi, Mike Jones, The War and Treaty, Ulices Chaidez, Xavier Omär, and Fareed Ayaz & Abu Muhammad Qawwals.
              </p>
              
              <p className="text-primary/80 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Whether on stage, in the studio, or behind the mixing console, his mission is to create music that moves and inspires.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                ref={imageRef}
                src="/lovable-uploads/b6d64a1a-6135-43ca-a2e2-e0382b1b3871.png"
                alt="Shariq Lalani"
                className="w-full h-auto opacity-0 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
