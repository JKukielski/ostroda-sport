export default function page() {
  return (
    <div className="w-full flex flex-col justify-start items-center py-6">
      <div className="w-[90%] flex flex-col justify-start items-start mb-5 md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl">
          1,5% PODATKU
        </h1>
        <div className="w-10 h-2 bg-additional md:w-16"></div>
        <div className="w-full flex flex-col justify-center items-start my-4">
          <h2 className="font-anton mt-4 text-xl md:text-2xl xl:text-3xl">
            Przekaż nam 1,5% podatku i wesprzyj UKS Ostróda Sport Team
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-start font-roboto">
          <p>
            Środki można przekazać dzięki{' '}
            <b>Fundacja Studencka Młodzi Młodym</b>, która przekazuje nam{' '}
            <b>KAŻDĄ </b>zebraną złotówkę.
          </p>
          <p>Przy rozliczaniu PIT należy wpisać:</p>
          <p>
            <b>KRS: 0000270261</b>
          </p>
          <p>
            <b>Cel Szczegółowy: Ostróda Sport Team 12764</b>
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-start my-4">
          <h2 className="font-anton mt-4 text-xl md:text-2xl xl:text-3xl">
            Jak wykorzystamy środki?
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-start font-roboto">
          <p>
            Szkolenie dzieci i młodzieży wiąże się z poświeceniem wielu godzin
            na treningach, odwagi młodych zawodników, odpowiedniego zaplecza
            trenerskiego oraz
            <b>dużych nakładów finansowych</b>. Kolarstwo i triathlon to{' '}
            <b>drogie sporty</b>. Bardzo drogi sprzęt i dalekie wyjazdy
            pochłaniają środki w bardzo dużym stopniu. <b>Każda osoba </b>
            rozliczająca PIT może wesprzeć UKS Ostróda Sport Team, przekazując
            1,5% podatku. Może się to wydawać niewielką kwotą,{' '}
            <b>ale naprawdę nam pomaga!</b>
          </p>
          <p>
            Zebrane środki przekażemy na{' '}
            <b>
              {' '}
              dojazdy na zawody, sprzęt sportowy, pracę trenerów oraz wsparcie
              najbardziej ambitnej młodzieży
            </b>
            . Planujemy startować na{' '}
            <b>zawodach ogólnopolskich i walczyć o jak najlepsze lokaty</b>.
            Każda zgromadzona złotówka zostanie{' '}
            <b>należycie wydana i wesprze rozwój klubu </b>oraz zawodników. Za
            każdą kwotę <b>ogromnie dziękujemy!</b>
          </p>
        </div>
      </div>
    </div>
  );
}
