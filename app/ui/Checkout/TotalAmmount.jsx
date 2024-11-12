import React from "react";

const TotalAmmount = ({ subTotal, discountPercent }) => {
  const discount = subTotal * discountPercent;
  const total = subTotal - discount;

  return (
    <div className="p-4 w-full md:w-1/2 lg:sticky lg:top-16 right-0 lg:w-1/3 rounded-md shadow-lg lg:h-[50dvh] flex flex-col justify-around items-center gap-4">
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
        <div className="flex justify-between mb-4">
          <span className="text-gray-700">Medio de pago</span>
          <span className="text-gray-900">
            <select name="" id="" className="bg-transparent text-gray-700">
              <option value="">Transferencia</option>
              <option value="">Efectivo</option>
            </select>
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between mt-4 pt-4 border-t border-gray-300 w-full">
        <span className="text-xl font-bold text-gray-800">Total a pagar:</span>
        <span className="text-xl font-bold text-gray-900">${total.toFixed(2)}</span>
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
