import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

export const getAllPosts = async () => {
  const ALL_POSTS_QUERY = defineQuery(`
        *[
            _type == 'post'
        ] | order(publishedAt desc) {
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
    }`);

  try {
    const posts = await sanityFetch({
      query: ALL_POSTS_QUERY,
    });

    return posts.data || [];
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
};
