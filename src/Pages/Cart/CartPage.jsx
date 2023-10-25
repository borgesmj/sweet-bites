import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TrashCan from "../../Icons/TrashCan";
import CartItem from "../../Components/CartItem.jsx/CartItem";
import Whatsapp from "../../Icons/Whatsapp";

const CArtPage = ({ shoppingCart, eliminarProducto, setShoppingCart }) => {
  const [delivery, setDelivery] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(false);

  const subTotalArray = shoppingCart.map((item) => {
    return item.total;
  });

  const subTotal = subTotalArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let mensajeEnvio = `Hola, quisiera realizar un pedido.\nañadiré estos productos\n==============`;
    shoppingCart.forEach((item) => {
      mensajeEnvio += `\n**${item.cantidad}  ${item.name}`;
    });
    mensajeEnvio += `\n==============`;
    if (!delivery) {
      mensajeEnvio += `\nYo pasaré a recoger la orden`;
      mensajeEnvio += `\n==============`;
    } else {
      if ([nombre, telefono, direccion].includes("")) {
        setError(true);
        return;
      } else {
        mensajeEnvio += `\nPara entregar a domicilio\n`;
        mensajeEnvio += `\nA nombre de: ${nombre}`;
        mensajeEnvio += `\nDireccion: ${direccion}`;
        mensajeEnvio += `\nTeléfono: ${telefono}`;
        mensajeEnvio += `\n==============`;
      }
    }
    mensajeEnvio += `\nComentario adicicional:`;
    mensajeEnvio += `\n${comentario}`;
    mensajeEnvio += `\nSub-Total:${subTotal}`;

    let whatsappLink =
      "https://api.whatsapp.com/send?phone=573184255610&text=" +
      encodeURI(mensajeEnvio);
    window.open(whatsappLink, "_blank");

    setShoppingCart([]);
    setNombre("");
    setTelefono("");
    setComentario("");
    setDireccion("");
  };

  return shoppingCart.length === 0 ? (
    <div className="">
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
    <form className="flex flex-col items-center  w-full">
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
          <th></th>
          <th></th>
          <th>Sub-Total</th>
          <th>{subTotal}</th>
        </tbody>
      </table>
      <div className=" flex flex-col items-start">
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
      </div>
      {delivery && (
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-4xl">Datos de la persona que recibe:</p>
          {error && (
            <p className="text-white bg-[#ff0000] w-full text-center">
              Todos los campos deben ser completados
            </p>
          )}
          <div className="w-full flex justify-between mt-4">
            <label className="w-2/5" htmlFor="nombre">
              Nombre:
            </label>
            <input
              className="w-3/5 bg-blue-100"
              type="text"
              name=""
              id="nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
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
              value={direccion}
              onChange={(e) => {
                setDireccion(e.target.value);
              }}
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
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
          </div>
          <span className="text-[10px] sm:text-[15px]">
            El servicio a domicilio podria tener un cargo adicional.
          </span>
        </div>
      )}
      <div className="w-full flex flex-col justify-between mt-4">
        <label htmlFor="comentario">Comentario:</label>
        <textarea
          name="comentario"
          id="comentario"
          cols="30"
          rows="4"
          className="w-full bg-blue-100"
          value={comentario} // Valor inicial
          onChange={(e) => setComentario(e.target.value)} // Actualiza el estado
        ></textarea>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-4/5 flex justify-between mt-4 text-center p-4 bg-[#25d366] border-white border-[5px] rounded-[5rem] md:justify-center md:w-1/2 lg:w-1/4"
      >
        Finalizar pedido por WhatsApp <Whatsapp />
      </button>
    </form>
  );
};

export default CArtPage;
