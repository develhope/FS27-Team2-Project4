import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AdoptionFilters } from "./AdoptionFilters";
import { HeroBannerAdozioni } from "./HeroBannerAdozioni";
import { PetArray } from "./PetArray";
import AdoptionForm from "./AdoptionForm";

export function Adozioni() {
  const [filterCard, setFilterCard] = useState("tutti");

  const { hash } = useLocation();
  
    useEffect(() => {
      console.log("ciao")
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          console.log(element)
          console.log(hash)
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);
 

  return (
    <div className="flex flex-col justify-center items-center">
      <HeroBannerAdozioni filterCard={filterCard} />
      <AdoptionFilters setFilterCard={setFilterCard} filterCard={filterCard} />
      <PetArray filterCard={filterCard} />
      <AdoptionForm />
    </div>
  );
}
