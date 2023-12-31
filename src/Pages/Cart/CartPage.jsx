import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TrashCan from "../../Icons/TrashCan";
import CartItem from "../../Components/CartItem.jsx/CartItem";
import Whatsapp from "../../Icons/Whatsapp";
import Loader from "../../Components/Loader/Loader";
import Info from "../../Icons/Info";
import Truck from "../../Icons/Truck";
import Pay from "../../Icons/PAy";
import './CartPage.css'

const CArtPage = ({ shoppingCart, eliminarProducto, setShoppingCart }) => {
  const [delivery, setDelivery] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fecha, setFecha] = useState('');
  const [pagoEfectivo, setPagoEfectivo] = useState(true);
  const [click, setClick] = useState(false)

  useEffect(() => {
    const fecha = new Date()
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1
    let ano = fecha.getFullYear()
    dia = (dia < 10) ? '0' + dia : dia;
    mes = (mes < 10) ? '0' + mes : mes;

    let fechaFormateada = ano + '-' + mes + '-' + dia

    setFecha(fechaFormateada)
  }, [])

 

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
    if ([nombre, telefono, fecha].includes("")) {
      setError(true);
      setLoader(false);
      return;
    } else if (delivery && [direccion].includes("")) {
      setError(true);
      setLoader(false);
      return;
    } else {
      setTimeout(() => {
        let mensajeEnvio = `Hola, quisiera realizar un pedido.\n==============\n📝 Productos:`;
        shoppingCart.forEach((item) => {
          mensajeEnvio += `\n✔️ ${item.cantidad}  ${item.name}`;
        });
          mensajeEnvio += `\n==============`;
          mensajeEnvio += `\nPara entregarlo en dia: ${fecha}`;
          mensajeEnvio += `\n==============`;
          mensajeEnvio += `\nDetalles del cliente`;
          mensajeEnvio += `\n👤 Nombre: ${nombre}`;
          mensajeEnvio += `\n☎️ Teléfono: ${telefono}`;
          if (!delivery) {
            mensajeEnvio += `\n🙋 Yo pasaré a recoger la orden`;
            mensajeEnvio += `\n==============`;
          } else {
            mensajeEnvio += `\n🚚 Para entregar a domicilio`;
            mensajeEnvio += `\n📍 Direccion: ${direccion}`;
            mensajeEnvio += `\n==============`;
          }
          if (comentario) {
            mensajeEnvio += `\nComentario adicicional:`;
            mensajeEnvio += `\n${comentario}`;
          }
          mensajeEnvio += `\n💵 Sub-Total:${subTotal}`;
          if (pagoEfectivo) {
            mensajeEnvio += `\n💰 Pago: Efectivo`;
          } else {
            mensajeEnvio += `\n💰 Pago: Transferecia Bancaria`;
          }

          mensajeEnvio += `\n==============`;
          mensajeEnvio += `\n🔢 Numero de la orden ${orderId}`;
          mensajeEnvio += `\n==============`;

          setLoader(false);
          setError(false);
          setNombre("");
          setDireccion("");
          setTelefono("");
          setFecha("");
          setShoppingCart([]);
          setPagoEfectivo(true);
        let whatsappLink =
          "https://api.whatsapp.com/send?phone=573184255610&text=" +
          encodeURI(mensajeEnvio);
        window.open(whatsappLink, "_blank");
      }, 1500);
    }
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
    <div className="cart-container w-full h-fit flex items-center justify-center lg:w-full">
      <form
        className="flex flex-col items-center w-full md:w-4/5 lg:w-3/5"
        onSubmit={handleSubmit}
      >
        {/* tarjeta de lista de productos */}
        <div className="card-container w-full h-fit rounded-xl p-4 mb-4  shadow-cart-box">
          <p className="text-2xl w-full text-left">Detalles del Pedido:</p>
          <table className="w-full">
            <thead className="border-b-2 border-black ">
              <tr>
                <th></th>
                <th className="text-center md:text-[20px]">Producto</th>
                <th className="text-center md:text-[20px]">Cant.</th>
                <th className="text-center md:text-[20px]">Total</th>
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
            <tfoot className="border-t-2 border-black">
              <tr>
                <th></th>
                <th></th>
                <th className=" text-[0.8rem] md:text-2xl">Sub-Total</th>
                <th className="md:text-2xl">{subTotalFormateado} COP</th>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* tarjeta de opciones de entrega */}
        <div className="card-container flex flex-col w-full h-fit rounded-xl p-4 mb-4  shadow-cart-box">
          <p className="text-2xl w-full text-left flex flex-row items-center font-bold">
            <span className="mr-8">
              <Truck />
            </span>
            Detalles de la entrega:
          </p>
          <div className="flex flex-col items-start p-6  w-full">
            <div className="campo mb-2 text-md md:text-xl">
              <label htmlFor="fecha" className="text-md md:text-xl">
                Fecha de entrega:
                <span className="font-bold text-[#ff0000] font-serif">
                  *
                </span>{" "}
              </label>
              <input
                className={`w-3/5 ${
                  error && fecha === "" ? "bg-[#ff000050]" : "bg-blue-100"
                } text-md md:text-xl 2xl:text-2xl`}
                type="date"
                name="fecha"
                id="fecha"
                value={fecha}
                onChange={(e) => {
                  setFecha(e.target.value);
                  setError(false);
                }}
              />
            </div>
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
              <label htmlFor="pasaRecoger" className="text-md md:text-xl 2xl:text-2xl">
                Pasar a recoger
              </label>
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
              <label htmlFor="entregaDomicilio" className="text-md md:text-xl 2xl:text-2xl">
                Entrega a Domicilio
              </label>
            </div>
          </div>
        </div>
        {/* tarjeta de detalles del cliente */}
        <div className="card-container flex flex-col w-full h-fit rounded-xl p-4 mb-4  shadow-cart-box">
          <p className="text-2xl w-full text-left">Detalles del Cliente:</p>
          <div className="w-full flex justify-between mt-4">
            <label className="w-2/5 text-md md:text-xl 2xl:text-2xl" htmlFor="nombre">
              Nombre:
              <span className="font-bold text-[#ff0000] font-serif">
                *
              </span>{" "}
            </label>
            <input
              className={`w-3/5 ${
                error && nombre === "" ? "bg-[#ff000050]" : "bg-blue-100"
              } text-md md:text-xl 2xl:text-2xl`}
              type="text"
              name=""
              id="nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="w-full flex justify-between mt-4">
            <label className="w-2/5 text-md md:text-xl 2xl:text-2xl" htmlFor="telefono">
              Telefono de contacto:
              <span className="font-bold text-[#ff0000] font-serif">
                *
              </span>{" "}
            </label>
            <input
              className={`w-3/5 ${
                error && telefono === "" ? "bg-[#ff000050]" : "bg-blue-100"
              }`}
              type="text"
              name=""
              id="telefono"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
                setError(false);
              }}
            />
          </div>
          {delivery && (
            <>
              <div className="w-full flex justify-between mt-4">
                <label
                  className="w-2/5 text-md md:text-xl 2xl:text-2xl"
                  htmlFor="direccion"
                >
                  Direccion:
                  <span className="font-bold text-[#ff0000] font-serif">*</span>
                </label>
                <input
                  className={`w-3/5 ${
                    error && direccion === "" ? "bg-[#ff000050]" : "bg-blue-100"
                  } text-md md:text-xl 2xl:text-2xl`}
                  type="text"
                  name=""
                  id="direccion"
                  value={direccion}
                  onChange={(e) => {
                    setDireccion(e.target.value);
                    setError(false);
                  }}
                />
              </div>

              <span className="text-[10px] sm:text-[15px] flex flex-row items-center my-4 font-serif">
                <Info /> El servicio a domicilio podria tener un cargo
                adicional.
              </span>
            </>
          )}
        </div>
        {/* tarjeta de opciones de pago */}
        <div className="card-container flex flex-col w-full h-fit rounded-xl p-4 mb-4  shadow-cart-box">
          <p className="text-2xl w-full text-left flex flex-row items-center">
            Método de pago:
            <span className="ml-8">
              <Pay />
            </span>
          </p>
          <div className="flex flex-col items-start p-6  w-full">
            <div className="campo mb-2">
              <input
                defaultChecked
                onChange={() => {
                  setPagoEfectivo(true);
                }}
                type="radio"
                name="tipoPago"
                id="pagoEfectivo"
              />
              <label htmlFor="pagoEfectivo" className="text-md md:text-xl 2xl:text-2xl">
                Efectivo
              </label>
            </div>
            <div className="campo mb-2">
              <input
                onChange={() => {
                  setPagoEfectivo(false);
                }}
                type="radio"
                name="tipoPago"
                id="pagoTransferencia"
              />
              <label
                htmlFor="pagoTransferencia"
                className="text-md md:text-xl 2xl:text-2xl"
              >
                Transferencia bancaria Bancolombia
              </label>
            </div>
            <div className="w-full">
              {!pagoEfectivo && (
                <div className="w-full flex justify-center flex-col items-center">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/sweet-bites-922e3.appspot.com/o/QR%2Fphoto_5111867688153624041_x.jpg?alt=media&token=01955cd6-e02e-445e-b602-4ba1d3d26afa"
                    alt=""
                    className="m-auto h-56"
                  />
                  <p className="font-serif">Nombre: Arismer Briceño</p>
                  <p className="font-serif">Producto destino: Ahorros *9284</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* comentario */}
        <div className="w-full flex flex-col justify-between mt-4 rounded-xl shadow-cart-box  p-4">
          <label htmlFor="comentario">
            <p className="text-md md:text-xl 2xl:text-2xl w-full text-left">Comentario:</p>
          </label>
          <textarea
            name="comentario"
            id="comentario"
            cols="30"
            rows="4"
            className="w-full bg-blue-100 "
            value={comentario} // Valor inicial
            onChange={(e) => setComentario(e.target.value)} // Actualiza el estado
          ></textarea>
        </div>
        {error && (
          <p className="font-serif w-full bg-[#ff0000] text-center text-white uppercase font-bold p-4 my-4">
            Todos los campos deben ser llenados
          </p>
        )}
        <button
          type="submit"
          className={`${!loader ? 'btnSend' : ''} w-full flex justify-center items-center mt-4 text-center p-4 h-16 bg-[#25d366] rounded-[5rem] text-white font-serif shadow-cart-box text-[15px] md:w-1/2 lg:text-xl relative`}
        >
          {loader ? (
            <Loader />
          ) : (
            <div className="flex flex-row items-center space-x-1">
              <span className="">
                Finalizar pedido por WhatsApp
              </span>{" "}
              <span className="ml-[5px]">
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
