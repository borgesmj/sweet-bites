import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({children}) {
    const [addingToCart, setAddingToCart] = useState(false)

    return (
        <CartContext.Provider value={{addingToCart, setAddingToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}