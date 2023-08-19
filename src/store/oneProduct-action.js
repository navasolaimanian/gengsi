import { oneProductAction } from "./oneProduct-slice";

export const fechOneProduct = (url) => {
    return async (dispatch) => {
        dispatch(oneProductAction.setStatus({ status: 'loading' }));

        const fechOne = async () => {
            const res = await fetch('https://fakestoreapi.com/products/' + url);

            if (!res.ok) {
                throw new Error('could not fech');
            }
            const data = await res.json();
            return data;
        };

        try {
            const oneProductData = await fechOne();
            console.log(oneProductData);
            dispatch(oneProductAction.loadProduct({item: oneProductData}))
            dispatch(oneProductAction.setStatus({status: 'feched'}))
        } catch (error) {
            dispatch(oneProductAction.setStatus({ status: 'cantfetch' }));
            
        }

    };
};