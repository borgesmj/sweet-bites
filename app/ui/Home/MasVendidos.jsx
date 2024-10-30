import ProductCard from '@/ui/Components/ProductCard'
export default function MasVendidos() {
    return (
        <div className="w-full px-4 py-8 flex flex-col justify-center items-center gap-4">
            <h2 className="text-xl font-[600] underline underline-offset-6 md:text-left px-8 w-full md:text-3xl">Productos más vendidos</h2>
            <div className="cards-container max-w-full p-4  overflow-x-auto scroll-snap-x flex flex-row gap-4 lg:gap-8">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}