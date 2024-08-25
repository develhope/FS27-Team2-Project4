import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { ShopBanner } from "./ShopBanner";
import { useNavigate } from "react-router-dom";

export function SubmitOrderPage() {
  const { cart, removeFromCart,  clearCart} = useContext(CartContext);
  const navigate = useNavigate();

  const totale = cart.reduce((total, item) => {
    const totalePrezzo = parseFloat(
      item.prezzo.replace("€", "").replace(",", ".").trim()
    );
    return total + (isNaN(totalePrezzo) ? 0 : totalePrezzo);
  }, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Grazie per il tuo ordine!");
    clearCart();
    navigate("/thankYouPage");
   
    
  };

  return (
    <div>
      <ShopBanner />
      <div className="flex flex-col items-center justify-center sm:mx-4 ">
        <div className="flex flex-col justify-center items-center max-w-xl">
          <p className="text-2xl font-semibold mb-10">Il tuo carrello</p>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="border-b py-2 flex gap-5 justify-between text-lg items-center"
              >
                <img
                  src={item.immagine}
                  className="w-24 h-24 rounded-lg"
                  alt={item.nome}
                />
                <span>
                  {item.nome} - {item.prezzo}
                </span>
                <button
                  className="bg-pink text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(index)}
                >
                  Rimuovi
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-4">
            Totale: {totale.toFixed(2)} €
          </p>

          <form onSubmit={handlePayment}>
            <p>Metodo di pagamento</p>
            <ul className="flex flex-col">
              <li>
                <input
                  type="radio"
                  id="PayPal"
                  name="pagamento"
                  value="Paypal"
                />
                PayPal
              </li>
              <li>
                <div>
                  <input
                    type="radio"
                    id="CartaDiCredito"
                    name="pagamento"
                    value="CartaDiCredito"
                  />
                  Carta di credito
                </div>

                <input
                  className="flex border-2 border-soft-grey p-1 rounded-md"
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx "
                />
                <input
                  className="flex border-2 border-soft-grey my-2 p-1 rounded-md"
                  type="text"
                  placeholder="00/00"
                />
                <input
                  className="flex border-2 border-soft-grey p-1 rounded-md"
                  type="text"
                  placeholder="CVV XXX "
                />
              </li>
            </ul>
            {totale > 0 && (
              <button
                type="submit"
                className="bg-dark-blue text-white px-4 py-2 rounded mt-6 hover:bg-light-blue"
              >
                Paga ora
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
