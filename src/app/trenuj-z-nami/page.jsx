import Link from 'next/link';

export default function page() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-6">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
          TRENUJ Z NAMI
        </h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>

        <div className="w-full flex flex-col justify-center items-start font-roboto mt-4 gap-4">
          <p>
            Do klubu można dołączyć właściwie w <b>każdym momencie roku</b>,
            jeśli w danej grupie treningowej jest <b>wolne miejsce</b>.
            Spokojnie! Jeśli takiego miejsca w grupie nie ma, to na pewno nie
            zostawimy Państwa dziecka! Chętnych ciągle przybywa, a my otwieramy
            <b>kolejne grupy treningowe</b>.
          </p>
          <p>
            W OST <b> zawsze</b> dajemy możliwość uczestnictwa w{' '}
            <b>2 darmowych próbnych treningach</b>. Po takich dwóch zajęciach
            Państwa dziecko na pewno będzie już wiedzieć,{' '}
            <b>jak wyglądają zajęcia</b>.
          </p>
          <p>Gdzie trenujemy?</p>
          <p>
            Zbiórki do zajęć rowerowych są{' '}
            <b>na ul. Zientary Malewskiej w Ostródzie</b>. Jeżeli zbierze się
            grupa 6-8 osób, możemy otworzyć grupę treningową w dowolnym miejscu
            na terenie Ostródy.
          </p>
          <p>
            W okresie październik – kwiecień część treningów odbywa się{' '}
            <b>
              w hali gimnastycznej Liceum Ogólnokształcącego Nr I im. Jana
              Bażyńskiego w Ostródzie
            </b>
            . Treningi na trenażerach odbywają się{' '}
            <b>
              w budynku na stadionie lekkoatletycznym przy ul. Wyszyńskiego w
              Ostródzie
            </b>
            .
          </p>
          <div className="w-full flex flex-col justify-center items-start mb-2">
            <h2 className="font-anton mt-4 text-xl md:text-2xl xl:text-3xl mb-2">
              Lokalizacje
            </h2>
            <p className="text-xs text-gray-400 xl:text-sm">
              Kliknij na lokalizację aby otworzyć mapy Google
            </p>
          </div>

          <Link
            href="https://maps.app.goo.gl/XPs7LKmyh49SjLS17"
            target="_blank"
          >
            <b>Parking ul. Zientary Malewskiej</b>
          </Link>
          <Link
            href="https://maps.app.goo.gl/zSbWuiLi2AuAQpo28"
            target="_blank"
          >
            <b>Stadion lekkoatletyczny</b>
          </Link>
          <Link
            href="https://maps.app.goo.gl/L7YbAKhykCQ96EDM6"
            target="_blank"
          >
            <b>
              Hala Liceum Ogtólnokształące nr I im Jana Bażyńskiego w Ostródzie
            </b>
          </Link>
        </div>
      </div>
    </div>
  );
}
