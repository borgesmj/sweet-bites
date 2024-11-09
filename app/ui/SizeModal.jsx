"use client";
import { closeModal } from "@/lib/uiHandlers";
import { useCart } from "@/lib/AddToCartContext";
import { useEffect, useState } from "react";
import SizeOption from "./SizeOption";
import SVGComponent from "./Icons/CircleLoaders";
/**
 * * Componente de ventana donde el usuario: 
 * * Selecciona el tamaño del producto seleccionado
 * * Selecciona la cantidad de unidades del producto seleccionado
 * * Envia al nuevo producto al carrito de compras
 * @returns UI del componente
 */
const SizeModal = () => {
  const { selectedProduct, isModalOpen, setIsModalOpen, addNewProduct } =
    useCart();
  const [initialQuantity, setInitialQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [productName, setProductName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = async () => {
    await closeModal()
    await setIsModalOpen(false);
  };

  useEffect(() => {
    setInitialQuantity(1);
    setSelectedIndex(0);
    setProductName(selectedProduct?.title);
  }, [isModalOpen]);

  const handleIncrease = (e) => {
    e.preventDefault();
    setInitialQuantity(initialQuantity + 1);
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    setInitialQuantity(initialQuantity - 1);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const newProduct = {
        quantity: initialQuantity,
        name: productName,
        size: selectedProduct?.price[selectedIndex].size,
        detailPrice: selectedProduct?.price[selectedIndex].price,
        id: selectedProduct?.id,
        image: selectedProduct?.images.png
      };
      addNewProduct(newProduct);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setInitialQuantity(1);
        setSelectedIndex(0);
        handleCloseModal();
        setIsLoading(false);
      }, 800);
    }
  };

  return (
    <form
      onSubmit={handleAddToCart}
      id="size-modal"
      className="z-10 fixed hidden bg-[--bg-100] w-full bottom-0 left-0 flex-col items-center gap-2 p-4"
    >
      <div className="w-full flex justify-end py-2 px-4">
        <button
          type="button"
          className="text-xl font-semibold"
          onClick={handleCloseModal}
        >
          Cancelar
        </button>
      </div>
      <div className="flex flex-col w-full p-4 rounded-t-lg">
        <h2 className="text-center font-semibold text-2xl text-[--button-bg-secondary] whitespace-normal">
          {selectedProduct?.title}
        </h2>
        <h2 className="text-center font-medium text-lg text-gray-600">
          Elige el tamaño
        </h2>
        <div
          id="options-container"
          className="relative w-full px-4 flex flex-row gap-4 overflow-x-auto scroll-snap-x flex-nowrap xl:w-fit xl:mx-auto xl:max-w-2/3"
        >
          {selectedProduct?.price?.map((size, index) => (
            <SizeOption
              key={`size-${index}`}
              index={index}
              size={size.size}
              price={size.price}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
        </div>
        <p className="w-full text-center font-medium ">Elige la cantidad</p>
        <p className="w-1/2  flex flex-row justify-around mx-auto md:w-[150px] ">
          <button
            disabled={initialQuantity == 1}
            className={`text-xl ${
              initialQuantity == 1 ? "opacity-0" : null
            } w-1/3`}
            onClick={handleDecrease}
          >
            -
          </button>
          <input
            className="w-1/3 text-center bg-transparent outline-none text-xl text-black font-semibold"
            type="number"
            name=""
            id=""
            readOnly
            value={initialQuantity}
            onChange={() => setInitialQuantity(initialQuantity + 1)}
          />
          <button className="text-xl w-1/3" onClick={handleIncrease}>
            +
          </button>
        </p>
      </div>
      <button
        type="submit"
        className="shadow-2xl shadow-black w-full  bg-[--button-bg-primary] text-white font-bold text-2xl p-4 rounded-2xl md:w-[200px] transition-all active:shadow-none active:translate-y-3"
      >
        {isLoading ? <SVGComponent /> : "Confirmar"}
      </button>
    </form>
  );
};

export default SizeModal;
