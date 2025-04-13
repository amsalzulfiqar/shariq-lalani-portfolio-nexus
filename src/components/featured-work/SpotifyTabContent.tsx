
import React, { useState } from 'react';
import { FeaturedWorkItem } from '@/types/featuredWork';
import SpotifyWorkCard from './SpotifyWorkCard';
import PaginationControls from './PaginationControls';

interface SpotifyTabContentProps {
  spotifyWorks: FeaturedWorkItem[];
}

const SpotifyTabContent = ({ spotifyWorks }: SpotifyTabContentProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  
  const totalPages = Math.ceil(spotifyWorks.length / itemsPerPage);
  
  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return spotifyWorks.slice(start, end);
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {getCurrentItems().map((work, index) => (
          <SpotifyWorkCard key={index} work={work} />
        ))}
      </div>
      
      <PaginationControls 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onNextPage={handleNextPage} 
        onPrevPage={handlePrevPage} 
      />
    </>
  );
};

export default SpotifyTabContent;
