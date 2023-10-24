import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TrashCan from "../../Icons/TrashCan";
import CartItem from "../../Components/CartItem.jsx/CartItem";

const CArtPage = ({ shoppingCart, eliminarProducto }) => {
  const [delivery, setDelivery] = useState(false);

  return shoppingCart.length === 0 ? (
    <div>
      <h1 className="text-2xl">Aun no hay productos agregados</h1>
      <p className="text-2xl">
        puedes ir a la{" "}
        <NavLink to="/" className="underline font-bold text-blue-800">
          Tienda
        </NavLink>{" "}
        para agregar productos
      </p>
    </div>
  ) : (
    <form className="w-1/2 flex flex-col items-center">
      <p className="text-4xl">MI PEDIDO:</p>
      <table className="w-full">
        <thead>
          <tr>
            <th></th>
            <th className="border-b-2 border-black text-center">
              Nombre del producto
            </th>
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
        </tbody>
      </table>
      <div className="">
        <input
          defaultChecked
          onChange={() => {
            setDelivery(false);
          }}
          type="radio"
          name="tipoEntrega"
          id="pasaRecoger"
        />
        <label htmlFor="pasaRecoger">Pasar a recoger</label>
      </div>
      <div className="">
        <input
          onChange={() => {
            setDelivery(true);
          }}
          type="radio"
          name="tipoEntrega"
          id="entregaDomicilio"
        />
        <label htmlFor="entregaDomicilio">Entrega a Domicilio</label>
      </div>
      {delivery && (
        <div className="flex flex-col justify-center items-center">
          <p className="txt-2xl">Datos de la persona que recibe:</p>
          <div className="w-full flex justify-between mt-4">
            <label className="w-2/5" htmlFor="nombre">
              Nombre:
            </label>
            <input
              className="w-3/5 bg-blue-100"
              type="text"
              name=""
              id="nombre"
            />
          </div>
          <div className="w-full flex justify-between mt-4">
            <label className="w-2/5" htmlFor="direccion">
              Direccion:
            </label>
            <input
              className="w-3/5 bg-blue-100"
              type="text"
              name=""
              id="direccion"
            />
          </div>
          <div className="w-full flex justify-between mt-4">
            <label className="w-2/5" htmlFor="telefono">
              Telefono de contacto:
            </label>
            <input
              className="w-3/5 bg-blue-100"
              type="text"
              name=""
              id="telefono"
            />
          </div>
          <span className="text-[10px] sm:text-[20px]">
            El servicio a domicilio tiene un cargo adicional.
          </span>
        </div>
      )}
    </form>
  );
};

export default CArtPage;
