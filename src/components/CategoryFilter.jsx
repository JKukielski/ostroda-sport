'use client';
import { useEffect, useRef } from 'react';

import { Separator } from './ui/separator';
import { IoMdClose } from 'react-icons/io';

export default function CategoryFilter({
  fetchedCategories,
  categories,
  handleCategoryChange,
  handleCategoryToggle,
}) {
  const categoryFilterRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryFilterRef.current &&
        !categoryFilterRef.current.contains(event.target)
      ) {
        handleCategoryToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleCategoryToggle]);
  return (
    <div
      ref={categoryFilterRef}
      className="absolute w-[300px] bg-primary top-12 shadow-sm rounded-sm text-complimentary p-4 z-10"
    >
      <fieldset className="relative w-full h-full">
        <IoMdClose
          className="absolute top-0 right-0 cursor-pointer"
          fontSize={18}
          onClick={handleCategoryToggle}
        />
        <h2 className="mb-4 text-base">Kategorie</h2>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          {fetchedCategories?.map((category) => (
            <div key={category._id} className="flex gap-2">
              <input
                type="checkbox"
                value={category.slug.current}
                name={category.slug.current}
                id={category.slug.current}
                checked={categories.includes(category.slug.current)}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="
relative peer shrink-0
appearance-none w-4 h-4 border-2 border-complimentary rounded-sm bg-primary

checked:border-0"
              />
              <label htmlFor={category.slug.current}>{category.title}</label>
              <svg
                className="
absolute 
w-4 h-4
hidden peer-checked:block
pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
