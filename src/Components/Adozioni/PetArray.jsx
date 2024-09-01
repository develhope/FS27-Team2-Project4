import { useState } from "react";
import { PetCardSmall } from "./PetCardSmall";
import { PetCardFull } from "./PetCardFull";

import gatto1 from "../../assets/images/gatto1.png";
import gatto2 from "../../assets/images/gatto2.png";
import gatto3 from "../../assets/images/gatto3.png";
import gatto4 from "../../assets/images/gatto4.png";
import gatto5 from "../../assets/images/gatto5.png";
import gatto6 from "../../assets/images/gatto6.png";
import gatto7 from "../../assets/images/gatto7.png";

import cane1 from "../../assets/images/cane1.png";
import cane2 from "../../assets/images/cane2.png";
import cane3 from "../../assets/images/cane3.png";
import cane4 from "../../assets/images/cane4.png";
import cane5 from "../../assets/images/cane5.png";
import cane6 from "../../assets/images/cane6.png";
import cane7 from "../../assets/images/cane7.png";
import cane8 from "../../assets/images/cane8.png";
import cane9 from "../../assets/images/cane9.png";
import cane10 from "../../assets/images/cane10.png";
import cane11 from "../../assets/images/cane11.png";
import cane12 from "../../assets/images/cane12.png";

