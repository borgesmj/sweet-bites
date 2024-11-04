import FilterMobile from "../FilterMobile";
import FilterDesktop from "../FilterDesktop";
export default function Filters({ categories }) {

    return (
        <div>
            <FilterMobile categories={categories} />
            <FilterDesktop categories={categories} />
        </div>
    );
}