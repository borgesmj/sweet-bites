"use client";
import { CartProvider } from "@/lib/AddToCartContext";
import Formularios from "@/ui/Formularios";
import ShoppingCartList from "@/ui/ShoppingCartList";
export default function Page() {
  return (
    <section className="w-full p-4">
      <CartProvider>
        <Formularios />
        <ShoppingCartList />
      </CartProvider>
    </section>
  );
}

