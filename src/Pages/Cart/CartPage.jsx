import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TrashCan from "../../Icons/TrashCan";
import CartItem from "../../Components/CartItem.jsx/CartItem";
import Whatsapp from "../../Icons/Whatsapp";
import Loader from "../../Components/Loader/Loader";
import Info from "../../Icons/Info";
import Truck from "../../Icons/Truck";

const CArtPage = ({ shoppingCart, eliminarProducto, setShoppingCart }) => {
  const [delivery, setDelivery] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const subTotalArray = shoppingCart.map((item) => {
    return item.total;
  });

  const subTotal = subTotalArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const subTotalFormateado = subTotal.toLocaleString();

  const getId = () => {
    const date = Date.now().toString().substring(4, 8);
    const number = Math.random().toString().substring(4, 8);
    return date + number;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    let orderId = getId();
    setTimeout(() => {
      let mensajeEnvio = `Hola, quisiera realizar un pedido.\n==============\n📝 Productos:`;
      shoppingCart.forEach((item) => {
        mensajeEnvio += `\n✔️ ${item.cantidad}  ${item.name}`;
      });
      mensajeEnvio += `\n==============`;
      if (!delivery) {
        mensajeEnvio += `\n🙋 Yo pasaré a recoger la orden`;
        mensajeEnvio += `\n==============`;
      } else {
        if ([nombre, telefono, direccion].includes("")) {
          setError(true);
          setLoader(false);
          return;
        } else {
          mensajeEnvio += `\n🚚 Para entregar a domicilio\n`;
          mensajeEnvio += `\n👤 A nombre de: ${nombre}`;
          mensajeEnvio += `\n📍 Direccion: ${direccion}`;
          mensajeEnvio += `\n☎️ Teléfono: ${telefono}`;
          mensajeEnvio += `\n==============`;
        }
      }
      if (comentario) {
        mensajeEnvio += `\nComentario adicicional:`;
        mensajeEnvio += `\n${comentario}`;
      }
      mensajeEnvio += `\n💵 Sub-Total:${subTotal}`;

      mensajeEnvio += `\n==============`;
      mensajeEnvio += `\n🔢 Numero de la orden ${orderId}`;
      mensajeEnvio += `\n==============`;

      let whatsappLink =
        "https://api.whatsapp.com/send?phone=573184255610&text=" +
        encodeURI(mensajeEnvio);
      window.open(whatsappLink, "_blank");



      setShoppingCart([]);
      setNombre("");
      setTelefono("");
      setComentario("");
      setDireccion("");
      setLoader(false);
    }, 1500);
  };

  return shoppingCart.length === 0 ? (
    <div className="shoppin_cart h-[32rem] w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl">Aun no hay productos agregados</h1>
      <p className="text-2xl">
        Puedes ir a la{" "}
        <NavLink to="/" className="underline font-bold text-[#ff0000]">
          Tienda
        </NavLink>{" "}
        para agregar productos
      </p>
    </div>
  ) : (
    <div className="cart-container w-4/5 ml-8 h-fit flex items-center justify-center lg:w-full">
      <form className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
        <p className="text-2xl w-full text-left">Detalles del Pedido:</p>
        <table className="w-full shadow-cart-box rounded-xl p-4 mb-4">
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
            <tr>
              <th></th>
              <th></th>
              <th className=" text-[0.8rem] md:text-2xl">Sub-Total</th>
              <th className="md:text-2xl">{subTotalFormateado} COP</th>
            </tr>
          </tbody>
        </table>
        <p className="text-2xl w-full text-left flex flex-row items-center">
          Opciones de entrega:
          <span className="ml-8">
            <Truck />
          </span>
        </p>
        <div className="flex flex-col items-start p-6 rounded-xl shadow-cart-box w-full">
          <div className="campo mb-2">
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
          <div className="campo mb-2">
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
          <div className="flex flex-col justify-center items-center w-full mt-6">
            <p className="text-2xl w-full text-left">
              Detalles de la persona que recibe:
            </p>
            {error && (
              <p className="text-white bg-[#ff0000] w-full text-center">
                Todos los campos deben ser completados
              </p>
            )}
            {/* formulario de entrega */}
            <div className="rounded-xl shadow-cart-box w-full p-4">
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
            </div>
            <span className="text-[15px] sm:text-[20px] flex flex-row items-center my-4">
              <Info /> El servicio a domicilio podria tener un cargo adicional.
            </span>
          </div>
        )}
        <div className="w-full flex flex-col justify-between mt-4 rounded-xl shadow-cart-box  p-4">
          <label htmlFor="comentario">
            <p className="text-2xl w-full text-left">Comentario:</p>
          </label>
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
          className="w-4/5 flex justify-center items-center mt-4 text-center p-4 h-16 bg-[#25d366] border-white border-[5px] rounded-[5rem] md:justify-center md:w-1/2 lg:w-full lg:h-20 relative"
        >
          {loader ? (
            <Loader />
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-[10px] lg:text-2xl">
                Finalizar pedido por WhatsApp
              </span>{" "}
              <span>
                <Whatsapp />
              </span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default CArtPage;
