
import React from 'react';
import { Spotify, Youtube } from 'lucide-react';

const Artist = () => {
  const musicVideos = [
    {
      title: "Rang De",
      description: "Rang De - Full Video | Shariq Lalani | Anshuman Sharma | Merchant Records",
      embedId: "8NAtcTuRgpU"
    },
    {
      title: "Unmover Mover",
      description: "Shariq Lalani - \"Unmoved Mover\" (Live at Audio Dallas Recording Studio)",
      embedId: "7fDB_czk1B8"
    },
    {
      title: "Daahoud",
      description: "Shariq Lalani X Javed Bashir - Daahoud | Visualizer",
      embedId: "aTtltvV6dYY"
    },
    {
      title: "Rang De Reprise",
      description: "Rang De (Reprise) | Shariq Lalani | Merchant Records",
      embedId: "ELpsN5EmEXo"
    }
  ];

  return (
    <section id="artist" className="section-padding bg-background/80">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Music
          </h2>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Spotify className="w-6 h-6 text-accent" />
            <h3 className="text-xl md:text-2xl font-semibold text-primary">Listen on Spotify</h3>
          </div>

          <div className="bg-secondary/30 p-4 rounded-xl backdrop-blur-sm border border-border/20">
            <iframe 
              src="https://open.spotify.com/embed/artist/6XochsfQsPMfehEQhWDDaz" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Youtube className="w-6 h-6 text-accent" />
            <h3 className="text-xl md:text-2xl font-semibold text-primary">Music Videos</h3>
          </div>

          <div className="space-y-8">
            {musicVideos.map((video, index) => (
              <div 
                key={index} 
                className="bg-secondary/30 p-4 rounded-xl backdrop-blur-sm border border-border/20 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: 'forwards' }}
              >
                <div className="aspect-video mb-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.embedId}`} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-1">{video.title}</h4>
                <p className="text-primary/70">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
