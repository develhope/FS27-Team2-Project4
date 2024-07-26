export function PetCardFull({ animal }) {
  return (
    <div className="flex rounded-3x1">
      <div className="border-y-neutral-900 border-solid rounded-md p-9 max-w-2xl shadow-xl flex flex-col justify-center bg-white ">
        <img src={animal.img} alt="foto profilo pet " className="rounded-3xl" />

        <div className="border-gray-400 mt-8 ">
          <div className="flex justify-between">
            {" "}
            <p className="font-semibold text-2xl mb-4 ">{animal.nome}</p>
            <button
              className={`rounded-xl p-2 ${
                animal.famiglia === "gatto" ? "bg-[#e4adc9]" : "bg-[#92aa7f]"
              }`}
            >
              {animal.sesso == "Maschio"
                ? "Vorrei conoscerlo"
                : "Vorrei conoscerla"}{" "}
            </button>
          </div>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Razza: </span>
            {animal.razza}
          </p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Sesso: </span>
            {animal.sesso}
          </p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Età: </span>
            {animal.età}
          </p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Problemi di salute: </span>
            {animal.problematiche}
          </p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Sterilizzazione: </span>
            {animal.sterilizzato}
          </p>

          <p className="text-sm text-gray-500 italic text-justify">
            <span className="font-semibold">Descrizione: </span>
            {animal.descrizione}
          </p>
        </div>
      </div>
    </div>
  );
}