export function PetArray({ filterCard }) {
  const [animals] = useState([
    {
      nome: "Jacko",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Maschio",
      img: cane1,
      età: "2",
      problematiche: "Problemi alla colonna vertebrale",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Jacko è un vivace cagnetto di 2 anni. Ama correre e giocare all'aperto. È un compagno leale e affettuoso, sempre pronto a fare nuove avventure.",
    },
    {
      nome: "Mia",
      famiglia: "gatto",
      razza: "Meticcio",
      sesso: "Femmina",
      img: gatto1,
      età: "3",
      problematiche: "Non può muovere le zampe posteriori",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Mia è una dolce gattina di 3 anni. È molto curiosa e ama esplorare la casa. È affettuosa e adora le coccole.",
    },
    {
      nome: "Rocker",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Maschio",
      img: cane2,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Rocky ha 4 anni e un cuore d'oro. Nonostante le sue allergie, è sempre pieno di energia e ama giocare con i bambini.",
    },
    {
      nome: "Pooppy",
      famiglia: "gatto",
      razza: "Meticcio",
      sesso: "Femmina",
      img: gatto2,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Mia è una dolce gattina di 3 anni. È molto curiosa e ama esplorare la casa. È affettuosa e adora le coccole.",
    },

    {
      nome: "Simba",
      famiglia: "gatto",
      razza: "Meticcio",
      sesso: "Maschio",
      img: gatto3,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Simba è un gatto curioso di 2 anni. È molto indipendente, ma ama le attenzioni quando decide lui. Un esploratore nato.",
    },
    {
      nome: "Sadie",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Femmina",
      img: cane9,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Sadie è una cagnolina di 3 anni molto leale. Ama stare in compagnia e seguire il suo padrone ovunque. È molto protettiva.",
    },
    {
      nome: "Oliver",
      famiglia: "gatto",
      razza: "Meticcio",
      sesso: "Maschio",
      img: gatto4,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Oliver è un gatto di 4 anni tranquillo e affettuoso. Ama dormire vicino alle persone e farsi coccolare.",
    },
    {
      nome: "Toby",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Maschio",
      img: cane10,
      età: "5",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Toby è un cane di 5 anni molto tranquillo. Ama rilassarsi in casa, ma è sempre pronto per una passeggiata. È un compagno fedele.",
    },
    {
      nome: "Whiskers",
      famiglia: "gatto",
      razza: "Meticcio",
      sesso: "Maschio",
      img: gatto6,
      età: "5",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Whiskers è un gatto di 5 anni molto calmo. Ama rilassarsi in posti caldi e tranquilli, ma è sempre pronto per una coccola.",
    },
    {
      nome: "Daisy",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Femmina",
      img: cane3,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Daisy è una cagnolina dolce di 4 anni. Ama stare all'aria aperta e fare lunghe passeggiate. È molto gentile e amorevole.",
    },
    {
      nome: "Bailey",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Maschio",
      img: cane8,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Bailey è un giovane cane di 2 anni pieno di energia. Adora esplorare nuovi posti e giocare all'aperto. È molto vivace e curioso.",
    },
    {
      nome: "Luna",
      famiglia: "gatto",
      razza: "Meticcio",
      sesso: "Femmina",
      img: gatto7,
      età: "1",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Luna è una gattina vivace di 1 anno. Adora arrampicarsi e giocare con qualsiasi cosa che si muova. È molto affettuosa e dolce.",
    },
    {
      nome: "Lucy",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Femmina",
      img: cane5,
      età: "5",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Lucy è una cagnolina tranquilla di 5 anni. Ama rilassarsi in giardino e osservare il mondo che la circonda. È molto affettuosa.",
    },
    {
      nome: "Rocky",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Maschio",
      img: cane12,
      età: "3",
      problematiche: "Occhio sinistro cieco",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Rocky è un cane energico di 3 anni. Ama correre e giocare con altri cani. È molto socievole e affettuoso.",
    },
    {
      nome: "Molly",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Femmina",
      img: cane11,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Molly è una cagnolina dolce di 4 anni. Ama stare vicino alle persone e ricevere coccole. È molto affettuosa e gentile.",
    },
    {
      nome: "Coco",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Femmina",
      img: cane7,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Coco è una cagnolina affettuosa di 4 anni. Ama le coccole e stare vicino alle persone. È molto dolce e calma.",
    },
    {
      nome: "Max",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Maschio",
      img: cane4,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Max è un cane giovane e vivace di 2 anni. Adora giocare con la palla e fare attività fisica. È un compagno fedele e protettivo.",
    },
    {
      nome: "Buddy",
      famiglia: "cane",
      razza: "Meticcio",
      sesso: "Maschio",
      img: cane6,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Buddy è un cane di 3 anni allegro e giocherellone. Adora fare amicizia con tutti, sia persone che altri cani. È molto socievole.",
    },
    {
      nome: "Bella",
      famiglia: "gatto",
      razza: "Meticcio",
      sesso: "Femmina",
      img: gatto5,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Bella è una gatta di 3 anni molto intelligente. Ama osservare tutto e tutti, e adora giocare con i suoi giocattoli.",
    },
  ]);

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  //
  //variabile per caricare tre file di cards e aggiungerle a gruppi
  const [visibleRows, setVisibleRows] = useState(3);
  //
  const [isCardVisible, setIsCardVisible] = useState();
  const cardsPerRow = 5;
  const visibleCards = visibleRows * cardsPerRow;

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
    setIsCardVisible(true);
  };

  const handleOverlayClick = () => {
    setIsCardVisible(false);
    setTimeout(() => {
      setSelectedAnimal(null);
    }, 300);
  };

  const handleLoadMore = () => {
    setVisibleRows(visibleRows + 3);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/*         lo slice ritorna solo una porzione dell'array quindi posso usarlo per renderizzare solo un tot di elementi
           */}{" "}
          {animals
            .slice(0, visibleCards)
            .filter((card) => {
              if (filterCard === "tutti") {
                return card === card;
              } else if (filterCard === "cuore") {
                return card.problematiche !== "Nessuna";
              } else {
                return card.famiglia === filterCard;
              }
            })
            .map((animal, index) => (
              <PetCardSmall
                key={index}
                animal={animal}
                onClick={() => handleCardClick(animal)}
              />
            ))}
        </div>
        {selectedAnimal && (
          <div
            className="fixed inset-0 z-40 bg-dark-grey bg-opacity-50 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div
              className={`transform transition-transform duration-300 ${
                isCardVisible ? "scale-100" : "scale-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <PetCardFull animal={selectedAnimal} />
            </div>
          </div>
        )}
      </div>
      {visibleCards < animals.length && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-pink shadow-lg hover:bg-light-purple hover:shadow-xl text-dark-grey p-4 pr-8 pl-8 mt-16 rounded-md font-bold "
            onClick={handleLoadMore}
          >
            Carica Altre
          </button>
        </div>
      )}
    </div>
  );
}
