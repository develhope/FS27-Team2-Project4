export function PetCardFull({ animal }) {
  return (
    <div className="flex ">
      <div className="border-y-neutral-900 border-solid rounded-md p-6 max-w-2xl shadow-xl flex flex-col justify-center bg-white">
        <img src={animal.img} alt="foto profilo pet " className="rounded-2xl" />
        <div className="border-gray-400 p-6">
          <p className="font-semibold text-2xl">{animal.nome}</p>
          <p className="text-sm text-gray-500">
            <span className="mr-2">Razza</span>{animal.razza}
          </p>
          <p className="text-sm text-gray-500">{animal.età}</p>
          <p className="text-sm text-gray-500">{animal.problematiche}</p>
          <p className="text-sm text-gray-500">{animal.sterilizzato}</p>
          <p className="text-sm text-gray-500 italic text-justify">{animal.descrizione}</p>
        </div>
      </div>
    </div>
  );
}