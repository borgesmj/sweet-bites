"use client";

import Image from "next/image";
import { RiArrowRightWideFill } from "react-icons/ri";
import SVGComponent from "@/ui/Icons/CircleLoaders";
import { useState } from "react";
import { openModal } from "@/lib/actions";
export default function Template({
  productInfo,
  addingToCart,
  setAddingToCart,
}) {
  const [thisCardAddinToCart, setThisCardAddingToCart] = useState(false);
  const handleAddToCard = (id) => {
    setThisCardAddingToCart(true);
    setAddingToCart(true);
    openModal()
  };

  return (
    <div
      id={`product-cart-id-${productInfo.id}`}
      className="whitespace-nowrap w-[300px] p-4 bg-[--bg-200] flex flex-col gap-4 justify-center items-start"
    >
      <div className="image-container w-full h-[200px] bg-transparent">
        <Image
          src={productInfo.image}
          width="150"
          height="150"
          alt={productInfo.title}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-[600] max-w-full conta">
          {productInfo.title.length > 18
            ? `${productInfo.title.slice(0, 18)}...`
            : productInfo.title}
        </h2>
      </div>
      <a
        href={`tienda/producto/${productInfo.id}`}
        className="w-full flex flex-row gap-2 items-center justify-start text-[--text-100] font-[500] group"
      >
        <RiArrowRightWideFill className="hidden lg:block transition-all lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100" />
        <span className="transition-all lg:group-hover:translate-x-6">
          Ver mas
        </span>
        <RiArrowRightWideFill className="transition-all lg:opacity-100 lg:group-hover:translate-x-6 lg:group-hover:opacity-0" />
      </a>
      <p className="text-2xl font-[600] max-w-full">{`$${productInfo.price}`}</p>
      <button
        onClick={() => {
          handleAddToCard(productInfo.id);
        }}
        disabled={addingToCart}
        id={`addCartBtn-id-${productInfo.id}`}
        className={`h-14 relative w-full py-4 px-6 text-center rounded-md  font-bold transition-all ${
          addingToCart && thisCardAddinToCart
            ? "bg-[--button-bg-primary]  cursor-not-allowed"
            : addingToCart
            ? "bg-gray-400 text-gray-500 opacity-70 cursor-not-allowed"
            : "bg-[--button-bg-primary] text-white opacity-100 group cursor-pointer   group lg:before:content-['+'] before:absolute before:-bottom-1/2 before:left-0 before:w-full lg:before:opacity-0  lg:hover:before:-translate-y-11 lg:hover:before:opacity-100  before:transition-all"
        }`}
      >
        {addingToCart && thisCardAddinToCart ? (
          <span className="font-bold text-white opacity-100">
            Elige el tamaño
          </span>
        ) : addingToCart ? (
          <SVGComponent />
        ) : (
          <span className="w-full relative block transition-all lg:opacity-100 lg:group-hover:-translate-y-6 lg:group-hover:opacity-0">
            Añadir al carrito
          </span>
        )}
      </button>
    </div>
  );
}
