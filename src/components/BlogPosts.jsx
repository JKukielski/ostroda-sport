import { formatDate, truncateText } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

export default async function BlogPosts({ filteredPosts }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {filteredPosts.map((post) => (
        <div key={post._id} className="w-full flex flex-col items-center">
          <div className="w-[90%] h-[250px] relative">
            <Image
              src={urlFor(post.mainImage).url()}
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="shadow-sm"
            />
          </div>
          <div className="w-[90%] flex flex-col items-start">
            <h2>{post.title}</h2>
            {post.publishedAt ? (
              <p className="">{formatDate(post.publishedAt)}</p>
            ) : null}
            <div>
              {post.category.map((category) => (
                <p key={category.slug.current}>{category.title}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
