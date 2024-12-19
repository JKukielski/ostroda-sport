import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function Monika() {
  return (
    <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0 font-roboto ">
      <div className="w-full flex justify-between mb-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-anton text-xl">Monika Habant</h2>
          <p className="text-xs text-gray-400">Trener OST</p>
          <Link
            href="tel:727665171"
            className="flex items-center justify-start gap-1 mt-2"
          >
            <FaPhoneAlt fontSize={14} />
            <p className="text-sm">727 665 171</p>
          </Link>
          <Link
            href="mailto:Mhabant@icloud.com"
            className="flex items-center justify-start gap-1"
          >
            <MdOutlineAlternateEmail fontSize={14} />
            <p className="text-sm">mhabant@icloud.com</p>
          </Link>
          <div className="w-full flex items-center justify-start gap-2 mt-2">
            <Link
              className="bg-additional flex justify-center items-center shadow-sm w-8 h-8"
              href="https://www.facebook.com/p/trenerka_kontrolerka-61550262965572/?locale=ro_RO"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="bg-additional flex justify-center items-center shadow-sm w-8 h-8"
              href="https://www.instagram.com/trenerka_kontrolerka/profilecard/?igsh=YXgzbWNkdmkx
M2dq"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm">
        Monika Habant - Trener personalny i instruktor siłowni Xtreme Fitness
        Ostróda. Absolwentka studiów licencjackich na kierunku dietetyka i
        studiów podyplomowych na kierunku psychodietetyka. Ukończyła szereg
        kursów specjalistycznych w szkole Profi Fitness School, w tym kurs
        dotyczący treningu dzieci i młodzieży. Z treningiem siłowym związana od
        czasów liceum, a dzięki pracy w klubie OST odkryła nową pasję i
        rozpoczęła swoją kolarską przygodę. W pracy z dziećmi skupia się przede
        wszystkim na budowaniu w nich pewności siebie, nauce samodzielności jak
        i pracy w zespole, a wisienką na tym torcie jest niezmiennie - przyjazna
        atmosfera.
      </p>
    </div>
  );
}
