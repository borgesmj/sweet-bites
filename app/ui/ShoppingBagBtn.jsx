"use client";
import { LuShoppingBag } from "react-icons/lu";
import { openShoppingCartList } from "@/lib/uiHandlers";
export default function ShoppingBagBtn() {
  const handleClick = () => {
    openShoppingCartList()
  }
  return (
    <div
      className={`relative h-[50px] w-[50px] flex flex-col justify-center items-center   cursor-pointer transition-fast hover:text-[--button-bg-primary]`}
      onClick={handleClick}
    >
      <LuShoppingBag size="30" />
      <span
          id="shopping-bag-number"
          className=" bg-red-500 absolute top-0 right-0 w-6 h-6 rounded-full text-white text-center font-bold text-md opacity-0"
        ></span>
    </div>
  );
}
