
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              About Shariq
            </h2>
            
            <div className="space-y-4">
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                I'm a multidisciplinary creator with over a decade of experience bringing innovative products to life. As a product strategist, creative technologist, and AI specialist, I help brands navigate the rapidly evolving digital landscape.
              </p>
              
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                My work sits at the intersection of technology and creativity — whether I'm designing AI-powered experiences, building digital products, or crafting strategic visions for ambitious clients.
              </p>
              
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Previously, I've led teams at major tech companies and creative agencies, helping brands like Google, Adidas, and Spotify build products that millions of people use every day.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <img
                ref={imageRef}
                src="/lovable-uploads/b6d64a1a-6135-43ca-a2e2-e0382b1b3871.png"
                alt="Shariq Lalani"
                className="w-full h-auto opacity-0 transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-gray-100 rounded-full z-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 rounded-full z-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
