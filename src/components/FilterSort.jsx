'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import CategoryFilter from './CategoryFilter';
import AuthorFilter from './AuthorFilter';
import SortFilter from './SortFilter';

export default function FilterSort({
  fetchedCategories,
  fetchedAuthors,
  currentPage,
}) {
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState('');
  const [authors, setAuthors] = useState([]);
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleAuthor, setToggleAuthor] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryToggle = () => {
    setToggleCategory(!toggleCategory);
    if (toggleAuthor) {
      setToggleAuthor(false);
    }

    if (toggleSort) {
      setToggleSort(false);
    }
  };

  const handleAuthorToggle = () => {
    setToggleAuthor(!toggleAuthor);
    if (toggleCategory) {
      setToggleCategory(false);
    }

    if (toggleSort) {
      setToggleSort(false);
    }
  };

  const handleSortToggle = () => {
    setToggleSort(!toggleSort);
    if (toggleAuthor) {
      setToggleAuthor(false);
    }

    if (toggleCategory) {
      setToggleCategory(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    setCategories(params.get('categories')?.split(',') || []);
    setSort(params.get('sort') || '');
    setAuthors(params.get('authors')?.split(',') || []);
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((v) => v !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = (sort) => {
    setSort(sort);
  };

  const handleAuthorChange = (author) => {
    setAuthors((prev) =>
      prev.includes(author)
        ? prev.filter((v) => v !== author)
        : [...prev, author]
    );
  };

  const updateSearchParams = () => {
    const params = new URLSearchParams(searchParams);
    params.set('strona', currentPage);
    if (categories.length > 0) {
      params.set('categories', categories.join(','));
    } else {
      params.delete('categories');
    }

    if (sort) {
      params.set('sort', sort);
    } else {
      params.delete('sort');
    }

    if (authors.length > 0) {
      params.set('authors', authors.join(','));
    } else {
      params.delete('authors');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    updateSearchParams();
  }, [categories, sort, authors, currentPage]);

  return (
    <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
      <div className="mb-3">
        <h2 className="font-anton">FILTRUJ</h2>
      </div>
      <div className="flex justify-start items-center gap-3 font-roboto text-xs">
        <div className="relative">
          <Button onClick={handleCategoryToggle}>KATEGORIE</Button>
          {toggleCategory && (
            <CategoryFilter
              fetchedCategories={fetchedCategories}
              categories={categories}
              handleCategoryChange={handleCategoryChange}
              handleCategoryToggle={handleCategoryToggle}
            />
          )}
        </div>
        <div className="relative">
          <Button onClick={handleAuthorToggle}>AUTOR</Button>
          {toggleAuthor && (
            <AuthorFilter
              fetchedAuthors={fetchedAuthors}
              authors={authors}
              handleAuthorChange={handleAuthorChange}
              handleAuthorToggle={handleAuthorToggle}
            />
          )}
        </div>
        <div className="relative">
          <Button variant="secondary" onClick={handleSortToggle}>
            SORTUJ
          </Button>
          {toggleSort && (
            <SortFilter
              handleSortChange={handleSortChange}
              sort={sort}
              handleSortToggle={handleSortToggle}
            />
          )}
        </div>
      </div>
    </div>
  );
}
