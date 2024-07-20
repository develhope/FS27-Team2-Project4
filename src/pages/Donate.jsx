import React, { useState, useEffect } from "react";
import {
  PayPalScriptProvider,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import './Donate.css'
import './Navbar.css'

function Donate() {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [donationAmount, setDonationAmount] = useState("10");
  const [donationError, setDonationError] = useState(null);

  useEffect(() => {
    paypalDispatch({
      type: "resetOptions",
      value: {
        "client-id": "YOUR_CLIENT_ID",
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
      setDonationError(
        "L'importo della donazione deve essere maggiore di zero."
      );
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
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/adozioni">Adozioni</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/donate">Donazioni</Link>
          </li>
          <li>
            Contatti
            <ul>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="donation-content">
        <h1>Sostieni la nostra causa</h1>

        <p>
          Ogni giorno, centinaia di animali vengono abbandonati, lasciati soli e
          senza speranza. Il nostro rifugio è un faro di luce per queste
          creature indifese, offrendo loro cibo, cure mediche e, soprattutto,
          amore. Ma non possiamo farlo da soli.
        </p>

        <p>
          La tua donazione, grande o piccola che sia, fa una differenza enorme.
          Ci permette di continuare a salvare vite, a dare una seconda
          possibilità a chi ne ha più bisogno. Ogni euro conta, ogni gesto di
          generosità è un passo verso un futuro migliore per i nostri amici a
          quattro zampe.
        </p>

        {donationError && <p className="error-message">{donationError}</p>}

        <form onSubmit={handleDonationSubmit}>
          <label htmlFor="donationAmount">Importo della donazione:</label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />

          <button
            type="submit" // Invia il form quando viene cliccato
            className="donate-button"
            disabled={isPending}
          >
            {isPending ? <div className="spinner" /> : "Dona ora"}
          </button>
        </form>
      </div>
    </div>
  );
}

function DonateWrapper() {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID", currency: "EUR" }}> {/*qui si dovrebbe mettere la mail di paypal*/}
      <Donate />
    </PayPalScriptProvider>
  );
}

export default DonateWrapper;
