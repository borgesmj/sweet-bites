"use client";
import DataService from "@/lib/FirebaseService";
import Filters from "@/ui/Tienda/Filters";
import ProductCard from "@/ui/Card/ProductCard";
import SizeModal from "@/ui/Layout/SizeModal";
import { useEffect, useState } from "react";
import SkeletonCard from "@/ui/Card/SkeletonCard";
import { useSearchParams } from "next/navigation";
import { CartProvider } from "@/lib/AddToCartContext";
import ShoppingCartList from "@/ui/Cart/ShoppingCartList";

export default function Page() {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const searchParams = useSearchParams();
  const category = searchParams.get("categoria");
  useEffect(() => {
    async function loadProducts() {
      setLoadingPage(true);
      const products = await DataService.fetchData();     
      const categories = await DataService.fetchCategories()
      await setCategories(categories);
      await setAllProducts(products);
      await setLoadingPage(false);
      
    }
    loadProducts();
  }, []);

  useEffect(() => {
    const gridProducts = allProducts.filter((product) => {
      return product.special_product === false
    })
    if (category) {
      setCurrentCategory(category);
      const filtered = gridProducts.filter((product) => {
        return product.category === category;
      });
      setFilteredProducts(filtered);
    } else {
      setCurrentCategory("");
      setFilteredProducts(gridProducts);
    }
  }, [category, allProducts]);

  return (
    <CartProvider>
      <div>
        <Filters categories={categories} currentCategory={currentCategory} />
        <div
          id="products-grid"
          className="mx-auto grid w-full p-4  grid-cols-1 justify-items-center gap-y-4 md:w-4/5 md:grid-cols-2 lg:w-11/12 lg:grid-cols-3 xl:w-full xl:grid-cols-4 2xl:w-3/4"
        >
          {loadingPage
            ? Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard
                  productInfo={product}
                  key={product.id}
                />
              ))}
        </div>
        <SizeModal/>
        <ShoppingCartList/>
      </div>
    </CartProvider>
  );
}
