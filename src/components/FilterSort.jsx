'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

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
            <div className="absolute w-[200px] bg-primary top-12 shadow-sm rounded-sm text-complimentary p-4 z-10">
              <fieldset className="relative w-full h-full">
                <h2>Kategorie</h2>
                {fetchedCategories?.map((category) => (
                  <div key={category._id}>
                    <input
                      type="checkbox"
                      value={category.slug.current}
                      name={category.slug.current}
                      id={category.slug.current}
                      checked={categories.includes(category.slug.current)}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                    />
                    <label htmlFor={category.slug.current}>
                      {category.title}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>
          )}
        </div>
        <div className="relative">
          <Button onClick={handleAuthorToggle}>AUTOR</Button>
          {toggleAuthor && (
            <div className="absolute w-[200px] bg-primary top-12 shadow-sm rounded-sm text-complimentary p-4 z-10">
              <fieldset className="relative w-full h-full">
                <legend>Autor</legend>
                {fetchedAuthors?.map((author) => (
                  <div key={author._id}>
                    <input
                      type="checkbox"
                      value={author.slug.current}
                      name={author.slug.current}
                      id={author.slug.current}
                      checked={authors.includes(author.slug.current)}
                      onChange={(e) => handleAuthorChange(e.target.value)}
                    />
                    <label htmlFor={author.slug.current}>{author.name}</label>
                  </div>
                ))}
              </fieldset>
            </div>
          )}
        </div>
        <div className="relative">
          <Button variant="secondary" onClick={handleSortToggle}>
            SORTUJ
          </Button>
          {toggleSort && (
            <div className="absolute w-[200px] bg-primary top-12 shadow-sm rounded-sm text-complimentary p-4 z-10">
              <fieldset className="relative w-full h-full">
                <legend>Sortuj</legend>
                <div>
                  <input
                    type="radio"
                    value="oldest"
                    checked={sort === 'oldest'}
                    onChange={(e) => handleSortChange(e.target.value)}
                  />
                  <label htmlFor="">{`Data: (od najstarszej)`}</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="latest"
                    checked={sort === 'latest'}
                    onChange={(e) => handleSortChange(e.target.value)}
                  />
                  <label htmlFor="">{`Data: (od najnowszej)`}</label>
                </div>
              </fieldset>
            </div>
          )}
        </div>
      </div>

      {/* <fieldset>
        <legend>Kategorie</legend>
        {fetchedCategories?.map((category) => (
          <div key={category._id}>
            <input
              type="checkbox"
              value={category.slug.current}
              name={category.slug.current}
              id={category.slug.current}
              checked={categories.includes(category.slug.current)}
              onChange={(e) => handleCategoryChange(e.target.value)}
            />
            <label htmlFor={category.slug.current}>{category.title}</label>
          </div>
        ))}
      </fieldset>
      <fieldset>
        <legend>Sortuj</legend>
        <div>
          <input
            type="radio"
            value="oldest"
            checked={sort === 'oldest'}
            onChange={(e) => handleSortChange(e.target.value)}
          />
          <label htmlFor="">{`Data: (od najstarszej)`}</label>
        </div>
        <div>
          <input
            type="radio"
            value="latest"
            checked={sort === 'latest'}
            onChange={(e) => handleSortChange(e.target.value)}
          />
          <label htmlFor="">{`Data: (od najnowszej)`}</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Autor</legend>
        {fetchedAuthors?.map((author) => (
          <div key={author._id}>
            <input
              type="checkbox"
              value={author.slug.current}
              name={author.slug.current}
              id={author.slug.current}
              checked={authors.includes(author.slug.current)}
              onChange={(e) => handleAuthorChange(e.target.value)}
            />
            <label htmlFor={author.slug.current}>{author.name}</label>
          </div>
        ))}
      </fieldset> */}
    </div>
  );
}
