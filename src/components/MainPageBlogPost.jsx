import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/grid.module.css';
import { formatDate } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';

export default function MainPageBlogPost({ post, index }) {
  return (
    <Link
      href={`/aktualnosci/${post._id}`}
      className={`min-h-[300px] md:min-h-0 ${
        styles[`item${index + 1}`]
      } relative overflow-hidden group`}
    >
      <Image
        src={urlFor(post.mainImage).url()}
        alt="image_one"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className="flex items-center justify-start p-5 lg:p-8">
        <div className="z-10 text-left flex flex-col gap-2">
          <h1 className="text-2xl md:text-lg md:tracking-wider font-bold font-anton text-complimentary tracking-wide xl:text-3xl">
            {post.title}
          </h1>
          {post.publishedAt ? (
            <p className="text-xs lg:text-sm text-gray-400 font-roboto">
              {formatDate(post.publishedAt)}
            </p>
          ) : null}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
    </Link>
  );
}
