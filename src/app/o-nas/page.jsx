import Image from 'next/image';
import { MdDirectionsBike } from 'react-icons/md';

export default function page() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-6">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">O NAS</h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
        <div className="font-roboto mt-4">
          <div className="flex flex-col items-start gap-4">
            <p>
              Uczniowski Klub Sportowy Ostróda Sport Team działa od marca 2022
              roku. <b>Klub jest dwusekcyjny</b>. Specjalizujemy się w{' '}
              <b>kolarstwie i triathlonie</b>. W kolarstwie skupiamy się na
              <b> kolarstwie górskim</b>. Prowadzimy treningi dla dzieci od{' '}
              <b>6 roku życia</b>. Zawodnicy pracują w grupach treningowych
              podzielonych ze względu na wiek oraz stopień zaawansowania.
            </p>
            <div className="flex flex-col w-full md:flex-row md:gap-4 lg:justify-center lg:gap-16">
              <div className="relative w-full h-[600px] md:h-[550px] lg:h-[600px] lg:w-[400px]">
                <Image
                  src="/team_4.jpg"
                  alt="team_image"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="relative w-full h-[600px] md:h-[550px] lg:h-[600px] lg:w-[400px]">
                <Image
                  src="/team_5.jpg"
                  alt="team_image_2"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p>
              Klub powstał z <b>inicjatywy Jędrzeja Żebrowskiego</b>, który jako
              pasjonat kolarstwa górskiego startował w zawodach MTB i postawił
              przekazać swoją sportową pasję dzieciom.
            </p>
            <p>
              Naszym celem jest{' '}
              <b>
                szkolenie dzieci i młodzieży w kolarstwie oraz triathlonie,
                propagowanie zdrowego trybu życia i wzrost popularności naszych
                dyscyplin sportowych.
              </b>{' '}
              Największy nacisk w OST kładziemy na zachęcenie do{' '}
              <b>uprawiania sportu</b>. Naszą myślą przewodnią jest, że{' '}
              <b>SPORT UCZY ŻYCIA</b>. Sport ma zapewnić rozwój i przygotwać
              młodego człowieka do dorosłego życia poprzez rozwój wielu cech,
              takich jak{' '}
              <b>
                wytrwałość, punktualność, współpraca, systematyczność i
                zaanagażowanie
              </b>
              .
            </p>
            <p>
              Kolarstwo i triathlon to{' '}
              <b>niezwykle trudne, ale i ciekawe dyscypliny sportowe</b>, które
              zapewniają wiele wrażeń i niezapomnianych przygód. Regularne
              uczestnictwo w naszych zajęciach pozwala poprawiać swoje
              przygotowanie kondycyjne oraz techniczne. Przez sport kształtujemy
              również młode charaktery. Uczymy{' '}
              <b>zdrowej rywalizacji, współzawodnictwa</b>, ale również{' '}
              <b>wspierania się w grupie</b>, jaką jest drużyna – tworząc bardzo
              trwałe więzi. Bardzo duży nacisk kładziemy na uprawianie sportu
              zgodnie z zasadą <b>FAIR-PLAY</b>.
            </p>
            <div className="relative w-full h-[300px] md:h-[550px] lg:h-[650px] xl:h-[650px]">
              <Image
                src="/team_two.jpg"
                alt="team_image_3"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p>
              Nasi zawodnicy{' '}
              <b>z powodzeniem startują w zawodach i wyścigach.</b> Często
              stając na podium wielu sportowych imprez.
              <b> Każdy zawodnik daje z siebie wszystko na treningach</b>{' '}
              starając się przybliżyć do swoich sportowych marzeń, a w{' '}
              <b>UKS OST</b> pomagamy te marzenia osiągnąć. Zapraszamy do nas,
              żeby zacząć swoją <b>sportową przygodę</b> z kolarstwem lub
              triathlonem.
            </p>
            <p>
              UKS OST <b>to nie tylko treningi i wyścigi.</b> Prowadzimy{' '}
              <b>spotkania z młodzieżą w szkołach.</b> Poruszamy wiele ważnych
              tematów – bezpieczeństwo w ruchu drogowym, jak ważna jest pasja w
              życiu, aż wreszcie promujemy sport, aktywność fizyczną i zasady
              zdrowego odżywania.
            </p>

            <p>
              Organizujemy <b>szkolenia i prelekcje</b>. Zwiększamy wiedzę i
              świadomość rodziców oraz zawodników. Na szkoleniach poruszamy
              tematy takie jak, podstawowa fizjologia wysiłku fizycznego, metody
              regeneracji i odnowy biologicznej, suplementacja, odżywianie w
              sporcie, metody radzenia sobie ze stresem, aż po tematy związane
              ze wsparciem zawodnika przez rodziców.
            </p>
            <p>
              Jesteśmy obecni na wielu{' '}
              <b>sportowych wydarzeniach w Ostródzie i okolicy</b>. Można nas
              spotkać podczas corocznego Rajdu Rowerowego Dylewska Góra, Dni
              Ostródy, Sportowego Rodzinnego Dnia Niepodległości w hali OCSiR.
            </p>
            <p>
              Regularnie organizujemy{' '}
              <b>otwarte treningi kolarstwa górskiego i szosowego</b> dla
              wszystkich chętnych osób. W wyznaczone wcześniej dni, spotykamy
              się przy Molo nad Jeziorem Drwęckim w Ostródzie. Dwie grupy
              prowadzone przez naszych trenerów są podzielone ze względu na
              poziom zaawansowania pokonują kilkadziesiąt kilometrów po
              najpiękniejszych miejscach naszego regionu.
            </p>
            <div className="relative w-full h-[300px] md:h-[550px] lg:h-[650px] xl:h-[650px]">
              <Image
                src="/team_one.jpg"
                alt="team_image_4"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p>
              <b>Organizujemy imprezy sportowe!</b> 3 października 2024 roku w
              hali OCSiR byliśmy współorganizatorami zawodów{' '}
              <b>TRI POP – MÓJ PIERWSZY TRIATHLON</b>. W imprezie wzięło udział
              100 dzieci i młodzieży ze szkół podstawowych. Zawody były bardzo
              udane, a już podczas samych zawodów pojawiły się pytania o kolejne
              edycje.
            </p>
            <p>
              Nasi zawodnicy z powodzeniem startują w zawodach i wyścigach.
              Często stając na podium wielu sportowych imprez.
            </p>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="font-anton mt-4 text-xl md:text-2xl xl:text-3xl">
                Najważniejsze osiągnięcia naszych zawodników
              </h2>
              <h3 className="font-anton text-lg md:text-xl xl:text-2xl mt-4">
                Kolarstwo
              </h3>
              <div className="w-10 h-2 bg-additional md:w-16"></div>
            </div>
            <div className="flex flex-col items-start text-left gap-4 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  7. miejsce w drużynowej klasyfikacji generalnej cyklu Łaciate
                  Mazury MTB 2024
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  9. miejsce w drużynowej klasyfikacji generalnej cyklu Milko
                  Mazury MTB 2023
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  9. miejsce w drużynowej klasyfikacji generalnej cyklu Milko
                  Mazury MTB 2022
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 mt-4">
              <h4 className="font-anton text-base md:text-lg xl:text-xl">
                Międzywojewódzkie Mistrzostwa Młodzików w kolarstwie górskim,
                Żukowo 2024
              </h4>
            </div>
            <div className="flex flex-col items-start text-left gap-4 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>4. miejsce – Wiktor Karwowski</p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>39. miejsce – Stanisław Struk</p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>43. miejsce – Tomasz Janowski</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 mt-4">
              <h4 className="font-anton text-base md:text-lg xl:text-xl">
                Mistrzostwa Polski Szkół Podstawowych w kolarstwie Górskim, Śrem
                2024
              </h4>
            </div>
            <div className="flex flex-col items-start text-left gap-4 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>12. miejsce - Wiktor Karwowski, klasa VIII</p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>5. miejsce - Iga Rawdanowicz, klasa IV</p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>21. miejsce – Mateusz Jarosz, klasa IV</p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>29. miejsce – Maksymilian Ostrowski, klasa V</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 mt-4">
              <h4 className="font-anton text-base md:text-lg xl:text-xl">
                Mistrzostwa Województwa Warmińsko Mazurskiego w kolarstwie
                górskim, Prostki 2024
              </h4>
            </div>
            <div className="flex flex-col items-start text-left gap-4 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>2. miejsce – Patrycja Żebrowska, Młodziczka</p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>4. miejsce – Wiktor Karwowski, Młodzik</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start mt-4">
              <h3 className="font-anton text-lg md:text-xl xl:text-2xl mt-4">
                Triathlon
              </h3>
              <div className="w-10 h-2 bg-additional md:w-16"></div>
            </div>
            <div className="flex flex-col items-start text-left gap-4 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  3. Miejsce – Maciej Wiśniewski, Mistrzostwa Polski, dystans
                  sprint – Susz 2024
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  2. Miejsce – Maciej Wiśniewski, Mistrzostwa Polski Strażaków w
                  triathlonie, dystans olimpijski, Kraśnik 2024
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  4. miejsce – Maciej Wiśniewski, MŚ IM 2023 w kat. 20-24 lata -
                  Nicea, Francja 2023
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  4. miejsce – Maciej Wiśniewski, ME IM 2023 w kat, 20-24 lata -
                  Frankfurt, Niemcy 2023
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  2 miejsce – Maciej Wiśniewski, MŚ ITU 2023, dystansie długim,
                  w kat. 20-24 lata - Ibiza, Hiszpania 2023
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  21. miejsce – Maciej Wiśniewski, Mistrzostwa Polski Strażaków,
                  dystans Olimpijski – Kraśnik 2023
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  1. Miejsce – Maciej Wiśniewski - Mistrzostwa Świata ITU,
                  dystans Olimpijski w kat. 20-24 lata - Abu Dhabi 2022
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start mt-4">
              <h3 className="font-anton text-lg md:text-xl xl:text-2xl mt-4">
                Duathlon
              </h3>
              <div className="w-10 h-2 bg-additional md:w-16"></div>
            </div>
            <div className="flex flex-col items-start text-left gap-4 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  14. miejsce – Maciej Wiśniewski, Mistrzostwa Polski w
                  duathlonie, kat. Elita, Rumia 2024
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start mt-4">
              <h3 className="font-anton text-lg md:text-xl xl:text-2xl mt-4">
                Cross Duathlon
              </h3>
              <div className="w-10 h-2 bg-additional md:w-16"></div>
            </div>
            <div className="flex flex-col items-start text-left gap-4 text-sm md:text-base">
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  6. miejsce – Mateusz Naruniec, Mistrzostwa Polski Age Group w
                  cross duathlonie, kat. 16-29 lat, Pelplin 2024
                </p>
              </div>
              <div className="flex items-start gap-4">
                <MdDirectionsBike fontSize={26} />
                <p>
                  8. miejsce – Szymon Kaliszewski, Mistrzostwa Polski Age Group
                  w cross duathlonie, kat. 16-29 lat, Pelplin 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
