"use client";
import { closeModal } from "@/lib/actions";

const SizeModal = () => {
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <div
      id="size-modal"
      className="fixed hidden bg-[red] w-full h-[50dvh] bottom-0 left-0"
    >
      SizeModal
      <button onClick={handleCloseModal}>x</button>
    </div>
  );
};

export default SizeModal;
