import { productAction } from "./product-slice";

export const fechProducts = (url) => {
    return async (dispatch) => {
        dispatch(productAction.replaceProduct({
            items: []
        }));
        dispatch(productAction.setStatus({ status: 'loading' }));
        const fechData = async () => {
            const res = await fetch('https://fakestoreapi.com/products' + url);
            console.log('https://fakestoreapi.com/products' + url);
            if (!res.ok) {
                console.log('error');
                throw new Error('could not fech');
            }
            
            console.log('fechProducts', url);
            const data = await res.json();
            console.log(data);
            return data;
        };
        try {
            const productData = await fechData();
            console.log(productData);
            let products = [];
            productData.forEach(product => {

                products.push(
                    {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        rate: product.rating.rate,
                        sold: product.rating.count,
                        description: product.description,
                    }
                );
            });
            console.log(products);
            // console.log('yayyyyyyyyy');
            dispatch(productAction.replaceProduct({
                items: products
            }));
            dispatch(productAction.setStatus({ status: 'fetched' }));
        } catch (error) {
            dispatch(productAction.setStatus({ status: 'cantfetch' }));

        }
    };
};