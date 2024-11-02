import FilterMobile from "../Components/FilterMobile";
import FilterDesktop from "../Components/FilterDesktop";
export default function Filters({categories}) {

    return (
        <div>
            <FilterMobile categories={categories}/>
           <FilterDesktop categories={categories}/>
        </div>
    );
}