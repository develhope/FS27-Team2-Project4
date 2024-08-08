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
 "client-id": "YOUR_PAYPAL_CLIENT_ID", // Sostituisci con il tuo client ID PayPal
currency: "EUR",
 },
 }); }, [paypalDispatch]);

const handleDonationSubmit = async (event) => {
 event.preventDefault();

 if (!donationAmount || donationAmount <= 0) {
setDonationError("L'importo della donazione deve essere maggiore di zero.");
 return;
}

setDonationError(null);

if (!donationMethod) {
setDonationError("Per favore, scegli un metodo di donazione.");
return;
}

if (donationMethod === "paypal") {

} else if (donationMethod === "iban") {
setShowIbanDetails(true); } else if (donationMethod === "5x1000") {
 setShow5x1000Details(true);
}
};

return (
   <div className="donate-page font-sans text-gray-800">
   <div className="flex flex-col md:flex-row">
   <div className="md:w-1/2"> 
<img 
src={bannerImage} 
 alt="Banner donazioni" 
   className="w-full h-[400px] object-cover" 
  />
  </div>
  
   <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0 p-8 bg-white rounded-lg shadow-md"> 
  <form onSubmit={handleDonationSubmit}> 
  <h1 className="text-2xl font-semibold text-center mb-4 text-[#526742]">Fai la differenza, invia il tuo aiuto</h1> 
  <h2 className="text-2xl font-semibold text-center mb-6 text-[#92aa7f]">
  Scegli l'importo
  </h2>
  <div className="grid grid-cols-2 gap-4 mb-4">
 
   <button className={`border rounded-lg py-2 text-center focus:outline-none ${donationAmount === '15' ? 'bg-[#92aa7f] text-white' : ''}`} onClick={() => setDonationAmount('15')}>€15</button>
  <button className={`border rounded-lg py-2 text-center focus:outline-none ${donationAmount === '25' ? 'bg-[#92aa7f] text-white' : ''}`} onClick={() => setDonationAmount('25')}>€25</button>
   <button className={`border rounded-lg py-2 text-center focus:outline-none ${donationAmount === '50' ? 'bg-[#92aa7f] text-white' : ''}`} onClick={() => setDonationAmount('50')}>€50</button>
   <input type="number" placeholder="€ Altro importo" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} className="border rounded-lg py-2 px-3 focus:outline-none" /> 
   </div>
  
   <h2 className="text-2xl font-semibold text-center mb-4 text-[#1e1e1e]">Metodo di pagamento</h2>
  <select value={donationMethod} onChange={(e) => setDonationMethod(e.target.value)} className="w-full border rounded-lg py-2 px-3 focus:outline-none mb-4">
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
  
   {donationError && <p className="text-red-500 font-bold mb-2">{donationError}</p>}
  
   <button 
  type="submit" 
  className="bg-[#526742] text-white p-2 rounded-md cursor-pointer hover:bg-[#3f5234] transition duration-300 w-full" /* Colore dark-green */
   disabled={isPending || !donationAmount} 
  >
   {isPending ? (
   <div className="spinner border-t-4 border-white rounded-full w-5 h-5 animate-spin mx-auto"></div>
  ) : (
  "Dona ora"
  )}
  </button>
   </form> {/* Fine del form */}
  </div>
  </div>
  
  <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
   <p className="text-center text-sm">
  Combattiamo ogni tipo di crudeltà contro tutti gli animali: ogni singola vita conta.
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
