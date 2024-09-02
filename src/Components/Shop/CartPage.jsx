import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { ShopBanner } from "./ShopBanner";
import { Link } from "react-router-dom";

export function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  //  totale del carrello
  const totale = cart.reduce((total, item) => {
    const totalePrezzo = parseFloat(
      item.prezzo.replace("€", "").replace(",", ".").trim()
    );
    return total + (isNaN(totalePrezzo) ? 0 : totalePrezzo);
  }, 0);

  return (
    <div>
      <ShopBanner />
      <div className="flex flex-col items-center justify-center sm: mx-4 ">
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

          {totale > 0 && (
            <button className="bg-dark-blue text-white px-4 py-2 rounded mt-6 hover:bg-light-blue">
              <Link to="/submitOrderPage">Procedi al Checkout</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
