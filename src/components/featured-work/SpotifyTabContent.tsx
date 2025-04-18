
import React from 'react';
import { FeaturedWorkItem } from '@/types/featuredWork';
import SpotifyWorkCard from './SpotifyWorkCard';

interface SpotifyTabContentProps {
  spotifyWorks: FeaturedWorkItem[];
}

const SpotifyTabContent = ({ spotifyWorks }: SpotifyTabContentProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {spotifyWorks.map((work, index) => (
        <SpotifyWorkCard key={index} work={work} />
      ))}
    </div>
  );
};

export default SpotifyTabContent;
