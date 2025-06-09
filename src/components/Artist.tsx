
import React, { useState } from 'react';
import { Youtube } from 'lucide-react';

const Artist = () => {
  const [loadedVideos, setLoadedVideos] = useState<number[]>([]);

  const handleVideoLoad = (index: number) => {
    setLoadedVideos(prev => [...prev, index]);
  };

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
    },
    {
      title: "In The Studio: Shariq Lalani | After Hours",
      description: "Shariq Lalani - Hum Dekhen Ge | Live Performance",
      embedId: "mUicfrkdpKI"
    },
    {
      title: "After Hours - Shariq Lalani | Shehroze Hussain | Bobby Sparks",
      description: "Shariq Lalani - Latest Performance",
      embedId: "vSMGsEbZGgQ"
    }
  ];

  return (
    <section id="artist" className="section-padding bg-background/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {musicVideos.map((video, index) => (
            <div 
              key={index} 
              className="bg-secondary/30 p-3 rounded-xl backdrop-blur-sm border border-border/20 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="aspect-video mb-2 relative">
                {!loadedVideos.includes(index) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                    <div className="flex flex-col items-center">
                      <Youtube className="h-8 w-8 text-red-500 mb-2" />
                      <div className="animate-pulse h-2 w-24 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                )}
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${video.embedId}`} 
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                  loading="lazy"
                  onLoad={() => handleVideoLoad(index)}
                ></iframe>
              </div>
              <h4 className="text-base font-semibold text-primary mb-0.5">{video.title}</h4>
              <p className="text-primary/70 text-sm truncate">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artist;
