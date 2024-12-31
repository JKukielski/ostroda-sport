import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="w-full flex justify-center bg-primary text-complimentary font-roboto pt-6 pb-2">
      <div className="w-full lg:w-[80%] flex flex-col px-3">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col">
            {' '}
            <div className="w-[50%] flex justify-start items-center mb-6 pl-3">
              <Link href="/">
                <Image
                  src="/logo_light.png"
                  alt="logo"
                  width={100}
                  height={50}
                  style={{ width: '100px', height: '50px' }}
                />
              </Link>
            </div>
            <div className="px-3">
              <p>Prezes Uczniowskiego Klubu Sportowego Ostróda Sport Team</p>
              <p>Jędrzej Żebrowski</p>
              <p>Tel. 531 039 533</p>
              <p>Zebrowski.kolarstwo@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-3 xl:flex-row xl:gap-8">
            <div className="flex flex-col gap-2">
              <Link href="/o-nas">O Nas</Link>
              <Link href="/1-dla-ostroda-sport-team">
                Przekaż nam 1,5% podatku
              </Link>
              <Link href="/trenuj-z-nami">Trenuj z nami</Link>
              <Link href="/zespol">Nasz zespół</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/#harmonogram">Harmonogram treningów</Link>
              <Link href="/#kontakt">Kontakt i dane</Link>
              <Link href="/aktualnosci">Aktualności</Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          {' '}
          <div className="w-full h-[50px] mb-2 flex justify-center">
            <Link href="https://www.galaxycoding.pl/" target="_blank">
              <Image
                src="/galaxy_logo.svg"
                alt="galaxy-coding-logo"
                width={80}
                height={50}
                objectFit="contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
