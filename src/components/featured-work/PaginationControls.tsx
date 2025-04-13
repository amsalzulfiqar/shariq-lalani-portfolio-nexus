
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
  
  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onPrevPage} 
          disabled={currentPage === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onNextPage} 
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
