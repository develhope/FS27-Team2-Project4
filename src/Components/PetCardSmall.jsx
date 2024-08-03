export function PetCardSmall({ animal, onClick }) {
  return (
    <div className="w-56 ">
      <a
        onClick={onClick}
        className="block rounded-lg p-4 shadow-xl shadow-slate-400 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        <img
          alt="cat"
          src={animal.img}
          className="w-auto rounded-md object-cover h-48  hover:"
        />

        <div className="mt-2">
          <div>
            <p className="text-sm text-soft-grey">{animal.età} anni</p>
            <dd className="font-semibold text-2xl text-dark-grey">{animal.nome}</dd>
          </div>
        </div>
      </a>
    </div>
  );
}
