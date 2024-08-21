export function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => {
    const prezzoNumerico = parseFloat(
      item.prezzo.replace("€", "").replace(",", ".").trim()
    );
    return total + (isNaN(prezzoNumerico) ? 0 : prezzoNumerico);
  }, 0);

  return (
    <div className="mx-32 my-16  p-16 rounded-xl shadow-xl">
      <p className="text-xl font-bold mb-9">Il tuo carrello</p>
      <ul className="flex flex-col">
        {cartItems.map((item, index) => (
          <li key={index} className="flex  items-center">
            <span>
              {item.nome} - {item.prezzo}
            </span>
            <button
              className="ml-4 p-2 bg-red-500 bg-pink text-white text-sm font-semibold mb-2 rounded cursor-pointer hover:bg-red-600"
              onClick={() => removeFromCart(index)}
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
      <p className="my-9 text-lg font-semibold">
        Totale: {totalPrice.toFixed(2)} €
      </p>
      <button className=" p-2 bg-red-500 bg-pink text-white font-semibold mb-2 rounded cursor-pointer hover:bg-red-600 ">
        Checkout
      </button>
    </div>
  );
}

//TODO aggiungere taglia e colore anche nel prodotto visualizzato nel carrello
