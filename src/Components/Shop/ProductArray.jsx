import { useState } from "react";
import { ProductCard } from "./ProductCard";
import CALENDARIO from "../../assets/images/CALENDARIO.jpg";
import FELPA from "../../assets/images/FELPA.jpg";
import HAT from "../../assets/images/hat.jpg";
import TAZZA from "../../assets/images/ORSEQL12.jpg";
import TSHIRT from "../../assets/images/TSHIRT.jpg";
import SHOPPER from "../../assets/images/shopper.jpg";
import { ProductCardFull } from "./ProductCardFull";

export function ProductArray({ addToCart }) {
  const [color] = useState(["NERO", "BIANCO", "AZZURRO", "ROSA", "VERDE"]);
  const [size] = useState(["XS", "S", "M", "L", "XL", "XXL"]);
  const [products] = useState([
    {
      nome: "Paw T-shirt",
      descrizione: "La nostra comoda t-shirt in cotone con logo serigrafato.",
      prezzo: "20,00 €",
      immagine: TSHIRT,
      taglia: size,
      colore: color,
    },
    {
      nome: "Paw Shopper Bag",
      descrizione: "Porta con te i tuoi accessori con la nostra shopper!",
      prezzo: "12,00 €",
      immagine: SHOPPER,
      taglia: "",
      colore: color,
    },
    {
      nome: "Paw fisherman hat",
      descrizione: "Proteggiti dal sole con il nostro morbido cappello.",
      prezzo: "15,00 €",
      immagine: HAT,
      taglia: "",
      colore: color,
    },
    {
      nome: "Paw felpa",
      descrizione: "Felpa in cotone con logo.",
      prezzo: "35,00 €",
      immagine: FELPA,
      taglia: size,
      colore: color,
    },
    {
      nome: "Paw calendario",
      descrizione: "Organizzati al meglio con il nostro calendario.",
      prezzo: "8,00 €",
      immagine: CALENDARIO,
      taglia: "",
      colore: "",
    },
    {
      nome: "Tazza HOP",
      descrizione: "La nostra tazza personalizzata per ogni evenienza.",
      prezzo: "10,00 €",
      immagine: TAZZA,
      taglia: "",
      colore: "",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductCardVisible, setIsProductCardVisible] = useState(false);

  const handleProductCardClick = (product) => {
    setSelectedProduct(product);
    setIsProductCardVisible(true); // Mostra la card
  };

  const handleOverlayClick = () => {
    setIsProductCardVisible(false);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 300);
  };

  return (
    <>
      <div className="flex justify-center mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard
              products={products}
              key={index}
              product={product}
              onClick={() => handleProductCardClick(product)}
            />
          ))}
        </div>
        {selectedProduct && (
          <div
            className="fixed inset-0 z-40 bg-dark-grey bg-opacity-50 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div
              className={`transform transition-transform duration-300 ${
                isProductCardVisible ? "scale-100" : "scale-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <ProductCardFull
                product={selectedProduct}
                addToCart={addToCart}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
