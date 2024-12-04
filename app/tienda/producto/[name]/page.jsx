"use client";
import { openModal } from "@/lib/uiHandlers";
import SizeModal from "@/ui/Layout/SizeModal";
import ShoppingCartList from "@/ui/Cart/ShoppingCartList";
import ProductPageContent from "@/ui/ProductPage/ProductPageContent";
import { CartProvider } from "@/lib/AddToCartContext";
import { useParams } from "next/navigation";
export default function Page() {
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
