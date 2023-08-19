import { cartAction } from "./cart-slice";

const setPutRequest = async (cart) => {
    const token2 = localStorage.getItem('token');
    const res1 = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`);
    const data1 = await res1.json();
    const res = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`, {
        method: 'PUT',
        body: JSON.stringify({
            ...data1,
            cart: cart
        }),
        headers: {
            'content-type': 'application/json'
        }
    });
};

export const fetchCart = (token, cart) => {
    return async (dispatch) => {
        const fetching = async () => {

            const res1 = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token}.json`);
            const data1 = await res1.json();
            return data1;
        };
        try {
            const data1 = await fetching();
            dispatch(cartAction.setCart({ cart: data1.cart }));

            dispatch(cartAction.setStatus('fetched'));
        } catch (error) {
            console.log(error);
        }

    };
};

export const addToCartHandler = (product) => {
    return async (dispatch) => {
        const token2 = localStorage.getItem('token');

        console.log(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`);
        const res1 = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`);
        const data1 = await res1.json();
        console.log(data1);

        if (data1.cart) {
            console.log('have cart');
            const index = data1.cart.findIndex((cartElement) => cartElement.id === product.id);
            console.log(index);
            if (index !== -1) {
                console.log('update cart');
                console.log(data1.cart[index].number);
                console.log(++data1.cart[index].number);
                // const res = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`, {
                //     method: 'PUT',
                //     body: JSON.stringify({
                //         ...data1,

                //         cart: data1.cart.with(index, {
                //             id: product.id,
                //             image: product.image,
                //             title: product.title,
                //             price: product.price,
                //             description: product.description,
                //             number: data1.cart[index].number++
                //         })
                //     }),
                //     headers: {
                //         'content-type': 'application/json'
                //     }
                // });
                setPutRequest(data1.cart.with(index, {
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    number: data1.cart[index].number++
                }));
                // const data = await res.json();
                // console.log(data);
                dispatch(cartAction.updateCart({ index: index }));
            }
            else {
                console.log('first add');
                // const res = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`, {
                //     method: 'PUT',
                //     body: JSON.stringify({
                //         ...data1,
                //         cart: [...data1.cart,
                //         {
                //             id: product.id,
                //             image: product.image,
                //             title: product.title,
                //             price: product.price,
                //             description: product.description,
                //             number: 1
                //         }
                //         ]
                //     }),
                //     headers: {
                //         'content-type': 'application/json'
                //     }
                // });
                // const data = await res.json();
                // console.log(data);
                setPutRequest([...data1.cart,
                {
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    number: 1
                }
                ]);
                dispatch(cartAction.pushCart({
                    cart: {
                        id: product.id,
                        image: product.image,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                        number: 1
                    }
                }));
            }
        }
        else {
            // const res = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`, {
            //     method: 'PUT',
            //     body: JSON.stringify({
            //         ...data1,
            //         cart: [...data1.cart,
            //         {
            //             id: product.id,
            //             image: product.image,
            //             title: product.title,
            //             price: product.price,
            //             description: product.description,
            //             number: 1
            //         }
            //         ]
            //     }),
            //     headers: {
            //         'content-type': 'application/json'
            //     }
            // });
            // const data = await res.json();
            // console.log(data);
            setPutRequest([...data1.cart,
            {
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
                number: 1
            }
            ]);
            dispatch(cartAction.pushCart({
                cart: {
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    number: 1
                }
            }));
        }
    };
};

export const decrementToCartHandler = (product) => {
    return async (dispatch) => {
        const token2 = localStorage.getItem('token');
        const res1 = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`);
        const data1 = await res1.json();
        const index = data1.cart.findIndex((cartElement) => cartElement.id === product.id);

        const updatednumber = --data1.cart[index].number;
        if (updatednumber !== 0) {
            console.log('1');
            // const res = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`, {
            //     method: 'PUT',
            //     body: JSON.stringify({
            //         ...data1,

            //         cart: data1.cart.with(index, {
            //             id: product.id,
            //             image: product.image,
            //             title: product.title,
            //             price: product.price,
            //             description: product.description,
            //             number: updatednumber
            //         })
            //     }),
            //     headers: {
            //         'content-type': 'application/json'
            //     }
            // });
            setPutRequest(data1.cart.with(index, {
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
                number: updatednumber
            }));

            dispatch(cartAction.decrementCart({ index: index }));
        }
        else {
            console.log('2');
            data1.cart.splice(index, 1);
            if (data1.cart.length === 0) {
                console.log('become 0');
                // const res = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`, {
                //     method: 'PUT',
                //     body: JSON.stringify({
                //         ...data1,

                //         cart: ''
                //     }),
                //     headers: {
                //         'content-type': 'application/json'
                //     }
                // });
                setPutRequest('')
            }
            else {
                // const res = await fetch(`https://gengis-66d40-default-rtdb.firebaseio.com/users/${token2}.json`, {
                //     method: 'PUT',
                //     body: JSON.stringify({
                //         ...data1,

                //         cart: data1.cart
                //     }),
                //     headers: {
                //         'content-type': 'application/json'
                //     }
                // });
                setPutRequest(data1.cart)
            }

            dispatch(cartAction.removeFromCart({ index: index }));
        }
    };
};