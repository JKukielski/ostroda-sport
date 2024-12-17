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
import { useMemo } from 'react';

export default function PaginationContainer({ currentPage, totalPages }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>
      {paginationRange.map((page, index) =>
        page === '...' ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => updatePage(page)}
            className={`px-4 py-2 rounded ${
              page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
