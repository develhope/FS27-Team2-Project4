
import heroAdoption from '../assets/images/hero-adoption.jpg';

export function HeroBannerAdozioni() {
  return (
    <section 
      className="relative h-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroAdoption})` }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:flex-col lg:items-center lg:px-8">
        <div className="lg:flex">
          <h1 className="text-2xl font-extrabold sm:text-5xl text-[#526742]">
            NON COMPRARE, ADOTTA!
            <strong className="block font-extrabold text-[#92aa7f]">
              Adotta un animale e trasforma una vita.
            </strong>
          </h1>
        </div>
      </div>
    </section>
  );
}