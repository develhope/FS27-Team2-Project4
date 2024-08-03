import { useState } from "react";
import { PetCardSmall } from "./PetCardSmall";
import { PetCardFull } from "./PetCardFull";
import cat1 from "../assets/images/cat1.webp";
import cat2 from "../assets/images/cat2.jpg";
import dog1 from "../assets/images/dog1.jpg";
import dog2 from "../assets/images/dog2.jpg";
import dog3 from "../assets/images/dog3.jpg";
import golden from "../assets/images/Golden-Retriever.jpg";
import abissino from "../assets/images/abissino-gatto.jpeg";
import bassotto from "../assets/images/bassotto.jpg";
import beagle from "../assets/images/Beagle.jpg";
import beagle2 from "../assets/images/beagle2.jpg";
import ragdoll from "../assets/images/ragdoll.webp";
import ragdoll2 from "../assets/images/ragdoll.jpg";
import boxer from "../assets/images/boxer-cucciolo.jpg";
import boxer2 from "../assets/images/Boxer.webp";
import shorthair from "../assets/images/british-shorthair.jpg";
import bulldogFR from "../assets/images/bulldogFR.jpg";
import Chihuahua from "../assets/images/Chihuahua.webp";
import dobermann from "../assets/images/dobermann.jpg";
import bengala from "../assets/images/Gatto-Bengala-copia.webp";
import europeo from "../assets/images/gatto-europeo-orig.avif";
import siamese from "../assets/images/gatto-siamese.webp";
import golden2 from "../assets/images/golden-retriever2.jpg";
import golden3 from "../assets/images/golden.jpg";
import husky from "../assets/images/husky.jpg";
import labrador from "../assets/images/labrador.webp";
import maincoon from "../assets/images/maincoon.webp";
import mainecoon from "../assets/images/Maine-Coon.jpg";
import mainecoon3 from "../assets/images/muso-maine-coon.jpg";
import pastoreTedesco from "../assets/images/pastore-tedesco.avif";
import poodle from "../assets/images/Poodle.jpg";
import scottishFold from "../assets/images/scottish_fold.jpg";
import sphinx from "../assets/images/sphinx.png";
import sphinx2 from "../assets/images/sphynx.jpeg";
import terrier from "../assets/images/Terrier.jpg";

