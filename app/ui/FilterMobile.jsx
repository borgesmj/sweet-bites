export default function FilterMobile({categories}) {
    console.log(categories)
    return (
        <div className="w-full p-4 bg-[--accent-100] text-xl font-semibold text-[--bg-100] flex flex-row items-center justify-between lg:hidden">
            <p className="w-1/3">Filtrar por:</p>
            <select name="category" id="category" className="w-2/3 bg-[--accent-100] outline-none">
                <option value="todas">Todo</option>
                {
                    categories.map((category, index) => (
                        <option key={`category-${index}`} value={category} className="capitalize">{category}</option>
                    ))
                }
            </select>
        </div>
    );
}