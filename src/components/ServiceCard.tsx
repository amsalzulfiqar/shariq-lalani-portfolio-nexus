
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  cta?: string;
  ctaLink?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  delay,
  cta = "Learn more",
  ctaLink = "#"
}) => {
  return (
    <div 
      className="service-card bg-white rounded-xl p-6 shadow-md transition-all duration-300 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 text-primary mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-5">{description}</p>
      
      <a 
        href={ctaLink} 
        className="inline-flex items-center font-medium text-primary hover:underline group"
      >
        {cta}
        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ServiceCard;
