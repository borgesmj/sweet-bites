"use client";
// *Componentes
import Image from "next/image";
import SVGComponent from "@/ui/Icons/CircleLoaders";
// * Iconos
import { RiArrowRightWideFill } from "react-icons/ri";
// * Hooks
import { useEffect, useState } from "react";
import { useCart } from "@/lib/AddToCartContext";
// * handlers
import { openModal } from "@/lib/uiHandlers";
import { encodeUrl } from "@/lib/encodeUrl";
// * Data Fetch
import DataService from "@/lib/FirebaseService";
/**
 * * Componente de la tarjeta de producto
 * * Se renderiza en la pagina de inicio (/) y en la pagina de la tienda (/tienda)
 * @param productInfo
 * * traido desde un array.map en ambas páginas
 * @returns
 * * UI de la tarjeta y llama a la funcion que abre la ventana para que el usuario elija el tamaño del productto
 */
export default function Template({ productInfo }) {
  const { setSelectedProduct, isModalOpen, setIsModalOpen } = useCart();
  const [thisCardAddinToCart, setThisCardAddingToCart] = useState(false);

  const showProductInfo = async (id) => {
    const product = await DataService.fetchProductById(id);
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setThisCardAddingToCart(false);
    }
  }, [isModalOpen]);

  const handleOpenModal = async (id) => {
    await setIsModalOpen(true);
    await setThisCardAddingToCart(true);
    await showProductInfo(id);
    await openModal();
  };
  console.log(productInfo);

  return (
    <div
      id={`product-cart-id-${productInfo.id}`}
      className="whitespace-nowrap w-[300px] p-4 bg-[--bg-100] flex flex-col gap-4 justify-center items-start"
    >
      <div className="image-container w-full h-[200px] bg-transparent">
        <Image
          src={productInfo.images.png}
          width="150"
          height="150"
          alt={productInfo.images.alt}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-[600] max-w-full truncate">
          {productInfo.title}
        </h2>
      </div>
      <a
        href={`tienda/producto/${encodeUrl(productInfo.title)}`}
        className="w-full flex flex-row gap-2 items-center justify-start text-[--text-100] font-[500] group"
      >
        <RiArrowRightWideFill className="hidden lg:block transition-all lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100" />
        <span className="transition-all lg:group-hover:translate-x-6">
          Ver mas
        </span>
        <RiArrowRightWideFill className="transition-all lg:opacity-100 lg:group-hover:translate-x-6 lg:group-hover:opacity-0" />
      </a>
      <button
        onClick={() => {
          handleOpenModal(productInfo.id);
        }}
        disabled={isModalOpen || !productInfo.isAvailable}
        id={`addCartBtn-id-${productInfo.id}`}
        className={`h-14 relative w-full py-4 px-6 text-center rounded-md  font-bold transition-all disabled:bg-gray-400 disabled:text-gray-800 disabled:opacity-70 disabled:cursor-not-allowed ${
          isModalOpen && thisCardAddinToCart
            ? "bg-[--button-bg-primary]  cursor-not-allowed"
            : isModalOpen
            ? "bg-gray-400 text-gray-500 opacity-70 cursor-not-allowed"
            : "bg-[--button-bg-primary] text-white opacity-100 group cursor-pointer   group enabled:lg:before:content-['+'] before:absolute before:-bottom-1/2 before:left-0 before:w-full lg:before:opacity-0  lg:hover:before:-translate-y-11 lg:hover:before:opacity-100  before:transition-all"
        }`}
      >
        {isModalOpen && !thisCardAddinToCart ? (
          <SVGComponent />
        ) : isModalOpen ? (
          <span className="font-bold text-white opacity-100">
            Elige el tamaño
          </span>
        ) : !productInfo.isAvailable ? (
          <span className="block max-w-3/4">No disponible</span>
        ) : (
          <span className="w-full relative block transition-all lg:opacity-100 lg:group-hover:-translate-y-6 lg:group-hover:opacity-0">
            Ver Precios
          </span>
        )}
      </button>
    </div>
  );
}
