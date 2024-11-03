'use client';
import Filters from "@/ui/Tienda/Filters";
import ProductCard from "@/ui/Components/ProductCard";
export default function Page() {
    const categories = ["galletas", "brownies", "panaderia"]
    return (
        <div><Filters categories={categories} />
        <div id="products-grid" className="mx-auto grid w-full p-4  grid-cols-1 justify-items-center gap-y-4 md:w-4/5 md:grid-cols-2 lg:w-11/12 lg:grid-cols-3 xl:w-full xl:grid-cols-4 2xl:w-3/4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        </div>
    );
}