"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import DataServise from "@/lib/FirebaseService";
export default function Page() {
const params = useSearchParams();
const getTimestamp = () => {
  const timestamp = Date.now();
  return timestamp;
}
  const sendOrder = async () => {
    const newOrder = {}
    for (const [key, value] of params.entries()) {
      newOrder[key] = value;
    }
    const products = localStorage.getItem("cartList");
    newOrder.products = JSON.parse(products);
    //* Status
    //* 1: pendiente
    //* 2: entregado
    //* 3: cancelado
    newOrder.status= 1;
    newOrder.createdAt = getTimestamp()
    // * aqui va la logica para enviar a firebase
    const orderID = await DataServise.generateNewOrder(newOrder)
    await localStorage.removeItem("cartList");
    await localStorage.removeItem("coupon")
    await localStorage.clear()
    let messageText = ""
    messageText += `Hola, he realizado un nuevo pedido. Con el ID: ${orderID}`
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${messageText}`
  };
  useEffect(() => {
    sendOrder();
  }, []);
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      Enviando tu pedido, por favor no recargues la página.
    </div>
  );
}
