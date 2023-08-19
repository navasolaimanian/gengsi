import Categories from "./Categories";
import Condition from "./Conditon";
import Price from "./Price";

const filters = () => {
    return (
        <div className="p-4">
            <h1 className="font-semibold text-stone-950 pb-3 text-xl">Filters</h1>
            <Categories/>
            <Condition />
            <Price />
        </div>
    );
};

export default filters;