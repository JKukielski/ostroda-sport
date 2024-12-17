import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

export const getFilteredPosts = async ({
  categories = [],
  authors = [],
  sort = 'latest',
  page = 1,
  postsPerPage = 6,
}) => {
  // Build filters dynamically based on input

  const categoryFilter =
    categories.length > 0
      ? `&& category[0]->slug.current in ${JSON.stringify(categories)}`
      : '';

  const authorFilter =
    authors.length > 0
      ? `&& author->slug.current in ${JSON.stringify(authors)}`
      : '';

  const sortOrder = sort === 'oldest' ? 'publishedAt asc' : 'publishedAt desc';
  const start = (page - 1) * postsPerPage;

  const FILTERED_POSTS_QUERY = defineQuery(`
    *[
      _type == 'post'
      ${categoryFilter}
      ${authorFilter}
    ] | order(${sortOrder}) [${(page - 1) * postsPerPage}...${page * postsPerPage}] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "author": author->{
          name,
          bio,
          image{
              asset->{
                  url
              }
          }
      },
      "category": category[]->{
        title,
        slug
      }
    }
  `);

  const TOTAL_POSTS_COUNT_QUERY = defineQuery(`
  count(
    *[
      _type == 'post'
      ${categoryFilter}
      ${authorFilter}
    ]
  )
`);
  try {
    const [posts, totalCount] = await Promise.all([
      sanityFetch({ query: FILTERED_POSTS_QUERY }),
      sanityFetch({ query: TOTAL_POSTS_COUNT_QUERY }),
    ]);

    return {
      posts: posts.data || posts, // The array of posts
      total: totalCount.data || totalCount, // The total number of matching posts
    };
  } catch (error) {
    console.error('Error fetching filtered posts:', error);
    return { posts: [], total: 0 };
  }
};
