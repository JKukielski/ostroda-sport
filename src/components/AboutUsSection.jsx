import Link from 'next/link';

export default function AboutUsSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-6 bg-complimentary">
      <div className="w-[90%] flex flex-col justify-start items-start md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">O NAS</h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
        <p className="mt-4 font-roboto">
          Uczniowski Klub Sportowy Ostróda Sport Team działa od marca 2022 roku.
          Klub jest dwusekcyjny. Specjalizujemy się w kolarstwie i triathlonie.
          W kolarstwie skupiamy się na kolarstwie górskim. Prowadzimy treningi
          dla dzieci od 6 roku życia. Zawodnicy pracują w grupach treningowych
          podzielonych ze względu na wiek oraz stopień zaawansowania...
          <span>
            <Link href="/o-nas" className="underline">
              Czytaj dalej.
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
