"use client";
import { closeModal } from "@/lib/actions";
import { useCart } from "@/lib/AddToCartContext";
import { useEffect, useState } from "react";
import SizeOption from "./SizeOption";

const SizeModal = () => {
  const { setAddingToCart, addingToCart } = useCart();
  const [initialQuantity, setInitialQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleCloseModal = () => {
    setAddingToCart(!addingToCart);
  };

  useEffect(() => {
    setInitialQuantity(1);
    setSelectedIndex(0)
  }, [addingToCart])

  const sizes = [
    { size: "pequeño", price: 89.95 },
    { size: "mediano", price: 99.95 },
    { size: "grande", price: 119.95 },
  ];

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
    console.log("add to cart");
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
      <div className="flex flex-col w-full p-4 rounded-t-lg shadow-lg">
        <h2 className="text-center font-semibold text-2xl text-[--button-bg-secondary] whitespace-normal">
          Nombre del pradadadsdaoducto
        </h2>
        <h2 className="text-center font-medium text-lg text-gray-600">
          Elige el tamaño
        </h2>
        <div
          id="options-container"
          className="relative w-full px-4 flex flex-row gap-4 overflow-x-auto scroll-snap-x flex-nowrap xl:w-fit xl:mx-auto xl:max-w-2/3"
        >
          {sizes.map((size, index) => (
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
            className="w-1/3 text-center bg-transparent outline-none text-xl text-black font-semibold "
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
        className="w-full  bg-[--button-bg-primary] text-white font-bold text-2xl p-4 rounded-2xl md:w-[200px]"
      >
        Confirmar
      </button>
    </form>
  );
};

export default SizeModal;
