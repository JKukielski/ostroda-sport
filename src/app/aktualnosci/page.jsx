import BlogPosts from '@/components/BlogPosts';
import FilterSort from '@/components/FilterSort';
import PaginationContainer from '@/components/PaginationContainer';
import { getAllAuthors } from '@/lib/posts/getAllAuthors';
import { getAllCategories } from '@/lib/posts/getAllCategories';
import { getFilteredPosts } from '@/lib/posts/getFilteredPosts';

export default async function Posts(props) {
  const searchParams = await props.searchParams;
  const fetchedCategories = await getAllCategories();
  const fetchedAuthors = await getAllAuthors();
  const selectedCategories = searchParams?.categories?.split(',') || [];
  const selectedAuthors = searchParams?.authors?.split(',') || [];
  const sortOrder = searchParams?.sort || 'latest';
  const currentPage = Number(searchParams?.strona) || 1;
  const postsPerPage = 6;

  const { posts: filteredPosts, total: totalPosts } = await getFilteredPosts({
    categories: selectedCategories,
    authors: selectedAuthors,
    sort: sortOrder,
    postsPerPage,
    page: currentPage,
  });

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <section className="w-full flex flex-col justify-start items-center py-6 h-[calc(100%-8rem)] md:h-[calc(100vh-8rem)] ">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
          AKTUALNOŚCI
        </h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
      </div>
      <FilterSort
        fetchedCategories={fetchedCategories}
        fetchedAuthors={fetchedAuthors}
        currentPage={currentPage}
      />
      <BlogPosts searchParams={searchParams} filteredPosts={filteredPosts} />
      <PaginationContainer currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
