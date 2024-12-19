import { sanityFetch } from '@/sanity/lib/live';
import { defineQuery } from 'next-sanity';

export const getPostBySlug = async (slug) => {
  const POST_BY_ID_QUERY = defineQuery(`
            *[
                _type == 'post' && slug.current == $slug
            ] | order(name asc) [0] {
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
            },
        },
        "categories": category[]->{
        title,
        slug
    }
    }
        `);

  try {
    const post = await sanityFetch({
      query: POST_BY_ID_QUERY,
      params: {
        slug,
      },
    });
    return post.data || null;
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return null;
  }
};
