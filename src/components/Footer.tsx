
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background text-primary/70 pt-16 pb-8 border-t border-border/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Shariq Lalani</h2>
            <p className="text-primary/60 max-w-sm">
              Bridging technology & creativity to build the future.
            </p>
          </div>
          
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
        
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0 text-primary/60">
            © {currentYear} Shariq Lalani. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-primary/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-primary/60 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
