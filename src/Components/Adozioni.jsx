import { useState } from "react";
import { AdoptionFilters } from "./AdoptionFilters";
import { HeroBannerAdozioni } from "./HeroBannerAdozioni";
import { PetArray } from "./PetArray";

export function Adozioni() {
  const [filterCard, setFilterCard] = useState("tutti");

  return (
    <>
      <HeroBannerAdozioni />
      <AdoptionFilters setFilterCard={ setFilterCard}  filterCard={filterCard}/>
      <PetArray filterCard={filterCard} />
    </>
  );
}
