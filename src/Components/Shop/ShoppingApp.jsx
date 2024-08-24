import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { ProductArray } from "./ProductArray";

export function ShoppingApp() {
  const context = useContext(CartContext);
  
  console.log("Cart Context:", context);

  if (!context) {
    console.error("CartContext is not provided");
    return null;
  }

  const { addToCart } = context;

  if (!addToCart) {
    console.error("addToCart is not defined in CartContext");
    return null;
  }

  return (
    <div className="shopping-app">
      <ProductArray addToCart={addToCart} />
    </div>
  );
}