
import React from 'react';
import SpotifyIcon from '@/components/icons/SpotifyIcon';
import { FeaturedWorkItem } from '@/types/featuredWork';

interface SpotifyWorkCardProps {
  work: FeaturedWorkItem;
}

const SpotifyWorkCard = ({ work }: SpotifyWorkCardProps) => (
  <div className="bg-secondary/30 rounded-xl backdrop-blur-sm border border-border/20 h-full overflow-hidden">
    <div className="aspect-square w-full mb-0">
      <iframe
        src={`https://open.spotify.com/embed/track/${work.spotifyId}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-t-xl"
      ></iframe>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <SpotifyIcon className="h-4 w-4 text-green-500" />
        <span className="text-xs text-primary/60">Spotify</span>
      </div>
      <h4 className="text-base font-semibold text-primary mb-1">{work.title}</h4>
      <p className="text-primary/80 font-medium text-sm mb-1">{work.artist}</p>
      <p className="text-primary/60 text-xs">{work.role}</p>
    </div>
  </div>
);

export default SpotifyWorkCard;
