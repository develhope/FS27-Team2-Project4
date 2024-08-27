import React from 'react';
import adoptionhome from '../assets/images/adoptionhome.png';

export function AdoptionPreview() {
  return (
    <div
      className="hero h-[45rem] flex items-center justify-center"
      style={{
        backgroundImage: `url(${adoptionhome})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <div className="hero-overlay  bg-opacity-60 absolute inset-0"></div>
      <div className="hero-content text-neutral-content text-center z-10 relative">
        <div className=" mx-auto bg-white bg-opacity-50 hover:bg-opacity-80 p-10">
          <h1 className="mb-5 text-dark-grey text-opacity-80 text-7xl font-bold drop-shadow-2xl ">Incontra <strong className="block font-extrabold text-dark-green drop-shadow-2xl "> l'anima gemella pelosa </strong> del tuo cuore</h1>
          <p className=" text-xl text-dark-grey mb-5 drop-shadow-2xl">
          Il tuo nuovo compagno ti sta aspettando, dacci un’occasione per presentartelo.
          </p>
          <a
            href="./Adozioni"
            className="bg-light-green text-white px-4 py-2 rounded-lg hover:bg-dark-green"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </div>
  );
}



