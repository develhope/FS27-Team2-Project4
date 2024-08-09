import React, { useState, useEffect } from "react";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import bannerImage from "../assets/images/imgdonate.jpg";

function Donate() {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [donationAmount, setDonationAmount] = useState("");
  const [donationMethod, setDonationMethod] = useState("");
  const [donationError, setDonationError] = useState(null);
  const [showIbanDetails, setShowIbanDetails] = useState(false);
  const [show5x1000Details, setShow5x1000Details] = useState(false);

  useEffect(() => {
    paypalDispatch({
      type: "resetOptions",
      value: {
        "client-id": "YOUR_PAYPAL_CLIENT_ID", //mettere qui il codice id di paypal
        currency: "EUR",
      },
    });
  }, [paypalDispatch]);

  const handleDonationSubmit = async (event) => {
    event.preventDefault();

    if (!donationAmount || donationAmount <= 0) {
      setDonationError(
        "L'importo della donazione deve essere maggiore di zero."
      );
      return;
    }

    setDonationError(null);

    if (!donationMethod) {
      setDonationError("Per favore, scegli un metodo di donazione.");
      return;
    }

    if (donationMethod === "paypal") {
    } else if (donationMethod === "iban") {
      setShowIbanDetails(true);
    } else if (donationMethod === "5x1000") {
      setShow5x1000Details(true);
    }
  };

  return (
    <div className="donate-page font-sans text-gray-800 mt-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={bannerImage}
            alt="Banner donazioni"
            className="w-full h-[600px] object-cover"
          />
        </div>

        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0 p-8 bg-white rounded-lg shadow-md">
          <form onSubmit={handleDonationSubmit}>
            <h1 className="text-2xl font-semibold text-center mb-4 text-[#526742]">
              Fai la differenza, invia il tuo aiuto
            </h1>
            <h2 className="text-2xl font-semibold text-center mb-6 text-[#92aa7f]">
              Scegli l'importo
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                type="button"
                className={`border rounded-lg py-2 text-center focus:outline-none ${
                  donationAmount === "15" ? "bg-[#92aa7f] text-white" : ""
                }`}
                onClick={() => setDonationAmount("15")}
              >
                €15
              </button>
              <button
                type="button"
                className={`border rounded-lg py-2 text-center focus:outline-none ${
                  donationAmount === "25" ? "bg-[#92aa7f] text-white" : ""
                }`}
                onClick={() => setDonationAmount("25")}
              >
                €25
              </button>
              <button
                type="button"
                className={`border rounded-lg py-2 text-center focus:outline-none ${
                  donationAmount === "50" ? "bg-[#92aa7f] text-white" : ""
                }`}
                onClick={() => setDonationAmount("50")}
              >
                €50
              </button>
              <input
                type="number"
                placeholder="€ Altro importo"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="border rounded-lg py-2 px-3 focus:outline-none"
              />
            </div>

            <h2 className="text-2xl font-semibold text-center mb-4 text-[#1e1e1e]">
              Metodo di pagamento
            </h2>
            <select
              value={donationMethod}
              onChange={(e) => setDonationMethod(e.target.value)}
              className="w-full border rounded-lg py-2 px-3 focus:outline-none mb-4"
            >
              <option value="">Seleziona un metodo</option>
              <option value="paypal">PayPal</option>
              <option value="iban">Bonifico Bancario</option>
              <option value="5x1000">5x1000</option>
            </select>

            {showIbanDetails && (
              <div className="mb-4">
                <h3 className="font-bold">Coordinate Bancarie:</h3>
                <p>IBAN: IT00 XXXX XXXX XXXX XXXX XXXX</p>
                <p>Intestatario: [Nome dell'organizzazione]</p>
                <p>Causale: Donazione per [Nome della campagna]</p>
              </div>
            )}

            {show5x1000Details && (
              <div className="mb-4">
                <h3 className="font-bold">5x1000:</h3>
                <p>Codice Fiscale: [Codice Fiscale dell'organizzazione]</p>
                <p>Firma nel riquadro "Sostegno del volontariato..."</p>
              </div>
            )}

            {donationError && (
              <p className="text-red-500 font-bold mb-2">{donationError}</p>
            )}

            <button
              type="submit"
              className="bg-[#526742] text-white p-2 rounded-md cursor-pointer hover:bg-[#3f5234] transition duration-300 w-full"
              disabled={isPending || !donationAmount}
            >
              {isPending ? (
                <div className="spinner border-t-4 border-white rounded-full w-5 h-5 animate-spin mx-auto"></div>
              ) : (
                "Dona ora"
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-semibold text-center mb-4 text-[#526742]">
          Il Potere di una Donazione
        </h1>
        <h2 className="text-xl font-medium text-center mb-2 text-[#92aa7f]">
          Trasformare un Piccolo Gesto in un Grande Cambiamento
        </h2>
        <p className="text-center text-sm">
          Quando pensiamo alla parola "donazione", spesso immaginiamo semplici
          atti di generosità, gesti che, a prima vista, sembrano piccoli. Ma la
          realtà è che ogni donazione è una scintilla che può innescare un
          grande cambiamento. Ogni volta che scegli di donare, stai dando vita a
          un'azione che si propaga, che tocca vite, e che costruisce un ponte
          verso un futuro migliore.
        </p>

        <h2 className="text-xl font-medium text-center mt-6 mb-2 text-[#92aa7f]">
          Un Futuro Che Dipende da Te
        </h2>
        <p className="text-center text-sm">
          Immagina un mondo in cui ogni bambino, ogni animale, ogni persona
          vulnerabile, riceva l'aiuto di cui ha bisogno. Questo mondo non è
          un'utopia, è una realtà che possiamo costruire insieme. La tua
          donazione è il mattone con cui stiamo edificando un domani più giusto
          e più sicuro. Non è solo una questione di risorse, è una questione di
          visione, di credere che un futuro diverso sia possibile e che ognuno
          di noi abbia il potere di plasmarlo.
        </p>

        <h2 className="text-xl font-medium text-center mt-6 mb-2 text-[#92aa7f]">
          Il Valore della Solidarietà
        </h2>
        <p className="text-center text-sm">
          Viviamo in un mondo dove l'individualismo spesso prende il
          sopravvento, ma è nella solidarietà che troviamo la nostra forza più
          grande. Quando doni, non stai solo aiutando qualcuno in difficoltà,
          stai dicendo al mondo che credi nel valore della comunità, che nessuno
          dovrebbe essere lasciato solo ad affrontare le sfide della vita. La
          tua donazione è un segno tangibile di questa solidarietà, un modo per
          dire "sono con te" a chi ne ha più bisogno.
        </p>

        <h2 className="text-xl font-medium text-center mt-6 mb-2 text-[#92aa7f]">
          Oltre la Donazione: Creare un Impatto Duraturo
        </h2>
        <p className="text-center text-sm">
          Ogni donazione è un seme piantato in un terreno fertile. Ma come ogni
          seme, ha bisogno di cure costanti per crescere e dare frutto. La tua
          donazione non si esaurisce nel momento in cui viene fatta, continua a
          vivere, a crescere, a moltiplicarsi. Permette a progetti di lunga
          durata di vedere la luce, di educare, di proteggere, di guarire.
          Attraverso il tuo contributo, stiamo costruendo qualcosa di duraturo,
          un impatto che si estenderà ben oltre il presente, toccando
          generazioni future.
        </p>

        <h2 className="text-xl font-medium text-center mt-6 mb-2 text-[#92aa7f]">
          Un Piccolo Atto di Generosità, Un Grande Cuore
        </h2>
        <p className="text-center text-sm">
          Non importa l'entità della donazione, ciò che conta è il cuore che c'è
          dietro. Ogni contributo, grande o piccolo, è un segno di speranza. È
          la dimostrazione che, in un mondo a volte freddo e distante, esiste
          ancora calore, empatia, e amore per il prossimo. La tua donazione è un
          riflesso del tuo cuore, un cuore che non si arrende di fronte alle
          difficoltà, che cerca sempre di fare la differenza, ovunque e
          comunque.
        </p>

        <h2 className="text-xl font-medium text-center mt-6 mb-2 text-[#92aa7f]">
          L'Unione fa la Forza
        </h2>
        <p className="text-center text-sm">
          Insieme, possiamo fare ciò che da soli sarebbe impossibile. Quando
          doni, ti unisci a una comunità globale di persone che condividono i
          tuoi stessi valori. Questa unione crea una forza incredibile, capace
          di affrontare sfide colossali. La tua donazione è parte di un
          movimento più grande, un movimento che sta cambiando il mondo, un
          passo alla volta. E insieme, possiamo fare ancora di più.
        </p>

        <h2 className="text-xl font-medium text-center mt-6 mb-2 text-[#92aa7f]">
          Lasciti un'Impronta Indelebile
        </h2>
        <p className="text-center text-sm">
          Ogni donazione è un'impronta lasciata sulla storia. È una
          testimonianza del fatto che hai scelto di fare la differenza, di agire
          con compassione e determinazione. È un segno che, anche di fronte alle
          avversità, hai deciso di rispondere con amore e generosità. Questo
          segno non sbiadirà, rimarrà come un simbolo della tua volontà di
          costruire un mondo migliore.
        </p>
      </div>
    </div>
  );
}

function DonateWrapper() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID", currency: "EUR" }}
    >
      <Donate />
    </PayPalScriptProvider>
  );
}

export default DonateWrapper;
