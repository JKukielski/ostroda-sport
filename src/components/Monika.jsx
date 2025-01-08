import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Monika() {
  return (
    <div className="w-[90%] flex flex-col justify-start items-start my-5 md:w-[100%] md:flex-row md:gap-2 md:px-4 lg:w-[78%] lg:px-0 font-roboto ">
      <div className="relative w-full h-[400px] mb-4 md:w-[50%]  lg:w-[40%] xl:h-[500px] 2xl:h-[850px]">
        <Image
          src="/monika.jpeg"
          alt="image_one"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className=""
        />
      </div>
      <div className="md:w-[45%] md:p-2 lg:w-[60%] xl:p-4 2xl:p-8">
        <div className="w-full flex justify-between mb-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-anton text-xl xl:text-3xl">Monika Habant</h2>
            <p className="text-xs text-gray-400 xl:text-sm">
              Trener UKS OST, Trener Personalny, Dietetyk
            </p>
            <Link
              href="tel:783618532"
              className="flex items-center justify-start gap-1 mt-2"
            >
              <FaPhoneAlt className="text-sm xl:text-xl" />
              <p className="text-sm xl:text-base">783 618 532</p>
            </Link>
            <Link
              href="mailto:Mhabant@icloud.com"
              className="flex items-center justify-start gap-1"
            >
              <MdOutlineAlternateEmail className="text-sm xl:text-xl" />
              <p className="text-sm xl:text-base">mhabant@icloud.com</p>
            </Link>
            <div className="w-full flex items-center justify-start gap-2 mt-2">
              <Link
                className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                href="https://www.facebook.com/p/trenerka_kontrolerka-61550262965572/?locale=ro_RO"
                target="_blank"
              >
                <FaFacebookF className="text-sm xl:text-2xl" />
              </Link>
              <Link
                className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                href="https://www.instagram.com/trenerka_kontrolerka/profilecard/?igsh=YXgzbWNkdmkx
                target='_blank'
M2dq"
              >
                <FaInstagram className="text-sm xl:text-2xl" />
              </Link>
              <Link
                className="bg-additional flex justify-center items-center shadow-sm w-8 h-8 xl:w-12 xl:h-12"
                href="https://www.tiktok.com/@monika.habant?_t=ZN-8shz5qXytz4&amp;_r=1"
                target="_blank"
              >
                <FaTiktok className="text-sm xl:text-2xl" />
              </Link>
            </div>
          </div>
          <div className="relative mb-5 w-[30%] h-[70px] lg:w-[40%] 2xl:h-[150px]">
            <Image
              src="/monika_logo.jpg"
              alt="image_one"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
              className=""
            />
          </div>
        </div>
        <p className="text-sm xl:text-base xl:mt-8 2xl:text-lg">
          Monika Habant - Trener personalny i instruktor siłowni Xtreme Fitness
          Ostróda. Absolwentka studiów licencjackich na kierunku dietetyka i
          studiów podyplomowych na kierunku psychodietetyka. Ukończyła szereg
          kursów specjalistycznych w szkole Profi Fitness School, w tym kurs
          dotyczący treningu dzieci i młodzieży. Z treningiem siłowym związana
          od czasów liceum, a dzięki pracy w klubie OST odkryła nową pasję i
          rozpoczęła swoją kolarską przygodę. W pracy z dziećmi skupia się
          przede wszystkim na budowaniu w nich pewności siebie, nauce
          samodzielności jak i pracy w zespole, a wisienką na tym torcie jest
          niezmiennie - przyjazna atmosfera.
        </p>
      </div>
    </div>
  );
}
