import React from "react";

const CouponForm = () => {
  return (
    <div
      id="coupon-field"
      className="flex flex-col gap-4 w-full items-center md:flex-row md:justify-around"
    >
      <input
        type="text"
        id="cuponInput"
        placeholder="¿Tienes un cupon?"
        className="bg-transparent outline-none focus:border-b border-gray-600 p-2 w-full md:w-1/2 placeholder:text-[--text-100] "
        tabIndex="!"
      />
      <button
        type="button"
        className="p-2 rounded-full w-32 bg-[--button-bg-secondary] text-[--bg-100]"
      >
        Aplicar
      </button>
    </div>
  );
};

export default CouponForm;
