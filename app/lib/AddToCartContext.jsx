import { createContext, useContext, useEffect, useState } from "react";
import { cartLength } from "./actions";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const lsGetItmes = () => {
    const LSCartList = localStorage.getItem("cartList");
    if (LSCartList) {
      setCartList(JSON.parse(LSCartList));
    }
  };

  useEffect(() => {
    lsGetItmes();
  }, []);

  useEffect(() => {
    if (cartList.length > 0) {
      localStorage.setItem("cartList", JSON.stringify(cartList));
    }
    cartLength(cartList.length)
  }, [cartList]);

  const addNewProduct = (newProduct) => {
    setCartList([...cartList, newProduct]);
  };

  return (
    <CartContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        selectedProduct,
        setSelectedProduct,
        addNewProduct,
        cartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
