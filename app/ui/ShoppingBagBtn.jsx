'use client'
import { LuShoppingBag } from "react-icons/lu";
export default function ShoppingBagBtn() {
    return (
        <div className="relative h-[50px] w-[50px] flex flex-col justify-center items-center  before:bg-red-500 before:absolute before:top-0 before:right-0 before:w-6 before:h-6 before:content-['4'] before:rounded-full before:text-white before:text-center before:font-bold before:text-md cursor-pointer transition-fast hover:text-[--button-bg-primary]">
            <LuShoppingBag size="30" />
        </div>
    );
}