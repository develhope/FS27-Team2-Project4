export function AdoptionFilters({ filterCard, setFilterCard }) {
  function handleFilter(e) {
    setFilterCard(e.target.name);
  }

  const selected = "bg-[#f6bcb2]  text-gray-100";
  return (
    <div>
      <div>
        <nav className="flex gap-6 justify-center p-10" aria-label="Tabs">
          <button
            onClick={handleFilter}
            name="tutti"
            className={`${
              filterCard === "tutti" ? selected : ""
            } shrink-0 rounded-lg p-4 pr-8 pl-8 text-sm font-semibold text-gray-800 hover:bg-[#f6bcb2] hover:text-gray-700`}
          >
            Tutti
          </button>

          <button
            onClick={handleFilter}
            name="gatto"
            className={`${
              filterCard === "gatto" ? "bg-[#9F7CB4] text-gray-100" : ""
            } shrink-0 rounded-lg p-4 pr-8 pl-8 text-sm font-semibold text-gray-800 hover:bg-[#f6bcb2] hover:text-gray-700`}
          >
            Gatti
          </button>

          <button
            onClick={handleFilter}
            name="cane"
            className={`${
              filterCard === "cane" ? "bg-[#457B9D] text-gray-100" : ""
            } shrink-0 rounded-lg p-4 pr-8 pl-8 text-sm font-semibold text-gray-800 hover:bg-[#f6bcb2] hover:text-gray-700`}
          >
            Cani
          </button>

          <button
            onClick={handleFilter}
            name="cuore"
            className={`${
              filterCard === "cuore" ? selected : ""
            } shrink-0 rounded-lg font-semibold p-4 pr-8 pl-8 text-gray-800 hover:bg-[#f6bcb2] hover:text-gray-700`}
            aria-current="page"
          >
            Adozioni del cuore
          </button>
        </nav>
      </div>
    </div>
  );
}
