import { IoClose } from "react-icons/io5";
import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCartList = () => {
  return (
    <div className="w-full fixed h-full top-0 bottom-0 right-0 bg-[--bg-100] z-20 p-2 flex flex-col gap-4 md:w-[50dvw] lg:w-[35dvw] shadow-2xl">
      {/** CLose Button */}
      <div className="flex justify-end items-center mt-4 mr-4">
          <IoClose
            size="42"
            className="cursor-pointer hover:text-red-600 transition-all "
          />
      </div>
      {/**Titulo y eliminar todo */}
      <h2 className="w-full text-center text-xl font-semibold underline underline-offset-4">
        Lista de productos
      </h2>
      <p className="text-right text-[red] cursor-pointer transition-all hover:font-semibold">
        Eliminar todo
      </p>
      {/** Header */}
      <div className="grid grid-cols-4  mb-0 font-semibold w-[120%] lg:w-full  bg-gray-200 py-2">
        <p className="col-span-2 text-center">Producto</p>
        <p className=" text-center">Cantidad</p>
        <p className=" text-center">Sub-total</p>
      </div>
      {/** Lista de productos */}
      <div className="flex-grow overflow-y-auto bg-white px-4 py-2 max-h-72">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>
      {/** Subtotal */}
      <div className="grid grid-cols-4 text-xl w-full items-center py-2 px-4">
        <div className="col-span-3 text-right px-4">Subtotal: </div>
        <div className="col-span-1 font-semibold">$354.000</div>
      </div>
      <button
        type="button"
        className=" mx-auto p-4 w-1/2 rounded font-semibold bg-[--button-bg-primary] hover:bg-[--button-bg-primary-hover] text-[--bg-100]"
      >
        Ir a caja
      </button>
      <button
        type="button"
        className=" mx-auto p-4 w-1/2 font-semibold text-red-800"
      >
        Regresar
      </button>
    </div>
  );
};

export default ShoppingCartList;
