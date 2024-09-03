import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MetodiPagamento() {
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
    <>
      

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-dark-green">
            Famiglie per Sempre: Traguardi e Sogni
          </h2>

          <p className="mt-4 text-dark-grey-500 sm:text-xl">
            House of Paws è orgogliosa di annunciare che quest'anno Grazie al
            vostro supporto, siamo riusciti a trasformare le loro vite e a
            creare nuove famiglie felici. Questo è solo uno dei tanti esempi di
            come il vostro sostegno abbia cambiato la vita di un animale. Grazie
            a voi, continuiamo a lavorare per un futuro in cui tutti gli animali
            abbiano una casa.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Vendite Shop
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl text-dark-green">
              €4.580
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Cani Adottati
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl text-dark-green">
              24
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Gatti Adottati
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl text-dark-green">
              36
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Donazioni Ricevute
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl text-dark-green">
              €15k
            </dd>
          </div>
        </dl>
      </div>

      <div className=" rounded-lg border border-gray-100 py-3 shadow-sm bg-pink mt-6 mr-14 ml-14">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 py-10">
            <dt className="font-medium text-gray-900">Paypal</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {" "}
              È come avere un portafoglio digitale sempre a portata di mano,
              collegato al tuo conto bancario o alla tua carta di credito.
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 py-10">
            <dt className="font-medium text-gray-900">Conto Corrente</dt>
            <dd className="text-gray-700 sm:col-span-2">
              il conto corrente è come un portafoglio digitale sicuro e
              conveniente, gestito dalla tua banca
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 py-10">
            <dt className="font-medium text-gray-900">5x1000</dt>
            <dd className="text-gray-700 sm:col-span-2">
              Il 5x1000 è una quota dell'IRPEF (Imposta sul Reddito delle
              Persone Fisiche) che puoi decidere di destinare a sostegno di
              organizzazioni non profit
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 py-10">
            <dt className="font-medium text-gray-900"> Postepay(p2p) </dt>
            <dd className="text-gray-700 sm:col-span-2">
              . È un sistema che consente a due o più persone di scambiarsi
              dati, file o denaro direttamente tra loro, senza passare
              attraverso un server centrale.
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
