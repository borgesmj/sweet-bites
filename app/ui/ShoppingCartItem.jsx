import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoTrash } from "react-icons/io5";
import { useCart } from "@/lib/AddToCartContext";
const ShoppingCartItem = ({ product, index }) => {
  const { cartList, setCartList } = useCart();
  const [productQuantity, setProductQuantity] = useState(0);
  useEffect(() => {
    setProductQuantity(product.quantity);
  }, []);
  const handleDecreasseItem = () => {
    const carTListCopy = [...cartList];
    cartList[index].quantity = product.quantity - 1;
    setCartList(carTListCopy)
    setProductQuantity(productQuantity - 1);
  };

  const handleIncreaseItem = () => {
    const carTListCopy = [...cartList];
    cartList[index].quantity = product.quantity + 1;
    setCartList(carTListCopy)
    setProductQuantity(productQuantity + 1);
  };

  const handleDeleteItem = (key) => {
    const filteredItems = cartList.filter((item) => item.key !== key);
    localStorage.setItem("cartList", JSON.stringify(filteredItems));
    setCartList(filteredItems)
  };

  return (
    <div className="relative grid grid-cols-4 w-[120%] lg:w-full px-2 border-b border-gray-200 my-3 py-2">
      <IoTrash
        className="absolute top-0 right-4 text-red-600 cursor-pointer"
        onClick={() => {
          handleDeleteItem(product.key);
        }}
      />
      <Image
        src={product.image}
        alt="text alt"
        width="60"
        height="60"
        className="col-span-1"
      />
      <div className="col-span-1 flex flex-col">
        <h3 className="font-bold truncate">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.size}</p>
      </div>
      <div className="flex justify-around items-center col-span-1 gap-1">
        <button
          type="button"
          disabled={product.quantity === 1}
          onClick={handleDecreasseItem}
          className={`border p-2 rounded ${
            product.quantity === 1 ? "opacity-0" : "opacity-100"
          }`}
        >
          -
        </button>
        <input
          type="number"
          value={product.quantity}
          className="w-8 h-8 text-center bg-transparent outline-none"
          readOnly
        />
        <button
          type="button"
          className="border p-2 rounded"
          onClick={handleIncreaseItem}
        >
          +
        </button>
      </div>
      <p className="col-span-1 font-semibold flex justify-center items-center">
        {`$${(product.detailPrice * product.quantity).toFixed(2)}`}
      </p>
    </div>
  );
};

export default ShoppingCartItem;
