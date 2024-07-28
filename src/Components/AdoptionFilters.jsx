export function AdoptionFilters({ filterCard, setFilterCard }) {
  function handleFilter(e) {
    setFilterCard(e.target.name);
  }
  const selected = "bg-red-300";
  return (
    <div>
      {/*   TODO----> SISTEMARE I COLORI DEI BOTTONI SELEZIONATI*/}
      {/*   TODO----> MOSTRARE IL FILTER IN TUTTA LA RESPONSIVE--SCOMPARE SE RIMPICCIOLITO A MOBILE*/}
      <div className="hidden sm:block">
        <nav className="flex gap-6 justify-center p-10" aria-label="Tabs">
          <button
            onClick={handleFilter}
            name="tutti"
            className={`${
              filterCard === "tutti" ? selected : ""
            } shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
          >
            Tutti
          </button>

          <button
            onClick={handleFilter}
            name="gatto"
            className={`${
              filterCard === "gatto" ? selected : ""
            } shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
          >
            Gatti
          </button>

          <button
            onClick={handleFilter}
            name="cane"
            className={`${
              filterCard === "cane" ? selected : ""
            } shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
          >
            Cani
          </button>

          <button
            onClick={handleFilter}
            name="cuore"
            className={`${
              filterCard === "cuore" ? selected : ""
            } shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600`}
            aria-current="page"
          >
            Adozioni del cuore
          </button>
        </nav>
      </div>
    </div>
  );
}
