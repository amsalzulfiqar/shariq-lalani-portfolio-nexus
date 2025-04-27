
import React from 'react';
import { Music, Sliders, Music2 } from 'lucide-react';

const ServicesList = () => {
  const services = [
    {
      id: "production",
      title: "Music Production",
      description: "From indie artists to industry professionals, I offer music production that meets the needs of everyone. Whether you're a solo artist, a band refining your sound, or a filmmaker searching for the perfect score, I provide tailored services that suit your unique project. With years of experience working across genres such as Pop, Jazz, Hip Hop, World Music, Electronic, Orchestral, and more, I guide you from initial concept to final mix, ensuring each track gets the attention and professionalism it deserves.",
      icon: <Music className="w-8 h-8" />
    },
    {
      id: "mixing",
      title: "Mixing",
      description: "Transform your raw tracks into a polished, professional sound. I specialize in mixing for all genres, ensuring that your music stands out on any platform. With a keen ear for detail and a deep understanding of sonic balance, I'll help your music reach its full potential. Each mixing project receives personalized attention to bring out the best in your recordings while maintaining your artistic vision.",
      icon: <Sliders className="w-8 h-8" />
    },
    {
      id: "composition",
      title: "Composition & Scoring",
      description: "Looking for custom music? Whether for an album, film, or ad, I compose original pieces that capture the essence of your project and bring it to life with emotional depth. My background in various musical styles allows me to create unique compositions that resonate with your audience. From concept to completion, I'll work closely with you to ensure the music perfectly complements your creative vision.",
      icon: <Music2 className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-16 bg-background relative" id="services">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
        style={{ backgroundImage: 'url("/lovable-uploads/8c8728bf-ab7a-4c4c-b4f8-dcb8665ede8c.png")' }}
      ></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-primary text-center">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              id={service.id}
              className="bg-secondary/30 backdrop-blur-sm rounded-xl p-8 border border-border/10 h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/50 text-accent mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
              </div>
              <p className="text-primary/80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
