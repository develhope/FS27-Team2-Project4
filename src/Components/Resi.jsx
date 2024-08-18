export default function () {
  return (
    <section className="relative bg-[url(../src/assets/images/cute-animals-group-white-background.jpg)] bg-cover bg-center bg-no-repeat ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg mt-8 ml-1">
              "Un'esperienza d'acquisto completa: prodotti sostenibili di alta
              qualità , consigli personalizzati e resi facili. La nostra
              indipendenza ci permette di offrirti il meglio, senza vincoli."
            </p>

            <div className="mt-20">
              <a href="#" className="text-2xl font-bold text-pink-600  text-light-green">
                {" "}
                02 12345678{" "}
              </a>

              <address className="mt-2 not-italic">
              Via dei Mici Felici 15, 20122 Milano
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="nome">
                  Nome
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                    className=" bg-pink text-dark-grey block w-full cursor-pointer rounded-lg  p-3 text-gray-600   has-[:checked]:bg-dark-green "
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> In Filiale </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="  bg-pink text-dark-grey block w-full cursor-pointer rounded-lg  p-3 text-gray-600   has-[:checked]:bg-dark-green "
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Tramite Corriere </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className=" bg-pink text-dark-grey block w-full cursor-pointer rounded-lg  p-3 text-gray-600  has-[:checked]:bg-dark-green "
                    tabIndex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Tramite Punto di Ritiro </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Motivi Reso"
                  rows="8"
                  id="message"
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