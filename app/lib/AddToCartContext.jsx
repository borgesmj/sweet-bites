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
    cartLength(cartList.length);
  }, [cartList]);

  const generarID = () => {
        const numero = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36).substring(2)

        return numero + fecha
    }


  const addNewProduct = (newProduct) => {
    const existingProduct = cartList.findIndex((product) => 
      product.id === newProduct.id && product.size === newProduct.size
    );
    if(existingProduct === -1){
      newProduct.key = generarID()
      setCartList([...cartList, newProduct]);
    } else{
      cartList[existingProduct].quantity += newProduct.quantity
    }
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
