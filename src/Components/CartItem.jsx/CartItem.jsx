import React from "react";
import TrashCan from "../../Icons/TrashCan";

const CartItem = ({ id, name, cantidad, total, eliminarProducto }) => {
  const handleEliminar = (e) => {
    e.preventDefault()
    eliminarProducto(id);
  };
  return (
    <tr className="h-12">
      <td className="lg:hover:cursor-pointer">
        <button onClick={handleEliminar}>
          <TrashCan />
        </button>
      </td>
      <td className="text-center">{name}</td>
      <td className="border-l-2 border-black text-center">{cantidad}</td>
      <td className="border-l-2 border-black text-center">{`${total.toLocaleString()} COP`}</td>
    </tr>
  );
};

export default CartItem;
