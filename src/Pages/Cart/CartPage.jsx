import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const CArtPage = ({ shoppingCart, eliminarProducto }) => {
  const [delivery, setDelivery] = useState(true);
  return (
    <form className="">
      <p className="text-4xl">MI PEDIDO:</p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nombre del producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map((item) => (
            <tr key={item._id}>
              <td>
                <button>X</button>
              </td>
              <td>{item.name}</td>
              <td>{item.cantidad}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">
        <input
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
          <span className="text-[10px]">
            El servicio a domicilio tiene un cargo adicional.
          </span>
        </div>
      )}
    </form>
  );
};

export default CArtPage;
