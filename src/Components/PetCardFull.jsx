export function PetCardFull({ animal }) {
  return (
    <div className="flex justify-center items-center p-4 sm:flex-col">
      <div className="border-y-neutral-900 border-solid rounded-3xl shadow-2xl p-8  w-full max-w-xl flex flex-col justify-center bg-white">
        <div className="flex justify-center">
          <img
            src={animal.img}
            alt="foto profilo pet"
            className="rounded-3xl w-96 h-96 object-cover"
          />
        </div>
        <div className="border-gray-400  my-2 w-96">
          <div className="flex justify-between mb-4 mt-6">
            <p className="font-semibold text-2xl">{animal.nome}</p>
            {/*  <button
              className={`rounded-xl p-2 text-white font-semibold text-sm ${
                animal.famiglia === "gatto" ? "bg-[#f6bcb2] hover:bg-dark-purple " : "bg-[#92aa7f] hover:bg-dark-green"
              }`}
            >
              {animal.sesso === "Maschio"
                ? "Vorrei conoscerlo"
                : "Vorrei conoscerla"}
            </button> */}
          </div>

          <p className="text-xs my-2">
            <span className="font-semibold text-sm">Razza: </span>
            {animal.razza}
          </p>

          <p className="text-xs my-2">
            <span className="font-semibold text-sm">Sesso: </span>
            {animal.sesso}
          </p>
          <p className="text-xs my-2">
            <span className="font-semibold text-sm">Età: </span>
            {animal.età}
          </p>
          <p className="text-xs my-2">
            <span className="font-semibold text-sm">Problemi di salute: </span>
            {animal.problematiche}
          </p>
          <p className="text-xs my-2">
            <span className="font-semibold text-sm">Sterilizzazione: </span>
            {animal.sterilizzato}
          </p>
          <p className="text-xs my-2 text-justify">
            <span className="font-semibold text-sm">Descrizione: </span>
            {animal.descrizione}
          </p>
        </div>
      </div>
    </div>
  );
}
