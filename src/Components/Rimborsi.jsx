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
    <section className="relative bg-[url('../src/assets/images/rimborsi.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg ml-1">
              Acquista in tutta tranquillità. Se il prodotto non soddisfa le tue
              aspettative, ti offriamo un rimborso completo entro 15 giorni
              dalla data di acquisto. <br />
            </p>

            <div className="mt-20">
              <a href="#" className="text-2xl font-bold text-pink-600">
                02 12345678
              </a>

              <address className="mt-2 not-italic">
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
                  className="w-full rounded-lg border p-3 text-sm text-gray-800"
                  placeholder="Nome"
                  type="text"
                  id="name"
                  style={{ borderColor: "#92aa7f" }}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border p-3 text-sm text-gray-800"
                    placeholder="Indirizzo Email"
                    type="email"
                    id="email"
                    style={{ borderColor: "#92aa7f" }}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Numero Di Telefono
                  </label>
                  <input
                    className="w-full rounded-lg border p-3 text-sm text-gray-800"
                    placeholder="Numero Di Telefono"
                    type="tel"
                    id="phone"
                    style={{ borderColor: "#92aa7f" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Option1"
                    className="bg-pink text-dark-grey block w-full cursor-pointer rounded-lg p-3 text-gray-600 has-[:checked]:bg-dark-green"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      name="option"
                    />
                    <span className="text-sm"> Conto Corrente </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="bg-pink text-dark-grey block w-full cursor-pointer rounded-lg p-3 text-gray-600 has-[:checked]:bg-dark-green"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      name="option"
                    />
                    <span className="text-sm"> Paypal </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className="bg-pink text-dark-grey block w-full cursor-pointer rounded-lg p-3 text-gray-600 has-[:checked]:bg-dark-green"
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      name="option"
                    />
                    <span className="text-sm"> Buono Amazon </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Motivi rimborso
                </label>
                <textarea
                  className="w-full rounded-lg border p-3 text-sm text-gray-800"
                  placeholder="Motivi rimborso"
                  rows="8"
                  id="message"
                  style={{ borderColor: "#92aa7f" }}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium bg-pink text-dark-grey sm:w-auto"
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
