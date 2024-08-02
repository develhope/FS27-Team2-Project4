export function PetCardSmall({ animal, onClick }) {
  return (
    <div className="w-56 ">
      <a
        onClick={onClick}
        className="block rounded-lg p-4 shadow-xl shadow-slate-400 hover:shadow-md  "
      >
        <img
          alt="cat"
          src={animal.img}
          className="w-auto rounded-md object-cover h-48  hover:animate-pulse"
        />

        <div className="mt-2">
          <div>
            <p className="text-sm text-gray-500">{animal.età}anni</p>
            <dd className="font-semibold text-2xl">{animal.nome}</dd>
          </div>
        </div>
      </a>
    </div>
  );
}
