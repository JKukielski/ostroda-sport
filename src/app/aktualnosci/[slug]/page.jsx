import { getPostBySlug } from '@/lib/posts/getPostBySlug';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const { slug } = params;
  console.log(slug);
  const post = await getPostBySlug(slug);
  console.log(post);

  if (!post) {
    return notFound();
  }
  return <div>{post.title}</div>;
}
