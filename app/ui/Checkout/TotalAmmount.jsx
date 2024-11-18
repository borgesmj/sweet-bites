import React from "react";

const TotalAmmount = ({ subTotal, discountPercent, setPaymentMethod }) => {
  const discount = subTotal * discountPercent;
  const total = subTotal - discount;

  return (
    <div className="p-4 w-full md:w-fit lg:sticky lg:top-16 right-0 lg:w-1/3 rounded-md shadow-lg lg:h-fit flex flex-col justify-around items-center gap-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 w-full text-center lg:text-2xl">
        Resumen del Pedido
      </h2>
      <div className="w-full flex flex-col justify-around">
        {/* Subtotal */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Subtotal</span>
          <span className="text-gray-900">${subTotal.toFixed(2)}</span>
        </div>

        {/* Descuento */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Descuento</span>
          <span className="text-gray-900">-${discount.toFixed(2)}</span>
        </div>

        {/* Método de pago */}
        <div className="flex flex-col justify-between mb-4">
          <span className="text-gray-700 text-center">Medio de pago</span>
          <p className="text-gray-900 flex justify-between">
            <span className="w-1/2 flex justify-between flex-col items-center">
              <input type="radio" name="payment-method" id="transferencia" defaultChecked onChange={()=>{setPaymentMethod("transferencia")}}/>
              <label htmlFor="transferencia">Transferencia</label>
            </span>
            <span className="w-1/2 flex justify-between flex-col items-center">
              <input type="radio" name="payment-method" id="efectivo" onChange={()=>{setPaymentMethod("efectivo")}} />
              <label htmlFor="efectivo">Efectivo</label>
            </span>
          </p>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between mt-4 pt-4 border-t border-gray-300 w-full">
        <span className="text-xl font-bold text-gray-800">Total a pagar:</span>
        <span className="text-xl font-bold text-gray-900">
          ${total.toFixed(2)}
        </span>
      </div>

      {/**Boton enviar peido */}
      <div className="w-full flex justify-center items-center">
        <button
          type="submit"
          className="mx-auto my-6 w-3/4 text-white px-6  py-4 bg-red-900 rounded-xl"
        >
          Enviar pedido
        </button>
      </div>
    </div>
  );
};

export default TotalAmmount;
