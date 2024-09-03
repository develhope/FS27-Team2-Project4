export function AdoptionFilters({ filterCard, setFilterCard }) {
  function handleFilter(e) {
    setFilterCard(e.target.name);
  }

  const selected = "bg-light-green text-white font-semibold";
  return (
    <div>
      <div>
        <nav className="flex gap-6 justify-center p-10" aria-label="Tabs">
          <button
            onClick={handleFilter}
            name="tutti"
            className={`${
              filterCard === "tutti" ? selected : ""
            } shrink-0 rounded-lg py-2 px-4 text-sm  text-gray-800 hover:bg-light-grey hover:text-dark-grey `}
          >
            Tutti
          </button>

          <button
            onClick={handleFilter}
            name="gatto"
            className={`${
              filterCard === "gatto" ? "bg-light-purple text-white font-semibold" : ""
            } shrink-0 rounded-lg py-2 px-4 text-sm  text-gray-800 hover:bg-light-grey hover:text-dark-grey`}
          >
            Gatti
          </button>

          <button
            onClick={handleFilter}
            name="cane"
            className={`${
              filterCard === "cane" ? "bg-light-blue text-white font-semibold" : ""
            } shrink-0 rounded-lg py-2 px-4 text-sm  text-gray-800 hover:bg-light-grey hover:text-dark-grey`}
          >
            Cani
          </button>

          <button
            onClick={handleFilter}
            name="cuore"
            className={`${
              filterCard === "cuore" ? selected : ""
            } shrink-0 rounded-lg py-2 px-4 text-gray-800 hover:bg-light-grey hover:text-dark-grey`}
            aria-current="page"
          >
            Adozioni del cuore
          </button>
        </nav>
      </div>
    </div>
  );
}
