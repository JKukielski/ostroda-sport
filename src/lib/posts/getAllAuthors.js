import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

export const getAllAuthors = async () => {
  const ALL_AUTHORS_QUERY = defineQuery(`
        *[
            _type == 'author'
        ] | order(name desc) `);

  try {
    const authors = await sanityFetch({
      query: ALL_AUTHORS_QUERY,
    });

    return authors.data || [];
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
};
