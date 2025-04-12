
import React from 'react';
import ServiceCard from './ServiceCard';
import { Brain, Sparkles, Code, BarChart2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "AI Strategy & Integration",
      description: "Transforming businesses through strategic AI implementation, from concept to deployment of AI-powered solutions that drive real results.",
      icon: <Brain className="w-6 h-6" />,
      delay: 0.3,
    },
    {
      title: "Product Strategy",
      description: "Crafting product roadmaps and GTM strategies that transform business goals into successful digital products with measurable impact.",
      icon: <BarChart2 className="w-6 h-6" />,
      delay: 0.5,
    },
    {
      title: "Creative Technology",
      description: "Developing innovative digital experiences that blend cutting-edge technology with compelling creative execution.",
      icon: <Sparkles className="w-6 h-6" />,
      delay: 0.7,
    },
    {
      title: "Technical Development",
      description: "Building robust, scalable solutions using modern tech stacks, from proof-of-concept prototypes to production-ready applications.",
      icon: <Code className="w-6 h-6" />,
      delay: 0.9,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Services & Expertise
          </h2>
          <p className="text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            I offer a comprehensive range of services to help businesses navigate the digital landscape and build innovative solutions that drive results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
