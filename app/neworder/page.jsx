"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import DataService from "@/lib/FirebaseService";

function OrderSender() {
  const params = useSearchParams();
  const getTimestamp = () => Date.now();

  const sendOrder = async () => {
    const newOrder = {};
    for (const [key, value] of params.entries()) {
      newOrder[key] = value;
    }
    const products = localStorage.getItem("cartList");
    newOrder.products = JSON.parse(products || "[]");
    newOrder.status = 1; // Pendiente
    newOrder.createdAt = getTimestamp();

    // Lógica para enviar a Firebase
    const orderID = await DataService.generateNewOrder(newOrder);
    await localStorage.removeItem("cartList");
    await localStorage.removeItem("coupon");
    await localStorage.clear();

    const messageText = `Hola, he realizado un nuevo pedido. Con el ID: ${orderID}`;
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    window.open(
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        messageText
      )}`,
      "_blank"
    );
    window.location.href = "/";
  };

  useEffect(() => {
    sendOrder();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      Enviando tu pedido, por favor no recargues la página.
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSender />
    </Suspense>
  );
}
