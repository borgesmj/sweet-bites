"use client";
import Hero from "@/ui/Home/Hero";
import MasVendidos from "./ui/Home/MasVendidos";
import Info from "./ui/Home/Info";
import Socials from "./ui/Home/Socials";
import { CartProvider } from "./lib/AddToCartContext";
import SizeModal from "./ui/Layout/SizeModal";
import ShoppingCartList from "./ui/Cart/ShoppingCartList";
export default function Home() {
  return (
    <CartProvider>
      <div>
        <Hero />
        <MasVendidos />
        <Info />
        <Socials />
        <SizeModal />
        <ShoppingCartList/>
      </div>
    </CartProvider>
  );
}
