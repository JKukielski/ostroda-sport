import Link from 'next/link';
import { Button } from './ui/button';
import { getAllPosts } from '@/lib/posts/getAllPosts';
import MainPageBlogPost from './MainPageBlogPost';

export default async function LatestBlogPosts() {
  const posts = await getAllPosts();

  return (
    <div className="w-full flex flex-col justify-start items-center py-6 h-[calc(100%-8rem)] md:h-[calc(100vh-8rem)] bg-primary text-complimentary">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl text-complimentary">
          AKTUALNOŚCI
        </h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
      </div>

      <div className="grid grid-cols-1 gap-2 w-[90%] h-[70%] md:grid-cols-8 md:grid-rows-10 md:w-[100%] md:px-4 md:h-[80%] lg:w-[78%] lg:px-0">
        {posts.slice(0, 4).map((post, index) => (
          <MainPageBlogPost key={post._id} post={post} index={index} />
        ))}
      </div>
      <div className="w-[90%] mt-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <Link
          href="/aktualnosci"
          className="w-full flex justify-center md:justify-end "
        >
          <Button className="w-full text-xl px-6 py-6 md:w-auto">
            AKTUALNOŚCI - ŚLEDŹ INFORMACJE{' '}
          </Button>
        </Link>
      </div>
    </div>
  );
}
