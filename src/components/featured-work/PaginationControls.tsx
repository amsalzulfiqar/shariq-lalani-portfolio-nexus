
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const PaginationControls = ({ 
  currentPage, 
  totalPages, 
  onPrevPage, 
  onNextPage 
}: PaginationControlsProps) => {
  if (totalPages <= 1) return null;
  
  const handlePageChange = (action: 'prev' | 'next') => {
    // Find the featured works section or scroll to top if not found
    const featuredWorkSection = document.getElementById('featured-work');
    
    if (featuredWorkSection) {
      // Scroll to the featured work section with offset for header
      featuredWorkSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback to window scroll if section not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Call the appropriate navigation function
    if (action === 'prev') {
      onPrevPage();
    } else {
      onNextPage();
    }
  };
  
  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => handlePageChange('prev')} 
          disabled={currentPage === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => handlePageChange('next')} 
          disabled={currentPage === totalPages - 1}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
};

export default PaginationControls;
