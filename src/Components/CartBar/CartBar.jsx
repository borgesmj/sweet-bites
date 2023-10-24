import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PAy from "../../Icons/PAy";
import CartItem from "../CartItem.jsx/CartItem";

const CartBar = ({ shoppingCart, eliminarProducto }) => {
  const [sideList, setSideList] = useState(false);

  const subTotalArray = shoppingCart.map((item) => {
    return item.total;
  });

  const subTotal = subTotalArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (
    <div className="fixed z-[0] bottom-0 right-0 md:right-0 w-full md:w-2/5 bg-driftwood-300 px-4 flex flex-col">
      {sideList && (
        <div className="py-8 my-4 w-full flex flex-col justify-between">
          <h1 className="text-2xl">Items:</h1>
          <div className="w-full max-h-[20rem] overflow-auto">
            <table className="bg-white w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="border-b-2 text-center">Producto</th>
                  <th className="border-b-2 border-l-2 border-black text-center">
                    Cantidad
                  </th>
                  <th className="border-b-2 border-l-2 border-black text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {shoppingCart.map((item) => (
                  <CartItem
                    id={item.id}
                    key={`producto_${item.id}`}
                    name={item.name}
                    cantidad={item.cantidad}
                    total={item.total}
                    eliminarProducto={eliminarProducto}
                  />
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-2xl">
                    <b>Sub Total:</b>
                  </td>
                  <td className="text-2xl">{`${subTotal.toLocaleString()} COP`}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <NavLink
            to="/carrito/"
            className="text-2xl flex flex-row w-full items-center lg:hover:cursor-pointer"
          >
            Realizar el pago
            <PAy />
          </NavLink>
        </div>
      )}
      <div className="w-full h-12 flex flex-row justify-between items-center">
        <p>{`${shoppingCart.length} producto${
          shoppingCart.length > 1 ? "s" : ""
        } añadido${shoppingCart.length > 1 ? "s" : ""}`}</p>
        <button
          className="bg-blue-400 p-2 rounded-lg font-bold w-32"
          type="button"
          onClick={() => {
            setSideList(!sideList);
          }}
        >
          {sideList ? "Seguir añadiendo" : `Ver Items`}
        </button>
      </div>
    </div>
  );
};

export default CartBar;
