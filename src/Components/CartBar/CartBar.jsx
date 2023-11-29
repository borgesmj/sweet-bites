import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './CartBar.css'
import ShoppingCart from "../../Icons/ShoppingCart";

const CartBar = ({ shoppingCart}) => {

  useEffect(() => {
    const carritoElement = document.querySelector(".carrito");
    if (carritoElement) {
      carritoElement.setAttribute("data-cart-count", shoppingCart.length);
    }
  }, [shoppingCart.length]);
  
  return (
    <div className={`fixed bottom-0 right-0 mb-4 mr-4 bg-driftwood-300 rounded-[50%] w-16 h-16 border-blue-300 border-solid border-[4px] flex justify-center items-center md:w-20 md:h-20 ${shoppingCart === 0 ? null : 'carrito'} lg:hover:border-blue-900`}>
      <NavLink to="/carrito" className="text-2xl lg:text-4xl w-full h-full flex justify-center items-center">
        <ShoppingCart/>
      </NavLink>
    </div>
  );
};

export default CartBar;

