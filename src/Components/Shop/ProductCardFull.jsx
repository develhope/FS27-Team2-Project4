import { useState } from "react";

export function ProductCardFull({ product, addToCart }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
   
    setIsAnimating(true);


    addToCart(product);

  
    setTimeout(() => {
      setIsAnimating(false);
      alert("Articolo aggiunto al carrello!");
    }, 300); 
  };
  return (
    <div className="flex justify-center items-center p-4 sm:flex-col">
      <div className="border-y-neutral-900 border-solid rounded-3xl shadow-2xl p-8  w-full max-w-xl flex flex-col justify-center bg-white">
        <div className="flex justify-center">
          <img
            src={product.immagine}
            alt="foto prodotto"
            className="rounded-3xl w-96 h-96 object-cover"
          />
        </div>
        <div className="border-gray-400 my-2 w-96">
          <div className="flex justify-between mb-4 mt-6">
            <p className="font-semibold text-2xl">{product.nome}</p>
          </div>

          <p className="text-xs my-10">
            <span className="font-semibold text-sm">Descrizione: </span>
            {product.descrizione}
          </p>

          {/* Select per le taglie */}
          {product.taglia && product.taglia.length > 0 && (
            <>
              <label className="font-semibold text-sm mr-4" htmlFor="sizes">
                Taglia:
              </label>
              <select
                name="sizes"
                id="sizes"
                className=" p-1 border rounded mb-2"
              >
                {product.taglia.map((taglia, index) => (
                  <option key={index} value={taglia}>
                    {taglia}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Select per i colori */}
          {product.colore && product.colore.length > 0 && (
            <>
              <label className="font-semibold text-sm mx-4" htmlFor="colors">
                Colore:
              </label>
              <select name="colors" id="colors" className=" p-1 border rounded">
                {product.colore.map((colore, index) => (
                  <option key={index} value={colore}>
                    {colore}
                  </option>
                ))}
              </select>
            </>
          )}

          <div className="flex place-items-center justify-between">
            <p className="text-2xl my-2">{product.prezzo}</p>
            <button
              className={`p-2 bg-pink text-white font-semibold my-8 rounded cursor-pointer hover:bg-red-600 transform ${
                isAnimating ? "scale-110 transition-transform duration-300" : ""
              }`}
              onClick={handleAddToCart}
            >
              Aggiungi al carrello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
