export function PetCard({ animal }) {
  return (
    <div className="w-56 ">
      <a
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 hover:shadow-lg"
      >
        <img
          alt="cat"
          src={animal.img}
          className="w-auto rounded-md object-cover"
        />

        <div className="mt-2">
          <div>
            <p className="text-sm text-gray-500">{animal.età}anni</p>
            <dd className="font-semibold text-2xl">{animal.nome}</dd>
          </div>

          <div className="mt-4 flex justify-between text-xs">
            <div className="flex flex-col justify-center">
              <svg
                id="problematiche"
                //conditional styling per impostare il colore dell'svg in base al valore dichiarato nella chiave
                className={`size-4 ${
                  animal.problematiche == "Nessuna"
                    ? "text-blue-700"
                    : "text-gray-500"
                }`}
                viewBox="0 0 24 24"
                //assicurarsi che fill sia impostato su currentcolor
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <path d="m13.5 9h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3zm-6.5 10h10v-3h-10zm15-17v18.5a3.5 3.5 0 0 1 -3.5 3.5h-13a3.5 3.5 0 0 1 -3.5-3.5v-18.5h5.338a3.5 3.5 0 0 1 3.162-2h3a3.5 3.5 0 0 1 3.162 2zm-3 3h-5v-1.5a.5.5 0 0 0 -.5-.5h-3a.5.5 0 0 0 -.5.5v1.5h-5v15.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <svg
                className={`size-4 ${
                  animal.sterilizzato == "Sterilizzato"
                    ? "text-blue-700"
                    : "text-gray-500"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                fill="currentColor"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="m23.121,1.879c-1.17-1.17-3.072-1.17-4.242,0L.293,20.465c-.15.15-.249.345-.281.555-.058.371.015.922.388,1.357.243.284.706.623,1.523.623.474,0,.88.009,1.116,0,1.8-.071,3.553-.479,5.209-1.211,2.591-1.146,4.37-3.201,5.161-5.955l9.712-9.712c1.17-1.17,1.17-3.072,0-4.242ZM7.439,19.959c-1.425.63-2.932.98-4.479,1.042-.191.008-.339.008-.381.006l7.033-7.033,1.769,1.65c-.669,2.016-1.992,3.473-3.941,4.335Zm14.268-15.252l-9.217,9.216-1.463-1.364L20.293,3.293c.391-.391,1.023-.391,1.414,0s.39,1.024,0,1.414Z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
