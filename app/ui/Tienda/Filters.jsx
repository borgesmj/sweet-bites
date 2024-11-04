import FilterMobile from "../FilterMobile";
import FilterDesktop from "../FilterDesktop";
export default function Filters({ categories, currentCategory }) {
  return (
    <div>
      <FilterMobile categories={categories} currentCategory={currentCategory} />
      <FilterDesktop
        categories={categories}
        currentCategory={currentCategory}
      />
    </div>
  );
}
