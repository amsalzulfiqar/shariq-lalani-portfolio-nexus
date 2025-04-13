
import React, { useState } from 'react';
import { FeaturedWorkItem } from '@/types/featuredWork';
import YoutubeWorkCard from './YoutubeWorkCard';
import PaginationControls from './PaginationControls';

interface YoutubeTabContentProps {
  youtubeWorks: FeaturedWorkItem[];
}

const YoutubeTabContent = ({ youtubeWorks }: YoutubeTabContentProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(youtubeWorks.length / itemsPerPage);
  
  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return youtubeWorks.slice(start, end);
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

  if (youtubeWorks.length === 0) {
    return <div className="text-center py-12 text-primary/70">No YouTube videos available at the moment.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getCurrentItems().map((work, index) => (
          <YoutubeWorkCard key={index} work={work} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <PaginationControls 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onNextPage={handleNextPage} 
          onPrevPage={handlePrevPage} 
        />
      )}
    </>
  );
};

export default YoutubeTabContent;
