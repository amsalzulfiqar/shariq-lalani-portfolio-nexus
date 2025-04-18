
import React from 'react';
import { Mail, Youtube, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background/80">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Get in Touch
          </h2>
        </div>
        
        <div className="bg-secondary/30 backdrop-blur-sm rounded-xl shadow-md p-8 border border-border/20 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <div className="grid grid-cols-1 gap-10">
            <div>
              <p className="text-primary/70 mb-8 max-w-md">
                Please get in touch with booking enquiries or questions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary/80" />
                  <a 
                    href="mailto:info@shariqlalani.com" 
                    className="text-primary/80 hover:text-accent hover:underline"
                  >
                    info@shariqlalani.com
                  </a>
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-primary/80" />
                  <a 
                    href="https://www.instagram.com/shariqlalanimusic" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary/80 hover:text-accent hover:underline"
                  >
                    @shariqlalanimusic
                  </a>
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-primary/80" />
                  <a 
                    href="https://www.youtube.com/@SHARIQLALANIMUSIC" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary/80 hover:text-accent hover:underline"
                  >
                    @SHARIQLALANIMUSIC
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
