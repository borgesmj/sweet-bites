import FilterMobile from "../Filters/FilterMobile";
import FilterDesktop from "../Filters/FilterDesktop";
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
