export function ProductCardFull({ product }) {
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
  
            <p className="text-xs my-2">
              <span className="font-semibold text-sm">Descrizione: </span>
              {product.descrizione}
            </p>
  
            {/* Select per le taglie */}
            <form className="flex flex-col">
              {product.taglia && product.taglia.length > 0 && (
                <>
                  <label className="font-semibold text-sm" htmlFor="sizes">
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
                  <label className="font-semibold text-sm" htmlFor="colors">
                    Colore:
                  </label>
                  <select
                    name="colors"
                    id="colors"
                    className=" p-1 border rounded"
                  >
                    {product.colore.map((colore, index) => (
                      <option key={index} value={colore}>
                        {colore}
                      </option>
                    ))}
                  </select>
                </>
              )}
  
              <input
                type="submit"
                value="Aggiungi al carrello"
                className="ml-4 p-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
              />
            </form>
  
            <p className="text-2xl my-2">{product.prezzo}</p>
          </div>
        </div>
      </div>
    );
  }
  