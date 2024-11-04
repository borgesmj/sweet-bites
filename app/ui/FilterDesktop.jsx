import { useRouter } from "next/navigation";

export default function FilterDesktop({ categories, currentCategory }) {
  const router = useRouter();
  const handleCategoryClick = (category) => {
    if (category === ""){
        router.push("/tienda")
    } else{
        router.push(`/tienda?categoria=${category}`)
    }
  };
  return (
    <div className="hidden lg:flex  w-full p-6  mx-auto flex-row items-center justify-center gap-2 text-xl text-[--text-100] font-semibold ">
      <p className="text-right  w-1/2 mr-4">Filtrar por:</p>
      <div className="categories flex flex-row flex-wrap gap-2 justify-start  w-1/2">
        <span
            onClick={(e) => handleCategoryClick(e.target.dataset.value)}
          data-value=""
          className={`capitalize p-1 border-solid border-2 border-[--accent-100] text-center w-fit transition-all hover:bg-[--accent-100] hover:text-[--bg-100] cursor-pointer ${currentCategory === "" ? 'bg-[--accent-100] text-[--bg-100]' : null}`}
        >
          Todo
        </span>
        {/** clases para selected
         * bg-[--accent-100] text-[--bg-100]
         *
         */}
        {categories.map((category, index) => (
          <span
            onClick={(e) => handleCategoryClick(e.target.dataset.value)}
            data-value={category}
            key={`category-${index}`}
            className={`capitalize p-1 border-solid border-2 border-[--accent-100] text-center w-fit transition-all hover:bg-[--accent-100] hover:text-[--bg-100] cursor-pointer ${currentCategory === category ? 'bg-[--accent-100] text-[--bg-100]' : null}`}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
