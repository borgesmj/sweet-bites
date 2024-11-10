"use client";
import { openModal } from "@/lib/uiHandlers";
import SizeModal from "@/ui/SizeModal";
import ShoppingCartList from "@/ui/ShoppingCartList";
import ProductPageContent from "@/ui/ProductPageContent";
import { CartProvider } from "@/lib/AddToCartContext";
import { useParams } from "next/navigation";
export default function page() {
  const params = useParams();
  const productName = params.name;
  return (
    <div>
      <CartProvider>
        <ProductPageContent productName={productName} />
        <SizeModal />
        <ShoppingCartList />
      </CartProvider>
    </div>
  );
}
