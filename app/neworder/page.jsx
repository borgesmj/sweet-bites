"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
const params = useSearchParams();
  const sendOrder = async () => {
    const newOrder = {}
    for (const [key, value] of params.entries()) {
      newOrder[key] = value;
    }
    const products = localStorage.getItem("cartList");
    newOrder.products = JSON.parse(products);
    // * aqui va la logica para enviar a firebase
    console.log(newOrder)
    await localStorage.removeItem("cartList");
    await localStorage.removeItem("coupon")
    await localStorage.clear()
    window.location.href = "/"
  };
  useEffect(() => {
    sendOrder();
  }, []);
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      Enviando tu pedido, por favor no recargues la página
    </div>
  );
}
