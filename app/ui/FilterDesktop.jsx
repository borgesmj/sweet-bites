export default function FilterDesktop({ categories }) {

    return (
        <div className="hidden lg:flex  w-full p-6  mx-auto flex-row items-center justify-center gap-2 text-xl text-[--text-100] font-semibold ">
            <p className="text-right  w-1/2 mr-4" >Filtrar por:</p>
            <div className="categories flex flex-row flex-wrap gap-2 justify-start  w-1/2">
                <span data-value="todas" className="capitalize p-1 border-solid border-2 border-[--accent-100] text-center w-fit transition-all hover:bg-[--accent-100] hover:text-[--bg-100] cursor-pointer">Todo</span>
                {/** clases para selected
             * bg-[--accent-100] text-[--bg-100]
             * 
             */}
                {
                    categories.map((category, index) => (
                        <span data-value={category} key={`category-${index}`} className="capitalize p-1 border-solid border-2 border-[--accent-100] text-center w-fit transition-all hover:bg-[--accent-100] hover:text-[--bg-100] cursor-pointer">{category}</span>
                    ))
                }
            </div>
        </div>
    );
}