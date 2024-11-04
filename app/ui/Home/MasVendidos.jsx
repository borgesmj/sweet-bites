"use client";
import ProductCard from "@/ui/ProductCard";
import { fetchData } from "@/lib/actions";
import { useEffect, useState } from "react";
import SkeletonCard from "../SkeletonCard";
export default function MasVendidos() {
  const [topFiveProducts, setTopFiveProducts] = useState([]);
  const [loadingComponent, setLoadingComponent] = useState(true);
  useEffect(() => {
    async function fetchTopFive() {
      setLoadingComponent(true)
        try {
            const fetchedData = await fetchData();
            const topFivePRoducts = await fetchedData
              .sort((a, b) => b.rating.rate - a.rating.rate)
              .slice(0, 5);
            setTopFiveProducts(topFivePRoducts);
      } catch (error) {
        console.log(error)
      } finally{
        setLoadingComponent(false)
      }
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
                    ? Array.from({length: 5}).map((_, index) => (<SkeletonCard key={index}/>)) 
                    : topFiveProducts.map((product) => (
                        <ProductCard productInfo={product} key={product.id} />
                    ))}
      </div>
    </div>
  );
}
