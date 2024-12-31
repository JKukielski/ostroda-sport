import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Schedule() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-4 min-h-[200px] bg-primary"
      id="harmonogram"
    >
      <div className="w-[90%] flex flex-col justify-end items-end md:w-[100%] md:px-4 lg:w-[78%] lg:px-0 lg:justify-between text-complimentary xl:flex-row-reverse xl:items-start">
        <div className="flex flex-col items-end justify-start">
          <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
            HARMONOGRAM
          </h1>
          <div className="w-10 h-2 bg-additional md:w-16"></div>
          <div className="w-full flex justify-end items-center">
            <div className="flex flex-col items-end">
              <p className="mt-4 font-roboto text-right">
                Harmonogram treningów dostępny jest w dysku Google pod poniższym
                linkiem.
              </p>
              <Link
                href="https://docs.google.com/file/d/1-
            1C_YvsplQAtKdFPTkPfAOoTEGMzHHqV/edit?usp=docslist_api&amp;filetype=msword"
                className=" relative text-additional font-roboto mt-4"
              >
                <Button className="md:text-xl md:px-6 md:py-6">
                  Harmonogram treningów
                </Button>
                {/* Harmonogram treningów
              <PiHandPointingBold className="absolute -left-5 -bottom-5 text-additional text-3xl" /> */}
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-col">
          <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
            KONTAKT
          </h1>
          <div className="w-10 h-2 bg-additional md:w-16"></div>
          <div className="w-full flex flex-col md:flex-row gap-6 mt-4 md:mt-8 md:gap-10 ">
            <div className="flex flex-col font-roboto gap-2">
              <h2 className="font-anton text-xl md:text-2xl xl:text-3xl">
                DANE
              </h2>
              <div className="mt-2">
                <p>Uczniowski Klub Sportowy</p>
                <p>{`"Ostróda Sport Team"`}</p>
              </div>
              <div>
                <p>NIP 741 21 62 106</p>
                <p>REGON 521605435</p>
              </div>
              <div>
                <p>Rachunek BNP Paribas</p>
                <p>Odbiorca: UKS Ostróda Sport Team</p>
                <p>64 1600 1462 1805 9280 2000 0001</p>
              </div>
            </div>
            <div className="flex flex-col font-roboto">
              <h2 className="font-anton text-xl mb-2 md:text-2xl xl:text-3xl">
                KONTAKT
              </h2>
              <Link
                href="tel:531039533"
                className="flex items-center justify-start gap-1 mt-2"
              >
                <FaPhoneAlt className="text-sm xl:text-xl" />
                <p className="">531 039 531</p>
              </Link>
              <Link
                href="mailto:ostrodasportteam@gmail.com"
                className="flex items-center justify-start gap-1"
              >
                <MdOutlineAlternateEmail className="text-sm xl:text-xl" />
                <p className="">ostrodasportteam@gmail.com</p>
              </Link>
              <div className="w-full flex items-center justify-start gap-2 mt-4 text-primary">
                <Link
                  className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                  href="https://www.facebook.com/ostrodasportteam"
                  target="_blank"
                >
                  <FaFacebookF className="text-sm xl:text-2xl" />
                </Link>
                <Link
                  className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                  href="https://www.instagram.com/ostrodasportteam?igsh=MTZvZWU4MHk3dHA1dA=="
                  target="_blank"
                >
                  <FaInstagram className="text-sm xl:text-2xl" />
                </Link>
                <Link
                  className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                  href="https://www.tiktok.com/@ostrodaaportteam?_t=8rUtwcuLsbm&amp;_r=1"
                  target="_blank"
                >
                  <FaTiktok className="text-sm xl:text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
