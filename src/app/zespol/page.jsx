import Jedrzej from '@/components/Jedrzej';
import Monika from '@/components/Monika';
import Image from 'next/image';

export default function page() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-6 h-[calc(100%-8rem)] md:h-[calc(100vh-8rem)]">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
          NASZ ZESPÓŁ
        </h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
      </div>
      <div className="relative w-[90%] h-[400px] mb-4">
        <Image
          src="/jedrzej.JPG"
          alt="image_one"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className=""
          priority
        />
      </div>
      <Jedrzej />
      <div className="relative w-[90%] h-[400px] mb-4">
        <Image
          src="/monika.jpeg"
          alt="image_one"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className=""
        />
      </div>
      <Monika />
    </div>
  );
}
