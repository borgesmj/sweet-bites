"use client";
import Hero from "@/ui/Home/Hero";
import MasVendidos from "./ui/Home/MasVendidos";
import Info from "./ui/Home/Info";
import Socials from "./ui/Home/Socials";
import { CartProvider } from "./lib/AddToCartContext";
import SizeModal from "./ui/SizeModal";
export default function Home() {
  return (
    <CartProvider>
      <div>
        <Hero />
        <MasVendidos />
        <Info />
        <Socials />
        <SizeModal />
      </div>
    </CartProvider>
  );
}
