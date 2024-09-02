import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RimborsoForm() {
  const { hash } = useLocation();

  useEffect(() => {
    console.log("ciao");
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        console.log(element);
        console.log(hash);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <section className="relative bg-[url('../src/assets/images/cute-animals-group-white-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12 bg-white bg-opacity-60">
            <p className="max-w-xl text-lg mt-8 ml-1 drop-shadow-2xl">
              Un'esperienza d'acquisto completa: prodotti sostenibili di alta
              qualità, consigli personalizzati e resi facili. La nostra
              indipendenza ci permette di offrirti il meglio, senza vincoli.
            </p>

            <div className="mt-20">
              <a
                href="#"
                className="text-2xl font-bold text-pink-600 drop-shadow-2xl"
              >
                02 12345678
              </a>

              <address className="mt-2 not-italic drop-shadow-2xl">
                Via dei Mici Felici 15, 20122 Milano
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nome
                </label>
                <input
                  className="w-full rounded-lg border border-[#92aa7f] p-3 text-sm text-gray-800"
                  placeholder="Nome"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-[#92aa7f] p-3 text-sm text-gray-800"
                    placeholder="Indirizzo Email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Numero Di Telefono
                  </label>
                  <input
                    className="w-full rounded-lg border border-[#92aa7f] p-3 text-sm text-gray-800"
                    placeholder="Numero Di Telefono"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Option1"
                    className="block w-full cursor-pointer rounded-lg p-3 border border-[#92aa7f] text-sm text-gray-800 drop-shadow-2xl"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      name="option"
                    />
                    <span>In Filiale</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="block w-full cursor-pointer rounded-lg p-3 border border-[#92aa7f] text-sm text-gray-800 drop-shadow-2xl"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      name="option"
                    />
                    <span>Tramite Corriere</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className="block w-full cursor-pointer rounded-lg p-3 border border-[#92aa7f] text-sm text-gray-800 drop-shadow-2xl"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      name="option"
                    />
                    <span>Tramite Punto di Ritiro</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Motivi Reso
                </label>
                <textarea
                  className="w-full rounded-lg border border-[#92aa7f] p-3 text-sm text-gray-800"
                  placeholder="Motivi Reso"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-pink-600 text-dark-grey px-5 py-3 font-medium sm:w-auto"
                >
                  Invia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
