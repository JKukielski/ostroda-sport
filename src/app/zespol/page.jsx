import Jedrzej from '@/components/Jedrzej';
import Monika from '@/components/Monika';

export default function page() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-6">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
          NASZ ZESPÓŁ
        </h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
      </div>

      <Jedrzej />
      <Monika />
    </div>
  );
}
