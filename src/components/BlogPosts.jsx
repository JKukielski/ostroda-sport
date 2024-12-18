import BlogPostCard from './BlogPostCard';

export default async function BlogPosts({ filteredPosts }) {
  return (
    <div className="w-[90%] flex flex-col justify-start items-start mb-5 gap-6 md:w-[100%] md:flex-row md:flex-wrap md:px-4 lg:w-[78%] lg:px-0 lg:gap-8">
      {filteredPosts.map((post) => (
        <BlogPostCard post={post} key={post._id} />
      ))}
    </div>
  );
}
