
import React, { useState, useEffect } from 'react';
import SpotifyIcon from './icons/SpotifyIcon';

interface SpotifyPlayerProps {
  id?: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById(id || "spotify");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id]);

  return (
    <section id={id || "spotify"} className="py-16 md:py-20 bg-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <SpotifyIcon className="w-8 h-8 mr-3 text-green-500" />
            Latest Releases
          </h2>
          <p className="text-primary/70 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Listen to my latest music on Spotify
          </p>
        </div>
        
        <div className="relative overflow-hidden bg-secondary/20 rounded-xl shadow-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {isVisible ? (
            <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/6XochsfQsPMfehEQhWDDaz?utm_source=generator&theme=0" 
              width="100%" 
              height="480" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          ) : (
            <div className="w-full h-480 flex items-center justify-center bg-black/30">
              <div className="animate-pulse flex items-center space-x-2">
                <SpotifyIcon className="w-8 h-8 text-green-500" />
                <span className="text-white/70">Loading player...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpotifyPlayer;
