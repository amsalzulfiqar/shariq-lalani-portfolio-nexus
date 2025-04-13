
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  cta?: string;
  ctaLink?: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  delay,
  cta = "Learn more",
  ctaLink = "#",
  image
}) => {
  return (
    <div 
      className="service-card bg-secondary/30 backdrop-blur-sm rounded-xl overflow-hidden border border-border/20 transition-all duration-300 opacity-0 animate-fade-in flex flex-col"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/50 text-accent mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
        </div>
        
        <p className="text-primary/70 mb-5 flex-1">{description}</p>
        
        <a 
          href={ctaLink} 
          className="inline-flex items-center font-medium text-accent hover:underline group mt-auto"
        >
          {cta}
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
