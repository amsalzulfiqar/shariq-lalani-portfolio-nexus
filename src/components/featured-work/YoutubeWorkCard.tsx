
import React from 'react';
import { Youtube } from 'lucide-react';
import { FeaturedWorkItem } from '@/types/featuredWork';

interface YoutubeWorkCardProps {
  work: FeaturedWorkItem;
}

const YoutubeWorkCard = ({ work }: YoutubeWorkCardProps) => {
  console.log('Rendering YoutubeWorkCard with:', work);
  
  return (
    <div className="bg-secondary/30 p-3 rounded-xl backdrop-blur-sm border border-border/20 h-full">
      <div className="aspect-video mb-3">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${work.embedId}`} 
          title={work.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Youtube className="h-4 w-4 text-red-500" />
        <span className="text-xs text-primary/60">YouTube</span>
      </div>
      <h4 className="text-base font-semibold text-primary mb-0.5">{work.title}</h4>
      <p className="text-primary/80 text-sm mb-1">{work.artist}</p>
      <p className="text-primary/60 text-xs">{work.role}</p>
    </div>
  );
};

export default YoutubeWorkCard;
