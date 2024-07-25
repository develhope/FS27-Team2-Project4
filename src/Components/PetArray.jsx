import { useState } from "react";
import { PetCardSmall } from "./PetCardSmall";
import { PetCardFull } from "./PetCardFull";
//ARRAY DI TEST PER COSTRUZIONE CARD
export function PetArray() {
  const [animals] = useState([
    {
      nome: "Gino",
      famiglia: "gatto",
      razza: "Europeo",
      img: "https://media-assets.wired.it/photos/615f1481cd947bb96c08e0e6/1:1/w_590,h_590,c_limit/wired_placeholder_dummy.png",
      età: "5",
      problematiche: "Nessuna",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi hic dolor reiciendis non tempora possimus nihil. Corrupti deleniti itaque cumque possimus aut voluptas eius et delectus. Eius, repudiandae saepe?",
    },
    {
      nome: "Mario",
      famiglia: "gatto",
      razza: "Europeo",
      img: "https://storage.ecodibergamo.it/media/photologue/2016/1/18/photos/non-postare-gatto-ce-ne-un-saccosul-web-impazza-la-micio-mania-video_87d58066-bdd0-11e5-b525-42bf2a5fea51_512_512.jpg",
      età: "8",
      problematiche: "zampa mancante",
      sterilizzato: "Sterilizzato",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi hic dolor reiciendis non tempora possimus nihil. Corrupti deleniti itaque cumque possimus aut voluptas eius et delectus. Eius, repudiandae saepe?",
    },
    {
      nome: "Gianni",
      famiglia: "cane",
      razza: "jack russel",
      img: "https://www.viridea.it/wp-content/uploads/2017/04/Il-piccolo-cane-Jack-Russell-Terrier-lord-inglese.jpg",
      età: "2",
      problematiche: "Nessuna",
      sterilizzato: "Non sterilizzato",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi hic dolor reiciendis non tempora possimus nihil. Corrupti deleniti itaque cumque possimus aut voluptas eius et delectus. Eius, repudiandae saepe?",
    },
  ]);

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleOverlayClick = () => {
    setSelectedAnimal(null);
  };

  return (
    <>
      <div className="flex gap-4 ">
        {animals.map((animal, index) => (
          <PetCardSmall
            key={index}
            animal={animal}
            onClick={() => handleCardClick(animal)}
          />
        ))}
      </div>
      {selectedAnimal && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center "
          onClick={handleOverlayClick}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <PetCardFull animal={selectedAnimal} />
          </div>
        </div>
      )}
    </>
  );
}
