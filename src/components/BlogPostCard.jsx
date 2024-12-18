import { blocksToText, formatDate, truncateText } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
export default function BlogPostCard({ post }) {
  return (
    <Link
      href={`/aktualnosci/${post._id}`}
      className="w-full flex flex-col items-center gap-4 md:w-[45%] xl:w-[30%]"
    >
      <div className="w-full h-[250px] relative md:w-[100%] md:h-[200px] lg:h-[270px]">
        <Image
          src={urlFor(post.mainImage).url()}
          alt="image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="shadow-sm"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1 font-roboto">
        <h2 className="font-anton text-2xl md:text-3xl xl:text-4xl">
          {post.title}
        </h2>
        {/* <div className="flex items-center gap-1">
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
      </div> */}
        {post.publishedAt ? (
          <p className="text-xs text-gray-400 lg:mt-2">
            {formatDate(post.publishedAt)}
          </p>
        ) : null}
        <div className="flex items-start flex-wrap gap-2 my-2">
          {post.category.map((category) => (
            <div
              key={category.slug.current}
              className="bg-gray-200 rounded-2xl px-4 md:py-[4px]"
            >
              <p className="text-xs text-gray-500">{category.title}</p>
            </div>
          ))}
        </div>
        <p className="text-sm">{truncateText(blocksToText(post.body))}</p>
      </div>
    </Link>
  );
}
