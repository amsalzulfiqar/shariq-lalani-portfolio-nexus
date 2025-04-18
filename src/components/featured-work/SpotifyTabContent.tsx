
import React, { useState } from 'react';
import { FeaturedWorkItem } from '@/types/featuredWork';
import SpotifyWorkCard from './SpotifyWorkCard';
import PaginationControls from './PaginationControls';

interface SpotifyTabContentProps {
  spotifyWorks: FeaturedWorkItem[];
}

const SpotifyTabContent = ({ spotifyWorks }: SpotifyTabContentProps) => {
  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(0);
  
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentWorks = spotifyWorks.slice(startIndex, endIndex);
  const totalPages = Math.ceil(spotifyWorks.length / ITEMS_PER_PAGE);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentWorks.map((work, index) => (
          <SpotifyWorkCard key={index} work={work} />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={() => setCurrentPage(p => Math.max(0, p - 1))}
        onNextPage={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
      />
    </div>
  );
};

export default SpotifyTabContent;
