import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Navbar from "./Navbar.jsx";

function Donate() {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [donationAmount, setDonationAmount] = useState("10");
  const [donationError, setDonationError] = useState(null);

  useEffect(() => {
    paypalDispatch({
      type: "resetOptions",
      value: {
        "client-id": "YOUR_PAYPAL_CLIENT_ID", // qui si deve mettere il codice id di paypal
        currency: "EUR",
      },
    });

    paypalDispatch({
      type: "setLoadingStatus",
      value: "pending",
    });
  }, [paypalDispatch]);

  const handleDonationSubmit = (event) => {
    event.preventDefault();
    if (donationAmount <= 0) {
      setDonationError("L'importo della donazione deve essere maggiore di zero.");
    } else {
      setDonationError(null);
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
          const details = await actions.order.capture();
          alert("Grazie per la tua donazione!");
        },
        onError: (err) => {
          setDonationError(
            "Si è verificato un errore durante la donazione. Riprova più tardi."
          );
        },
      });
    }
  };

  return (
    <div className="donate-page">
      <Navbar />

      <div className="max-w-[800px] mx-auto mt-20 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-[#526742] text-center mb-4">Sostieni la nostra causa</h1>
        <p className="leading-6 mb-3">
          Ogni giorno, centinaia di animali vengono abbandonati, lasciati soli e
          senza speranza. Il nostro rifugio è un faro di luce per queste
          creature indifese, offrendo loro cibo, cure mediche e, soprattutto,
          amore. Ma non possiamo farlo da soli.{" "}
        </p>

        <p className="leading-6 mb-3">
          La tua donazione, grande o piccola che sia, fa una differenza enorme.
          Ci permette di continuare a salvare vite, a dare una seconda
          possibilità a chi ne ha più bisogno. Ogni euro conta, ogni gesto di
          generosità è un passo verso un futuro migliore per i nostri amici a
          quattro zampe.{" "}
        </p>
        {donationError && (
          <p className="error-message text-red-500 font-bold">
            {donationError}
          </p>
        )}
        <form onSubmit={handleDonationSubmit}>
          <label htmlFor="donationAmount" className="font-bold">
            Importo della donazione:
          </label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="bg-[#f6bcba] text-[#1e1e1e] p-2 rounded-md cursor-pointer hover:bg-[#e59082] transition duration-300"
            disabled={isPending}
          >
            {isPending ? (
              <div className="spinner border-4 border-gray-200 border-t-4 border-[#526742] rounded-full w-5 h-5 animate-spin"></div>
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
