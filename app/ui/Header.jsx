"use client";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import Navlinks from "./Navlinks";
import ShoppingBagBtn from "@/ui/ShoppingBagBtn";
import { useState } from "react";
import { CartProvider } from "@/lib/AddToCartContext";
export default function Header() {
  const [animatedLink, setAnimatedLink] = useState(false);
  const animateLink = () => {
    setAnimatedLink(true);
    setTimeout(() => {
      setAnimatedLink(false);
    }, 500);
  };
  return (
    <header className="fixed top-0 left-0 border-solid border-2 border-b-[--button-bg-sumary] w-dvw p-2 flex flex-row justify-around items-center h-[--header-height]  md:px-8 lg:px-16 bg-[var(--bg-100)] z-10">
      <input type="checkbox" name="" id="burger-chbx" className="hidden" />
      <BurgerMenu animateLink={animateLink} />
      <a href="/">
        <Image
          src="/Logo-mobile.png"
          width={100}
          height={50}
          alt="Logo"
          className="block lg:hidden"
        />
        <Image
          src="/Logo-desktop.png"
          width={200}
          height={50}
          alt="Logo"
          className="hidden lg:block"
        />
      </a>
      <Navlinks animatedLink={animatedLink} />
      <CartProvider>
        <ShoppingBagBtn />
      </CartProvider>
    </header>
  );
}
