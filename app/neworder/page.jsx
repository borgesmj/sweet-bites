"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import DataService from "@/lib/FirebaseService";
import Link from "next/link";

function OrderSender() {
  const params = useSearchParams();
  const getTimestamp = () => Date.now();
  const [status, setStatus] = useState(2);

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
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      messageText
    )}`;
    setTimeout(() => {
      setStatus(2)
    }, 1000);
  };

  useEffect(() => {
    sendOrder();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center p-4 flex-col">
      {status === 1 ? (
        <span>Enviando tu pedido, por favor no recargues la página.</span>
      ) : (
        <span>Tu pedido fue enviado con éxito. <strong>Gracias por tu compra.</strong><Link href="/" className="font-bold text-blue-700 underline">Volver al inicio</Link></span>
      )}
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
