import React from "react";
import Volontario1 from "../assets/images/Volontario1.jpg";
import Volontario2 from "../assets/images/Volontario2.jpg";
import TopVolontariato from "../assets/images/top-volonariato.jpg";

const DiventaVolontario = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full">
      <div className="bg-gray-200 p-4 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-left">
            <h1
              className="m-0 text-3xl md:text-4xl lg:text-5xl"
              style={{ color: "#92aa7f" }}
            >
              L'Importanza del Volontariato
            </h1>
            <p className="mt-2 text-gray-600 text-justify text-sm md:text-base lg:text-lg">
              Il volontariato non è solo un'azione, è un impegno che rispecchia
              la nostra umanità. Quando scegliamo di donare il nostro tempo agli
              altri, stiamo contribuendo a costruire una società più empatica e
              solidale. Il volontariato offre l'opportunità di influenzare
              positivamente la vita delle persone, creando un legame che
              arricchisce sia chi aiuta che chi viene aiutato. È un modo per
              sentirsi parte di qualcosa di più grande, per fare la differenza,
              e per lasciare un'impronta duratura nel mondo.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <img
              src={Volontario1}
              alt="Volontario 1"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 lg:p-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="order-2 md:order-1">
            <img
              src={Volontario2}
              alt="Volontario 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-left order-1 md:order-2">
            <h1
              className="mb-5 text-3xl md:text-4xl lg:text-5xl"
              style={{ color: "#92aa7f" }}
            >
              Perché Diventare Volontario?
            </h1>
            <p className="text-gray-600 text-justify text-sm md:text-base lg:text-lg">
              Diventare volontario è un viaggio che va oltre il semplice atto
              del dare; è un'esperienza che arricchisce l'anima. Nel momento in
              cui decidi di dedicarti agli altri, scopri una nuova prospettiva
              sulla vita, sviluppi competenze e incontri persone che condividono
              la tua visione di un mondo migliore. Il volontariato ti permette
              di essere una forza di cambiamento positivo, di portare speranza e
              supporto dove ce n'è più bisogno. È un'opportunità per crescere,
              per imparare, e per fare la differenza in modo significativo.
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-auto"
        style={{
          backgroundImage: `url(${TopVolontariato})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "auto",
          paddingTop: "60%",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h3
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center px-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Vuoi diventare Volontario?
          </h3>
        </div>
      </div>

      <div className="p-4 md:p-8 lg:p-10 bg-gray-100">
        <div className="max-w-full mx-auto text-left">
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Compila il form per essere ricontattato
          </p>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Value"
                className="w-full md:w-3/4 lg:w-1/2 p-3 text-lg border-2 rounded-md"
                style={{ borderColor: "#92aa7f", backgroundColor: "white" }}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="surname" className="block text-lg mb-2">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                required
                placeholder="Value"
                className="w-full md:w-3/4 lg:w-1/2 p-3 text-lg border-2 rounded-md"
                style={{ borderColor: "#92aa7f", backgroundColor: "white" }}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Value"
                className="w-full md:w-3/4 lg:w-1/2 p-3 text-lg border-2 rounded-md"
                style={{ borderColor: "#92aa7f", backgroundColor: "white" }}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Value"
                className="w-full md:w-3/4 lg:w-1/2 p-3 text-lg border-2 rounded-md h-32"
                style={{ borderColor: "#92aa7f", backgroundColor: "white" }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-black py-2 px-6 rounded-md text-lg self-start"
              style={{ backgroundColor: "#f6bcb2" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiventaVolontario;
