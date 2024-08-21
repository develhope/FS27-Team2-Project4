import { useState, useEffect } from "react";
import { ProductArray } from "./ProductArray";
import { Cart } from "./Cart";

export function ShoppingApp() {
  // Stato per il carrello
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Aggiorna il localStorage ogni volta che il carrello cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Funzione per aggiungere un prodotto al carrello
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Funzione per rimuovere un prodotto dal carrello
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="shopping-app">
      <ProductArray addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}