
import React from 'react';
import { ArrowUp, Instagram, Youtube, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background text-primary/70 pt-16 pb-8 border-t border-border/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading font-bold text-primary mb-2">Shariq Lalani</h2>
            <p className="text-primary/60 max-w-sm">
              ARTIST | PRODUCER | ENGINEER
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://www.instagram.com/shariqlalanimusic"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@SHARIQLALANIMUSIC"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://open.spotify.com/artist/6XochsfQsPMfehEQhWDDaz"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
              aria-label="Spotify"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>
          
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent hover:text-background transition-colors"
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
            <Link to="/" className="text-sm text-primary/60 hover:text-accent transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-primary/60 hover:text-accent transition-colors">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
