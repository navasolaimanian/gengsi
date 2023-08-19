import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { categoriesActions } from "../../store/categories-slice";
const Categories = () => {
    const dispach = useDispatch();
    const categories2 = useSelector((state) => state.categories.categories);
    const status = useSelector(state => state.product.status);
    const categoryType = useSelector(state => state.categories.categoryType);

    let content = [];
    for (let index = 0; index < 4; index++) {
        content.push(
            <li className="inline-flex items-center" key={index}>
                <input type='checkbox' id='1' className='mr-2 border-red-600' />
                <label className="h-3 bg-gray-200 rounded-full w-24 mr-2"></label>
            </li>);
    }

    if (status !== 'loading') {
        content = categories2.map((categoriy, index) =>
            <NavLink to={`/products/${categoriy}`}>
                <li className="mb-1" key={`${index} + ${categoriy}`} onClick={() => {
                    dispach(categoriesActions.setIsChecked({ indexOfCategory: index }));
                }}>
                    <input type='checkbox' id={index} className='mr-2 border-red-600' checked={categoryType === categoriy} onChange={() => { }} />
                    <label htmlFor="1">{categoriy}</label>
                </li>
            </NavLink>);
    }

    return (
        <div className="border-b-2">
            <h2 className="text-gray-950 font-medium my-3">Categories</h2>
            <ul className="space-y-2 last:mb-4">
                {content}
            </ul>
        </div>
    );
};

export default Categories;