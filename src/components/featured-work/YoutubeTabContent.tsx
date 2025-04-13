
import React from 'react';
import { FeaturedWorkItem } from '@/types/featuredWork';
import YoutubeWorkCard from './YoutubeWorkCard';

interface YoutubeTabContentProps {
  youtubeWorks: FeaturedWorkItem[];
}

const YoutubeTabContent = ({ youtubeWorks }: YoutubeTabContentProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {youtubeWorks.map((work, index) => (
        <YoutubeWorkCard key={index} work={work} />
      ))}
    </div>
  );
};

export default YoutubeTabContent;
