
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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
    <section id="about" className="py-10 md:py-16 bg-background">
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
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-800 relative" style={{ minHeight: "300px" }}>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse h-16 w-16 rounded-full bg-gray-700"></div>
                </div>
              )}
              <img
                ref={imageRef}
                src="/lovable-uploads/cf679340-41be-421e-a167-6db583bdf43b.png"
                alt="Shariq Lalani"
                className={`w-full h-auto opacity-0 transition-all duration-700 ${imageLoaded ? 'opacity-100 hover:scale-105' : ''}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
