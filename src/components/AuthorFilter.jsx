'use client';
import { useEffect, useRef } from 'react';

import { Separator } from './ui/separator';
import { IoMdClose } from 'react-icons/io';

export default function AuthorFilter({
  fetchedAuthors,
  authors,
  handleAuthorChange,
  handleAuthorToggle,
}) {
  const authorFilterRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        authorFilterRef.current &&
        !authorFilterRef.current.contains(event.target)
      ) {
        handleAuthorToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleAuthorToggle]);
  return (
    <div
      ref={authorFilterRef}
      className="absolute w-[200px] bg-primary top-12 shadow-sm rounded-sm text-complimentary p-4 z-10"
    >
      <fieldset className="relative w-full h-full">
        <IoMdClose
          className="absolute top-0 right-0 cursor-pointer"
          fontSize={18}
          onClick={handleAuthorToggle}
        />
        <h2 className="mb-4 text-base">Autor</h2>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          {fetchedAuthors?.map((author) => (
            <div key={author._id} className="flex gap-2">
              <input
                type="checkbox"
                value={author.slug.current}
                name={author.slug.current}
                id={author.slug.current}
                checked={authors.includes(author.slug.current)}
                onChange={(e) => handleAuthorChange(e.target.value)}
                className="
                        relative peer shrink-0
                        appearance-none w-4 h-4 border-2 border-complimentary rounded-sm bg-primary
                        
                        checked:border-0"
              />
              <label htmlFor={author.slug.current}>{author.name}</label>
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
