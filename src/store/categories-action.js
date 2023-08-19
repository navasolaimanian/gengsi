import { categoriesActions } from "./categories-slice";

export const fetchCategories = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products/categories');
            const data = await res.json();

            return data;
        };
        try {
           const categoriesData = await fetchData();
            dispatch(categoriesActions.setCategories({
                categories: categoriesData,
            }))
        } catch (error) {
            
        }
    };
};