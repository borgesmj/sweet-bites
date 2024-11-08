import React from "react";
import Image from "next/image";
import { IoTrash } from "react-icons/io5";
const ShoppingCartItem = () => {
  return (
    <div className="relative grid grid-cols-4 w-[120%] lg:w-full px-2 border-b border-gray-200 my-3 py-2">
      <IoTrash className="absolute top-0 right-4 text-red-600 cursor-pointer" />
      <Image
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="text alt"
        width="60"
        height="60"
        className="col-span-1"
      />
      <div className="col-span-1 flex flex-col">
        <h3 className="font-bold">Titulo producto</h3>
        <p className="text-sm text-gray-500">Tamaño del producto</p>
      </div>
      <div className="flex justify-around items-center col-span-1 gap-1">
        <button type="button" className="border p-2 rounded">
          -
        </button>
        <input
          type="number"
          value="2"
          className="w-8 h-8 text-center bg-transparent outline-none"
          readOnly
        />
        <button type="button" className="border p-2 rounded">
          +
        </button>
      </div>
      <p className="col-span-1 font-semibold flex justify-center items-center">
        $27.000
      </p>
    </div>
  );
};

export default ShoppingCartItem;
