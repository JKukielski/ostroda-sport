import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Jedrzej() {
  return (
    <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:flex-row md:w-[100%] md:gap-2 md:px-4 lg:w-[78%] lg:px-0 font-roboto ">
      <div className="relative w-full h-[400px] mb-4 md:w-[50%] lg:w-[40%] xl:h-[500px] 2xl:h-[850px]">
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
      <div className="md:w-[45%] md:p-2 lg:w-[60%] xl:p-4 2xl:p-8">
        <div className="w-full flex justify-between mb-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-anton text-xl xl:text-3xl">
              Jędrzej Żebrowski
            </h2>
            <p className="text-xs text-gray-400 xl:text-sm">
              Prezes UKS OST, Trener
            </p>
            <Link
              href="tel:531039533"
              className="flex items-center justify-start gap-1 mt-2"
            >
              <FaPhoneAlt className="text-sm xl:text-xl" />
              <p className="text-sm xl:text-base">531 039 533</p>
            </Link>
            <Link
              href="mailto:Zebrowski.kolarstwo@gmail.com"
              className="flex items-center justify-start gap-1"
            >
              <MdOutlineAlternateEmail className="text-sm xl:text-xl" />
              <p className="text-sm xl:text-base">
                zebrowski.kolarstwo@gmail.com
              </p>
            </Link>
            <div className="w-full flex items-center justify-start gap-2 mt-2">
              <Link
                className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                href="https://www.facebook.com/ZebROWERowski"
                target="_blank"
              >
                <FaFacebookF className="text-sm xl:text-2xl" />
              </Link>
              <Link
                className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                href="https://www.instagram.com/zebrowerowski.coach/profilecard/?igsh=dW13dG80YmR
meW1n"
                target="_blank"
              >
                <FaInstagram className="text-sm xl:text-2xl" />
              </Link>
            </div>
          </div>
          <div className="relative mb-5 w-[50%] h-[70px] 2xl:h-[150px]">
            <Image
              src="/zebrowerowski.JPG"
              alt="image_one"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
              className=""
            />
          </div>
        </div>

        <p className="text-sm xl:text-base xl:mt-8 2xl:text-lg">
          Założyciel i prezes UKS OST, trener zawodników, magister fizjoterapii.
          Od najmłodszych lat związany ze sportem. Po wielu latach treningów
          tenisa stołowego zakończył przygodę i zaczął uprawiać kolarstwo
          górskie. Od wielu lat ściga się w zawodach kolarstwa górskiego w całej
          Polsce. W 2022 roku założył UKS Ostróda Sport Team. Swoją sportową
          pasję przekazuje młodzieży, pokazując jak stawać się lepszym każdego
          dnia. Spotkacie go również na siłowni, gdzie prowadzi treningi
          personalne, usprawniając podopiecznych.
        </p>
      </div>
    </div>
  );
}
