import React from 'react';

const TotalAmmount = ({ subTotal, discount = 0, deliveryFee = 0, paymentMethod = 'Efectivo' }) => {
  const total = subTotal - discount + deliveryFee;

  return (
    <div className='p-4 w-full md:w-1/2 lg:sticky lg:top-16 right-0 bg-green-100 lg:w-1/3 rounded-md shadow-lg'>
      <h2 className='text-lg font-semibold text-gray-800 mb-4'>Resumen del Pedido</h2>
      
      {/* Subtotal */}
      <div className='flex justify-between mb-2'>
        <span className='text-gray-700'>Subtotal</span>
        <span className='text-gray-900'>${subTotal.toFixed(2)}</span>
      </div>
      
      {/* Descuento */}
      <div className='flex justify-between mb-2'>
        <span className='text-gray-700'>Descuento</span>
        <span className='text-gray-900'>-${discount.toFixed(2)}</span>
      </div>
      
      {/* Valor de domicilio */}
      <div className='flex justify-between mb-2'>
        <span className='text-gray-700'>Valor de domicilio</span>
        <span className='text-gray-900'>${deliveryFee.toFixed(2)}</span>
      </div>
      
      {/* Método de pago */}
      <div className='flex justify-between mb-4'>
        <span className='text-gray-700'>Medio de pago</span>
        <span className='text-gray-900'>{paymentMethod}</span>
      </div>
      
      {/* Total */}
      <div className='flex justify-between mt-4 pt-4 border-t border-gray-300'>
        <span className='text-xl font-bold text-gray-800'>Total</span>
        <span className='text-xl font-bold text-gray-900'>${total.toFixed(2)}</span>
      </div>
      <button type="submit">Enviar pedido</button>
    </div>
  );
};

export default TotalAmmount;
