import ProductCard from '@/ui/Components/ProductCard'
import {fetchData} from '@/lib/actions'
export default async function MasVendidos({sellestProducts}) {
    const fetchedData = await fetchData()
    const products = await fetchedData.sort((a,b) => b.rating.rate - a.rating.rate)
    const lastFive = await products.slice(0 , 5)
    return (
        <div className="w-full px-4 py-8 flex flex-col justify-center items-center gap-4">
            <h2 className="text-xl font-[600] underline underline-offset-6 md:text-left px-8 w-full md:text-3xl">Productos más vendidos</h2>
            <div className="cards-container max-w-full p-4  overflow-x-auto scroll-snap-x flex flex-row gap-4 lg:gap-8">
                {
                    lastFive.map((product) => (
                        <ProductCard productInfo = {product} key={product.id}/>
                    ))
                }
            </div>
        </div>
    );
}