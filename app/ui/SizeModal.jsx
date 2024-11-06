"use client";
import { closeModal } from "@/lib/actions";
import { useCart } from "@/lib/AddToCartContext";

const SizeModal = () => {
  const {setAddingToCart, addingToCart} = useCart()
  const handleCloseModal = () => {
    setAddingToCart(!addingToCart)
  };
  return (
    <div
      id="size-modal"
      className="z-10 fixed hidden bg-[red] w-full h-[50dvh] bottom-0 left-0"
    >
      SizeModal
      <button onClick={handleCloseModal}>x</button>
    </div>
  );
};

export default SizeModal;
