import React, { useState, useEffect } from "react";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import bannerImage from "../assets/images/banner-donazioni.avif";

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
        "client-id": "YOUR_PAYPAL_CLIENT_ID", // sostituire con l'id paypal
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
      paypalDispatch({
        type: "createOrder",
        intent: "capture",
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: donationAmount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          await actions.order.capture();
          alert("Grazie per la tua donazione!");
        },
        onError: (err) => {
          setDonationError(
            "Si è verificato un errore durante la donazione. Riprova più tardi."
          );
        },
      });
    } else if (donationMethod === "iban") {
      setShowIbanDetails(true);
    } else if (donationMethod === "5x1000") {
      setShow5x1000Details(true);
    }
  };

  return (
    <div className="donate-page">
      <div>
        <div
          className="banner"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
          }}
        ></div>

        <h1
          className="text-5xl md:text-6xl font-bold text-center p-8"
          style={{
            color: "rgb(146, 170, 127)",
            marginTop: "-2rem",
          }}
        >
          Sostieni la nostra causa
        </h1>
      </div>
      <div className="max-w-[800px] mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <p>
          Ogni giorno, centinaia di animali vengono abbandonati, lasciati soli e
          senza speranza. Il nostro rifugio è un faro di luce per queste
          creature indifese, offrendo loro cibo, cure mediche e, soprattutto,
          amore. Ma non possiamo farlo da soli.
        </p>

        <p className="leading-6 mb-3">
          La tua donazione, grande o piccola che sia, fa una differenza enorme.
          Ci permette di continuare a salvare vite, a dare una seconda
          possibilità a chi ne ha più bisogno. Ogni euro conta, ogni gesto di
          generosità è un passo verso un futuro migliore per i nostri amici a
          quattro zampe.
        </p>
        <form onSubmit={handleDonationSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Importo della Donazione
            </label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="0"
              step="0.01"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Metodo di Donazione
            </label>
            <select
              value={donationMethod}
              onChange={(e) => setDonationMethod(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Seleziona un metodo</option>
              <option value="paypal">PayPal</option>
              <option value="iban">IBAN</option>
              <option value="5x1000">5x1000</option>
            </select>
          </div>

          {showIbanDetails && (
            <div className="mt-4">
              <h2 className="font-bold">Coordinate Bancarie:</h2>
              <p>IBAN: IT00 XXXX XXXX XXXX XXXX XXXX</p>
              <p>Intestatario: [Nome dell'organizzazione]</p>
              <p>Causale: Donazione per [Nome della campagna]</p>
            </div>
          )}

          {show5x1000Details && (
            <div className="mt-4">
              <h2 className="font-bold">5x1000:</h2>
              <p>Codice Fiscale: [Codice Fiscale dell'organizzazione]</p>
              <p>Firma nel riquadro "Sostegno del volontariato..."</p>
            </div>
          )}

          {donationError && (
            <p className="error-message text-red-500 font-bold mb-2">
              {donationError}
            </p>
          )}

          <button
            type="submit"
            className="bg-[#f6bcba] text-[#1e1e1e] p-2 rounded-md cursor-pointer hover:bg-[#e59082] transition duration-300 w-full"
            disabled={isPending || !donationAmount}
          >
            {isPending ? (
              <div className="spinner border-t-4 border-[#526742] rounded-full w-5 h-5 animate-spin mx-auto"></div>
            ) : (
              "Dona ora"
            )}
          </button>
        </form>
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
