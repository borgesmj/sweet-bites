import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({children}) {
    const [addingToCart, setAddingToCart] = useState(false)

    const handleAddCart = () => {
        console.log("abrir desdel del context")
        setAddingToCart(true)
    }

    const resetValue = () => {
        setAddingToCart(false)
        console.log(`reiniciado el valor a ${addingToCart}`)
    }

    return (
        <CartContext.Provider value={{addingToCart, setAddingToCart, handleAddCart, resetValue}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}