"use client";
import ProductCard from "@/ui/ProductCard";
import { useEffect, useState } from "react";
import SkeletonCard from "../SkeletonCard";
import DataService from "@/lib/FirebaseService";
export default function MasVendidos() {
  const [topFiveProducts, setTopFiveProducts] = useState([]);
  const [loadingComponent, setLoadingComponent] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);
  useEffect(() => {
    async function fetchTopFive() {
      setLoadingComponent(true);
      const fetchFiveProducts = await DataService.orderFirstFive();
      await setTopFiveProducts(fetchFiveProducts);
      await setLoadingComponent(false);
    }
    fetchTopFive();
  }, []);
  return (
    <div className="w-full px-4 py-8 flex flex-col justify-center items-center gap-4">
      <h2 className="text-xl font-[600] underline underline-offset-6 md:text-left px-8 w-full md:text-3xl">
        Productos más vendidos
      </h2>
      <div className="cards-container max-w-full p-4  overflow-x-auto scroll-snap-x flex flex-row gap-4 lg:gap-8">
        {loadingComponent
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : topFiveProducts.map((product) => (
              <ProductCard
                productInfo={product}
                key={product.id}
                addingToCart={addingToCart}
                setAddingToCart={setAddingToCart}
              />
            ))}
      </div>
    </div>
  );
}
