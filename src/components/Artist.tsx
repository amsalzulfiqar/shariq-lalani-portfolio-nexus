
import React from 'react';
import { Youtube } from 'lucide-react';

const Artist = () => {
  const musicVideos = [
    {
      title: "Rang De",
      description: "Rang De - Full Video | Shariq Lalani | Anshuman Sharma | Merchant Records",
      embedId: "wPF-sZy2ArE"
    },
    {
      title: "Unmover Mover",
      description: "Shariq Lalani - \"Unmoved Mover\" (Live at Audio Dallas Recording Studio)",
      embedId: "n04PTkA9dy0"
    },
    {
      title: "Daahoud",
      description: "Shariq Lalani X Javed Bashir - Daahoud | Visualizer",
      embedId: "Wqj7MlpeYvo"
    },
    {
      title: "Rang De Reprise",
      description: "Rang De (Reprise) | Shariq Lalani | Merchant Records",
      embedId: "stIvrC8QNxY"
    }
  ];

  return (
    <section id="artist" className="section-padding bg-background/80">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Music Videos
          </h2>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicVideos.map((video, index) => (
              <div 
                key={index} 
                className="bg-secondary/30 p-3 rounded-xl backdrop-blur-sm border border-border/20 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: 'forwards' }}
              >
                <div className="aspect-video mb-2">
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
                <h4 className="text-base font-semibold text-primary mb-0.5">{video.title}</h4>
                <p className="text-primary/70 text-sm truncate">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
