import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Jedrzej() {
  return (
    <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0 font-roboto ">
      <div className="w-full flex justify-between mb-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-anton text-xl">Jędrzej Żebrowski</h2>
          <p className="text-xs text-gray-400">Prezes UKS OST, Trener</p>
          <Link
            href="tel:531039533"
            className="flex items-center justify-start gap-1 mt-2"
          >
            <FaPhoneAlt fontSize={14} />
            <p className="text-sm">531 039 533</p>
          </Link>
          <Link
            href="mailto:Zebrowski.kolarstwo@gmail.com"
            className="flex items-center justify-start gap-1"
          >
            <MdOutlineAlternateEmail fontSize={14} />
            <p className="text-sm">zebrowski.kolarstwo@gmail.com</p>
          </Link>
          <div className="w-full flex items-center justify-start gap-2 mt-2">
            <Link
              className="bg-additional flex justify-center items-center shadow-sm w-8 h-8"
              href="https://www.facebook.com/ZebROWERowski"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="bg-additional flex justify-center items-center shadow-sm w-8 h-8"
              href="https://www.instagram.com/zebrowerowski.coach/profilecard/?igsh=dW13dG80YmR
meW1n"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className="relative mb-5 w-[50%] h-[70px]">
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
      <p className="text-sm">
        Założyciel i prezes UKS OST, trener zawodników, magister fizjoterapii.
        Od najmłodszych lat związany ze sportem. Po wielu latach treningów
        tenisa stołowego zakończył przygodę i zaczął uprawiać kolarstwo górskie.
        Od wielu lat ściga się w zawodach kolarstwa górskiego w całej Polsce. W
        2022 roku założył UKS Ostróda Sport Team. Swoją sportową pasję
        przekazuje młodzieży, pokazując jak stawać się lepszym każdego dnia.
        Spotkacie go również na siłowni, gdzie prowadzi treningi personalne,
        usprawniając podopiecznych.
      </p>
    </div>
  );
}
