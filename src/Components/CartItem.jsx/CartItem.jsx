import React from "react";
import TrashCan from "../../Icons/TrashCan";

const CartItem = ({ id, name, cantidad, total, eliminarProducto }) => {
  const handleEliminar = (e) => {
    e.preventDefault()
    eliminarProducto(id);
  };
  return (
    <tr className="h-12 border-b-[1px] border-b-solid brder-b-black">
      <td className="lg:hover:cursor-pointer">
        <button onClick={handleEliminar}>
          <TrashCan />
        </button>
      </td>
      <td className="text-center text-[12px] md:text-[20px]">{name}</td>
      <td className="text-center">{cantidad}</td>
      <td className="text-center">{`${total.toLocaleString()} COP`}</td>
    </tr>
  );
};

export default CartItem;
