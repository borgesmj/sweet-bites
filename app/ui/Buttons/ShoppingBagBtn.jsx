"use client";
import { LuShoppingBag } from "react-icons/lu";
import { openShoppingCartList } from "@/lib/uiHandlers";
/**
 * * Componente del boton que abre y cierra la ventana de el carrito de compras
 * * Se maneja el numero contenido dentro del span desde la función cartButton en
 * @link uiHandlers
 * @returns UI del boton
 */
export default function ShoppingBagBtn({ pathName }) {
  const handleClick = () => {
    openShoppingCartList();
  };
  return (
    <button
      className={`relative h-[50px] w-[50px] flex flex-col justify-center items-center   cursor-pointer transition-fast hover:text-[--button-bg-primary] ${
        ["/nosotros", "/galeria", "/contacto", "/neworder"].includes(pathName)
          ? "opacity-0 cursor-auto"
          : ""
      }`}
      onClick={handleClick}
      disabled={["/nosotros", "/galeria", "/contacto"].includes(pathName)}
    >
      <LuShoppingBag size="30" />
      <span
        id="shopping-bag-number"
        className=" bg-red-500 absolute top-0 right-0 w-6 h-6 rounded-full text-white text-center font-bold text-md opacity-0"
      ></span>
    </button>
  );
}
