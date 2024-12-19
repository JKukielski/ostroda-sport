import { getPostBySlug } from '@/lib/posts/getPostBySlug';
import { components, formatDate } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';

import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const { slug } = params;
  console.log(slug);
  const post = await getPostBySlug(slug);
  console.log(post);

  if (!post) {
    return notFound();
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] flex flex-col items-start gap-4 py-4 font-roboto md:w-[80%] xl:w-[60%]">
        <div className="relative w-full h-[300px] lg:h-[500px]">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.alt || ''}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-anton text-3xl md:text-4xl xl:text-5xl">
            {post.title}
          </h1>
          {post.publishedAt ? (
            <p className="text-xs text-gray-400">
              {formatDate(post.publishedAt)}
            </p>
          ) : null}
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 relative">
              <Image
                src={urlFor(post.author.image).url()}
                alt="image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="shadow-sm rounded-full"
              />
            </div>
            <p className="text-sm text-gray-400">{post.author.name}</p>
          </div>
          <div className="flex items-start flex-wrap gap-2">
            {post.categories.map((category) => (
              <div
                key={category.slug.current}
                className="bg-gray-200 rounded-2xl px-4"
              >
                <p className="text-xs text-gray-500">{category.title}</p>
              </div>
            ))}
          </div>
        </div>

        <PortableText value={post.body} components={components} />
      </div>
    </div>
  );
}