export function PetArray({ filterCard }) {
  const [animals] = useState([
    {
      nome: "Jack",
      famiglia: "cane",
      razza: "jack russel",
      sesso: "Maschio",
      img: dog1,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Jack è un vivace jack russel di 2 anni. Ama correre e giocare all'aperto. È un compagno leale e affettuoso, sempre pronto a fare nuove avventure.",
    },
    {
      nome: "Mia",
      famiglia: "gatto",
      razza: "Siamese",
      sesso: "Femmina",
      img: cat1,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Mia è una dolce siamese di 3 anni. È molto curiosa e ama esplorare la casa. È affettuosa e adora le coccole.",
    },
    {
      nome: "Rocky",
      famiglia: "cane",
      razza: "Bulldog",
      sesso: "Maschio",
      img: dog2,
      età: "4",
      problematiche: "Allergie",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Rocky è un bulldog di 4 anni con un cuore d'oro. Nonostante le sue allergie, è sempre pieno di energia e ama giocare con i bambini.",
    },
    {
      nome: "Luna",
      famiglia: "gatto",
      razza: "Persiano",
      sesso: "Femmina",
      img: cat2,
      età: "5",
      problematiche: "Problemi respiratori",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Luna è una persiana di 5 anni con un mantello soffice e bianco. Ha un temperamento calmo e adora rilassarsi sulle ginocchia dei suoi proprietari.",
    },
    {
      nome: "Bella",
      famiglia: "cane",
      razza: "Labrador",
      sesso: "Femmina",
      img: dog3,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzata",
      descrizione:
        "Bella è una labrador di 3 anni, energica e giocherellona. Ama l'acqua e ogni occasione per fare una nuotata è la sua preferita.",
    },
    {
      nome: "Simba",
      famiglia: "gatto",
      razza: "Maine Coon",
      sesso: "Maschio",
      img: maincoon,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Simba è un maine coon di 4 anni, grande e affettuoso. Ama arrampicarsi sugli alberi e osservare il mondo dall'alto.",
    },
    {
      nome: "Max",
      famiglia: "cane",
      razza: "Golden Retriever",
      sesso: "Maschio",
      img: golden,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Max è un golden retriever di 2 anni. È estremamente affettuoso e ama giocare con tutti, cani e umani inclusi.",
    },
    {
      nome: "Chloe",
      famiglia: "gatto",
      razza: "Bengala",
      sesso: "Femmina",
      img: bengala,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Chloe è una bengala di 3 anni con un mantello maculato spettacolare. È molto attiva e ama giocare con i suoi giocattoli.",
    },
    {
      nome: "Buddy",
      famiglia: "cane",
      razza: "Beagle",
      sesso: "Maschio",
      img: beagle,
      età: "4",
      problematiche: "Sovrappeso",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Buddy è un beagle di 4 anni con un amore incondizionato per il cibo. Sta seguendo una dieta speciale per perdere peso.",
    },
    {
      nome: "Nala",
      famiglia: "gatto",
      razza: "British Shorthair",
      sesso: "Femmina",
      img: shorthair,
      età: "5",
      problematiche: "Problemi dentali",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Nala è una british shorthair di 5 anni con un temperamento tranquillo. Ama dormire e rilassarsi in posti caldi.",
    },
    {
      nome: "Charlie",
      famiglia: "cane",
      razza: "Bassotto",
      sesso: "Maschio",
      img: bassotto,
      età: "3",
      problematiche: "Problemi alla schiena",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Charlie è un bassotto di 3 anni. È molto affettuoso e ama seguire i suoi proprietari ovunque vadano.",
    },
    {
      nome: "Lily",
      famiglia: "gatto",
      razza: "Ragdoll",
      sesso: "Femmina",
      img: ragdoll,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Lily è una ragdoll di 2 anni con un temperamento dolce e rilassato. Ama essere coccolata e portata in braccio.",
    },
    {
      nome: "Oscar",
      famiglia: "cane",
      razza: "Poodle",
      sesso: "Maschio",
      img: poodle,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Oscar è un poodle di 4 anni. È molto intelligente e adora imparare nuovi trucchi e giochi.",
    },
    {
      nome: "Coco",
      famiglia: "gatto",
      razza: "Sphynx",
      sesso: "Femmina",
      img: sphinx,
      età: "3",
      problematiche: "Pelle sensibile",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Coco è una sphynx di 3 anni con una pelle delicata che necessita di cure particolari. È molto affettuosa e ama il contatto umano.",
    },
    {
      nome: "Duke",
      famiglia: "cane",
      razza: "Dobermann",
      sesso: "Maschio",
      img: dobermann,
      età: "5",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Duke è un dobermann di 5 anni, protettivo e leale. È molto educato e ama fare lunghe passeggiate con il suo proprietario.",
    },
    {
      nome: "Molly",
      famiglia: "gatto",
      razza: "Maine Coon",
      sesso: "Femmina",
      img: mainecoon,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Molly è una maine coon di 4 anni. È grande, affettuosa e ama passare il tempo accoccolata accanto al suo proprietario.",
    },
    {
      nome: "Bentley",
      famiglia: "cane",
      razza: "Chihuahua",
      sesso: "Maschio",
      img: Chihuahua,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Bentley è un chihuahua di 2 anni. È piccolo ma ha una grande personalità e ama stare in braccio.",
    },
    {
      nome: "Lola",
      famiglia: "gatto",
      razza: "Scottish Fold",
      sesso: "Femmina",
      img: scottishFold,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Lola è una scottish fold di 3 anni con orecchie adorabilmente piegate. È molto giocosa e ama interagire con le persone.",
    },
    {
      nome: "Zeus",
      famiglia: "cane",
      razza: "Husky",
      sesso: "Maschio",
      img: husky,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Zeus è un husky di 4 anni con un'energia infinita. Ama correre e giocare nella neve.",
    },
    {
      nome: "Whiskers",
      famiglia: "gatto",
      razza: "Europeo",
      sesso: "Maschio",
      img: europeo,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Whiskers è un europeo di 2 anni. È curioso e ama esplorare ogni angolo della casa.",
    },
    {
      nome: "Bailey",
      famiglia: "cane",
      razza: "Boxer",
      sesso: "Maschio",
      img: boxer,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Bailey è un boxer di 3 anni. È affettuoso e giocherellone, perfetto per una famiglia attiva.",
    },
    {
      nome: "Missy",
      famiglia: "gatto",
      razza: "Siamese",
      sesso: "Femmina",
      img: siamese,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Missy è una siamese di 4 anni. È molto vocale e ama interagire con il suo proprietario.",
    },
    {
      nome: "Rex",
      famiglia: "cane",
      razza: "Pastore Tedesco",
      sesso: "Maschio",
      img: pastoreTedesco,
      età: "5",
      problematiche: "Displasia dell'anca",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Rex è un pastore tedesco di 5 anni. È molto intelligente e ha bisogno di esercizio regolare per mantenersi in salute.",
    },
    {
      nome: "Sassy",
      famiglia: "gatto",
      razza: "Abissino",
      sesso: "Femmina",
      img: abissino,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Sassy è una abissina di 3 anni con un carattere vivace. Ama arrampicarsi e giocare con i suoi giocattoli.",
    },
    {
      nome: "Rusty",
      famiglia: "cane",
      razza: "Terrier",
      sesso: "Maschio",
      img: terrier,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Rusty è un terrier di 4 anni. È coraggioso e sempre pronto a cacciare piccoli animali nel giardino.",
    },
    {
      nome: "Bella",
      famiglia: "gatto",
      razza: "Maine Coon",
      sesso: "Femmina",
      img: mainecoon3,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Bella è una maine coon di 2 anni. È grande, soffice e adora essere spazzolata ogni giorno.",
    },
    {
      nome: "Scout",
      famiglia: "cane",
      razza: "Golden Retriever",
      sesso: "Maschio",
      img: golden2,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Scout è un golden retriever di 3 anni, sempre felice e pronto a giocare. È perfetto per le famiglie con bambini.",
    },
    {
      nome: "Daisy",
      famiglia: "gatto",
      razza: "Ragdoll",
      sesso: "Femmina",
      img: ragdoll2,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Daisy è una ragdoll di 4 anni. È molto affettuosa e ama essere tenuta in braccio.",
    },
    {
      nome: "Buddy",
      famiglia: "cane",
      razza: "Beagle",
      sesso: "Maschio",
      img: beagle2,
      età: "4",
      problematiche: "Sovrappeso",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Buddy è un beagle di 4 anni che ama il cibo e le passeggiate all'aperto. È sempre in cerca di nuove avventure.",
    },
    {
      nome: "Smokey",
      famiglia: "gatto",
      razza: "British Shorthair",
      sesso: "Maschio",
      img: shorthair,
      età: "5",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Smokey è un british shorthair di 5 anni. È molto tranquillo e ama dormire vicino al camino.",
    },
    {
      nome: "Luna",
      famiglia: "cane",
      razza: "Labrador Retriever",
      sesso: "Femmina",
      img: labrador,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzata",
      descrizione:
        "Luna è una labrador retriever di 3 anni. Ama giocare all'aperto e nuotare nei laghi.",
    },
    {
      nome: "Oliver",
      famiglia: "gatto",
      razza: "Europeo",
      sesso: "Maschio",
      img: europeo,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Oliver è un europeo di 4 anni, molto curioso e sempre in cerca di nuove avventure.",
    },
    {
      nome: "Rocco",
      famiglia: "cane",
      razza: "Bulldog Francese",
      sesso: "Maschio",
      img: bulldogFR,
      età: "4",
      problematiche: "Problemi respiratori",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Rocco è un bulldog francese di 4 anni. È molto affettuoso e ama stare con i bambini.",
    },
    {
      nome: "Lucy",
      famiglia: "gatto",
      razza: "Sphynx",
      sesso: "Femmina",
      img: sphinx2,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzata",
      descrizione:
        "Lucy è una sphynx di 2 anni. Ha una pelle delicata e ama essere coccolata dai suoi proprietari.",
    },
    {
      nome: "Bruno",
      famiglia: "cane",
      razza: "Boxer",
      sesso: "Maschio",
      img: boxer2,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Bruno è un boxer di 3 anni. È molto energico e ama giocare con i bambini.",
    },
    {
      nome: "Milo",
      famiglia: "gatto",
      razza: "Maine Coon",
      sesso: "Maschio",
      img: mainecoon3,
      età: "5",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Milo è un maine coon di 5 anni. È grande, soffice e ama essere spazzolato ogni giorno.",
    },
    {
      nome: "Riley",
      famiglia: "cane",
      razza: "Golden Retriever",
      sesso: "Femmina",
      img: golden3,
      età: "4",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzata",
      descrizione:
        "Riley è una golden retriever di 4 anni. È molto affettuosa e ama giocare all'aperto con i bambini.",
    },
    {
      nome: "Tiger",
      famiglia: "gatto",
      razza: "Bengala",
      sesso: "Maschio",
      img: bengala,
      età: "3",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Tiger è un bengala di 3 anni. Ha un mantello maculato spettacolare e ama giocare con i suoi giocattoli.",
    },
    {
      nome: "Bentley",
      famiglia: "cane",
      razza: "Beagle",
      sesso: "Maschio",
      img: beagle2,
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Bentley è un beagle di 2 anni, curioso e sempre alla ricerca di nuove avventure.",
    },
  ]);

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  //variabile per caricare tre file di cards e aggiungerle a gruppi
  const [visibleRows, setVisibleRows] = useState(3);
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
            className="bg-light-green text-white py-2 px-4 rounded-md font-bold "
            onClick={handleLoadMore}
          >
            Carica Altre
          </button>
        </div>
      )}
    </div>
  );
}
