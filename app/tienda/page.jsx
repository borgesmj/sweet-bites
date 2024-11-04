import Filters from "@/ui/Tienda/Filters";
import ProductCard from "@/ui/ProductCard";
import {fetchData} from '@/lib/actions'
export default async function Page() {
    //const categories = ["galletas", "brownies", "panaderia"]
    const AllProducts = await fetchData();
    const categories = [];
    AllProducts.map((product) => {
        if(!categories.includes(product.category)){
            categories.push(product.category)
        }
    })

    return (
        <div><Filters categories={categories} />
        <div id="products-grid" className="mx-auto grid w-full p-4  grid-cols-1 justify-items-center gap-y-4 md:w-4/5 md:grid-cols-2 lg:w-11/12 lg:grid-cols-3 xl:w-full xl:grid-cols-4 2xl:w-3/4">
            {
                AllProducts.map((product) => (
                    <ProductCard productInfo={product} key={product.id}/>
                ))
            }
        </div>
        </div>
    );
}