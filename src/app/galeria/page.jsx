import ImageModalGallery from '@/components/ImageModalGallery';
import { v2 as cloudinary } from 'cloudinary';
import { IoIosInformationCircleOutline } from 'react-icons/io';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function page() {
  const { resources } = await cloudinary.search.expression().execute();

  return (
    <div className="w-full flex flex-col justify-start items-center py-6">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">GALERIA</h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
        <p className="w-full flex items-center gap-1 text-xs text-neutral-500 font-roboto mt-2">
          <IoIosInformationCircleOutline />
          Wybierz i kliknij zdjęcie aby powiększyc
        </p>
        <ImageModalGallery images={resources} />
      </div>
    </div>
  );
}
