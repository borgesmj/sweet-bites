"use client";
import Filters from "@/ui/Tienda/Filters";
import ProductCard from "@/ui/ProductCard";
import { fetchData, fetchCategories } from "@/lib/actions";
import { useEffect, useState } from "react";
import SkeletonCard from "@/ui/SkeletonCard";
export default function Page() {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loadingPage, setLoadingPage] = useState(true)
    useEffect(() => {
        async function loadProducts() {
            setLoadingPage(true);
            try {
                const products = await fetchData();
                const categories = await fetchCategories(products);
                setCategories(categories);
                setAllProducts(products);
            } catch (error) {
                console.log(error)
            } finally {
                setLoadingPage(false)
            }
        }
        loadProducts();
    }, []);


    return (
        <div>
            <Filters categories={categories} />
            <div
                id="products-grid"
                className="mx-auto grid w-full p-4  grid-cols-1 justify-items-center gap-y-4 md:w-4/5 md:grid-cols-2 lg:w-11/12 lg:grid-cols-3 xl:w-full xl:grid-cols-4 2xl:w-3/4"
            >
                {
                    loadingPage 
                    ? Array.from({length: 8}).map((_, index) => (<SkeletonCard key={index}/>)) 
                    : allProducts.map((product) => (
                        <ProductCard productInfo={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
}
