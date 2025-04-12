
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  image?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
  id, 
  title, 
  description, 
  benefits, 
  icon,
  image 
}) => {
  return (
    <section id={id} className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-secondary text-accent mb-4">
              {icon}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{title}</h2>
            <p className="text-primary/70 mb-8">{description}</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary/90">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1 text-accent">
                      <Check className="w-5 h-5" />
                    </span>
                    <span className="text-primary/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center font-medium text-accent hover:underline group"
              >
                Discuss your project
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            {image ? (
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={title} 
                  className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
              </div>
            ) : (
              <Card className="bg-secondary/40 rounded-xl h-full min-h-[300px] flex items-center justify-center border border-border/30">
                <CardContent className="p-12">
                  <div className="w-24 h-24 mx-auto flex items-center justify-center text-accent/60">
                    {icon}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
