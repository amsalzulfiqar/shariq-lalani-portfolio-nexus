
import React from 'react';
import ServiceCard from './ServiceCard';
import { Music, Mic, Music2, Headphones, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Mixing",
      description: "I create hit-quality, radio-ready mixes that will set you apart from the crowd. Guaranteed.",
      icon: <Sliders className="w-6 h-6" />,
      image: "/lovable-uploads/03f90ead-293e-458a-9fc1-f7d151fda84f.png",
      delay: 0.3,
      cta: "Learn more",
      ctaLink: "/services#mixing",
    },
    {
      title: "Recording",
      description: "Whether it's a simple vocal or a full orchestra, I have the skills and experience to capture the magic.",
      icon: <Mic className="w-6 h-6" />,
      image: "/lovable-uploads/3e9f29bd-2d4f-4d70-abab-9b96b6e19da2.png",
      delay: 0.5,
      cta: "Learn more",
      ctaLink: "/services#recording",
    },
    {
      title: "Production",
      description: "I'm great at bringing out the best in an artist and building teams that realize their vision to the fullest.",
      icon: <Music className="w-6 h-6" />,
      image: "/lovable-uploads/963c09ee-bf6c-44d9-a64f-bb6f9ba54ab6.png",
      delay: 0.7,
      cta: "Learn more",
      ctaLink: "/services#production",
    },
    {
      title: "Location Recording",
      description: "I can capture your next show or video shoot on location with up to 64 channels of studio quality sound.",
      icon: <Headphones className="w-6 h-6" />,
      image: "/lovable-uploads/cefff9ed-ca82-4bbe-83b9-1e99715de5ba.png",
      delay: 0.9,
      cta: "Learn more",
      ctaLink: "/services#location-recording",
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
              cta={service.cta}
              ctaLink={service.ctaLink}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
