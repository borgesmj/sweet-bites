import { useRouter } from "next/navigation";

export default function FilterMobile({ categories, currentCategory }) {
  const router = useRouter();
  const handleCategoryChange = (category) => {
    if (category === "") {
      router.push("/tienda");
    } else {
      router.push(`/tienda?categoria=${category}`);
    }
  };
  return (
    <div className="w-full p-4 bg-[--accent-100] text-xl font-semibold text-[--bg-100] flex flex-row items-center justify-between lg:hidden">
      <p className="w-1/3">Filtrar por:</p>
      <select
        name="category"
        id="category"
        value={currentCategory === "" ? "Todo" : currentCategory}
        className="w-2/3 bg-[--accent-100] outline-none capitalize"
        onChange={(e) => {
          handleCategoryChange(e.target.value);
        }}
      >
        <option value="">Todo</option>
        {categories.map((category, index) => (
          <option
            key={`category-${index}`}
            value={category}
            className="capitalize"
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
