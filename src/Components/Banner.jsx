import { Link } from "react-router-dom";


export default function Banner () {
return (
    <>
  

<section
  className="relative bg-[url(../src/assets/images/cld-header.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-[#D7D7D7]">
      Incontra l'anima gemella del tuo cuore

        <strong className="block font-extrabold text-[#D8B3B9]"> ... pelosa! </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-[#D7D7D7]">
      Il tuo cuore è pronto per un nuovo amore? Allora vieni a trovarci e scegli il tuo compagno ideale. Un'esperienza indimenticabile ti aspetta.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to="/Adozioni"
          className="block w-full rounded bg-[#D8B3B9] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#D8B3B9]focus:outline-none  active:bg-[#D8B3B9] sm:w-auto"
        >
          Adotta Ora
        </Link>

        <Link
          to="/about"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#D8B3B9] shadow hover:text-[#D8B3B9] focus:outline-none  active:text-[#D8B3B9] sm:w-auto"
        >
          Scopri di più
        </Link>
      </div>
    </div>
  </div>
</section>
</>
)
}
