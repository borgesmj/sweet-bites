"use client";
import { CartProvider } from "@/lib/AddToCartContext";
import Formularios from "@/ui/Forms/Formularios";
import ShoppingCartList from "@/ui/Cart/ShoppingCartList";
import PageLoader from "@/ui/Loaders/PageLoader";
import { useEffect, useState } from "react";
export default function Page() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false);
    }, 1500);
  }, []);
  return (
    <section className="w-full p-4">
      <CartProvider>
        {isPageLoading ? (
          <PageLoader/>
        ) : (
          <>
            <Formularios />
            <ShoppingCartList />
          </>
        )}
      </CartProvider>
    </section>
  );
}
