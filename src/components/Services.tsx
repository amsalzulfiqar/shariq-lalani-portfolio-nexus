
import React from 'react';
import ServiceCard from './ServiceCard';
import { Music, Sliders, Music2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Music Production",
      description: "From indie artists to industry professionals, I offer music production that meets the needs of everyone. Whether you're a solo artist, a band refining your sound, or a filmmaker searching for the perfect score.",
      icon: <Music className="w-6 h-6" />,
      delay: 0.3,
      cta: "Learn more",
      ctaLink: "/services#production",
    },
    {
      title: "Mixing",
      description: "Transform your raw tracks into a polished, professional sound. I specialize in mixing for all genres, ensuring that your music stands out on any platform.",
      icon: <Sliders className="w-6 h-6" />,
      delay: 0.5,
      cta: "Learn more",
      ctaLink: "/services#mixing",
    },
    {
      title: "Composition & Scoring",
      description: "Looking for custom music? Whether for an album, film, or ad, I compose original pieces that capture the essence of your project and bring it to life with emotional depth.",
      icon: <Music2 className="w-6 h-6" />,
      delay: 0.7,
      cta: "Learn more",
      ctaLink: "/services#composition",
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/10 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/f6997497-9cbe-4496-bf08-34179e687f3a.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Services
          </h2>
          <p className="text-primary/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Bring your music to life with world-class production & mixing. Music isn't just sound—it's an experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
              cta={service.cta}
              ctaLink={service.ctaLink}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center font-medium text-accent hover:underline group text-lg"
          >
            View Featured Works
            <ArrowRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
