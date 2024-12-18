'use client';
import { useEffect, useRef } from 'react';
import { Separator } from './ui/separator';
import { IoMdClose } from 'react-icons/io';

export default function SortFilter({
  handleSortChange,
  sort,
  handleSortToggle,
}) {
  const sortFilterRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortFilterRef.current &&
        !sortFilterRef.current.contains(event.target)
      ) {
        handleSortToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleSortToggle]);
  return (
    <div
      ref={sortFilterRef}
      className="absolute w-[200px] bg-primary top-12 right-0 shadow-sm rounded-sm text-complimentary p-4 z-10 md:right-auto"
    >
      <fieldset className="relative w-full h-full">
        <IoMdClose
          className="absolute top-0 right-0 cursor-pointer"
          fontSize={18}
          onClick={handleSortToggle}
        />
        <h2 className="mb-4 text-base">Sortuj</h2>
        <Separator className="my-4" />

        <div className="flex gap-2 items-start mb-2">
          <div className="grid place-items-center">
            <input
              type="radio"
              value="oldest"
              checked={sort === 'oldest'}
              onChange={(e) => handleSortChange(e.target.value)}
              className="peer col-start-1 row-start-1
appearance-none shrink-0 w-4 h-4 border-2 border-complimentary rounded-full"
            />
            <div
              className="pointer-events-none 
col-start-1 row-start-1
w-2 h-2 rounded-full peer-checked:bg-complimentary
"
            />
          </div>
          <label htmlFor="">{`Data: (od najstarszej)`}</label>
        </div>
        <div className="flex gap-2 items-start">
          <div className="grid place-items-center">
            <input
              type="radio"
              value="latest"
              checked={sort === 'latest'}
              onChange={(e) => handleSortChange(e.target.value)}
              className="peer col-start-1 row-start-1
appearance-none shrink-0 w-4 h-4 border-2 border-complimentary rounded-full"
            />
            <div
              className="pointer-events-none
          col-start-1 row-start-1
          w-2 h-2 rounded-full peer-checked:bg-complimentary
          "
            />
          </div>
          <label htmlFor="">{`Data: (od najnowszej)`}</label>
        </div>
      </fieldset>
    </div>
  );
}
