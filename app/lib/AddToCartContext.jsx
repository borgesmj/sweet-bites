import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [addingToCart, setAddingToCart] = useState(false);

  return (
    <CartContext.Provider
      value={{
        addingToCart,
        setAddingToCart,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
