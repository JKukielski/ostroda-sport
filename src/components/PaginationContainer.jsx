'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Button } from './ui/button';

export default function PaginationContainer({ currentPage, totalPages }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const updatePage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('strona', page);
    replace(`${pathname}?${params.toString()}`);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      updatePage(currentPage + 1);
    }
  };

  const paginationRange = useMemo(() => {
    const range = [];
    const delta = 2; // Number of pages to show on either side of the current page
    const leftBoundary = Math.max(1, currentPage - delta);
    const rightBoundary = Math.min(totalPages, currentPage + delta);

    if (leftBoundary > 1) {
      range.push(1); // Always include the first page
      if (leftBoundary > 2) {
        range.push('...'); // Ellipsis before the current range
      }
    }

    for (let i = leftBoundary; i <= rightBoundary; i++) {
      range.push(i); // Add the middle range of pages
    }

    if (rightBoundary < totalPages) {
      if (rightBoundary < totalPages - 1) {
        range.push('...'); // Ellipsis after the current range
      }
      range.push(totalPages); // Always include the last page
    }

    return range;
  }, [currentPage, totalPages]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 680); // Adjust breakpoint for small screens
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isSmallScreen) {
    // Compact version for small screens
    return (
      <div className="flex items-center justify-between gap-2 mt-6">
        <Button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="disabled:bg-gray-400"
        >
          Poprzednia
        </Button>
        <span className="text-sm font-roboto">
          Strona {currentPage} z {totalPages}
        </span>
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="disabled:bg-gray-400"
        >
          Następna
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="disabled:bg-gray-400"
      >
        Poprzednia
      </Button>
      {paginationRange.map((page, index) =>
        page === '...' ? (
          <span
            key={index}
            className="h-9 px-4 py-2 bg-primary text-complimentary shadow-sm hover:bg-additional hover:text-primary font-anton rounded-none inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            ...
          </span>
        ) : (
          <Button
            key={index}
            variant={`${page === currentPage ? 'secondary' : 'default'}`}
            onClick={() => updatePage(page)}
          >
            {page}
          </Button>
        )
      )}
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="disabled:bg-gray-400"
      >
        Następna
      </Button>
    </div>
  );
}
