import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartHandler, decrementToCartHandler, fetchCart } from "../store/cart-action";

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const token = useSelector(state => state.token.token);
    const status = useSelector(state => state.cart.status);
    const dispatch = useDispatch();
    const [numOfProducts, setNumOfProducts] = useState(new Array(cart.length).fill(1));

    useEffect(() => {
        dispatch(fetchCart(token));
    }, [token]);
    useEffect(() => {
        const n = cart.map((el) => el.number);
        setNumOfProducts(n);
    }, [cart]);


    let content = [];
    for (let index = 0; index < 3; index++) {
        content.push(
            <li key={index} className="grid grid-cols-4 p-4">
                <div className="flex justify-center items-center bg-gray-300 rounded min-h-96 max-w-max">
                    <svg className="p-1 lg:p-8 w-2/3 max-h-96 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>
                <div className="p-4 lg:p-6 w-full col-span-3">
                    <div className="mb-10 h-8 bg-gray-200 rounded-full dark:bg-gray-400 w-40"></div>
                    <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 mb-12"></div>

                    <div className="flex relative">
                        <div className="flex items-center">
                            <span className="text-xl text-slate-800 font-bold">$</span>
                            <div className="ml-2 h-6 bg-gray-200 rounded-full dark:bg-gray-400 w-24"></div>
                        </div>
                        <div className="border shadow px-2 flex items-center absolute right-8 bottom-[0.5rem]">
                            <button>+</button>
                            <span className="mx-3 bg-gray-200 h-3 w-2"></span>
                            <button className="mb-1">-</button>
                        </div>
                    </div>
                </div>
            </li>
        );

    }
    if (status !== 'loading') {
        if (cart.length !== 0) {
            content = cart.map(((product, index) => {
                return (
                    <li key={index} className="grid grid-cols-4 w-full p-2 md:p-4 xl:p-0">
                        <div className="flex justify-center items-center min-h-96 max-w-max">
                            <img className="p-1 lg:p-8 md:w-2/3 md:max-h-96" src={product.image} />
                        </div>
                        <div className="p-4 lg:p-6 w-full col-span-3">
                            <h1 className="md:font-bold text-zinc-900 text-md md:text-lg mb-4 md:mb-10">{product.title}</h1>
                            <p className="text-md md:text-md text-slate-800 mb-12">{product.description}</p>
                            <div className="flex relative">
                                <h2 className="text-md md:text-xl text-slate-800 font-bold">${product.price}</h2>
                                <div className="border shadow px-2 flex items-center absolute right-8 bottom-[0.5rem]">
                                    <button className="mb-1" onClick={() => {
                                        dispatch(decrementToCartHandler(product));
                                        setNumOfProducts(numOfProducts.map((el, i) => {
                                            if (i === index) {
                                                return --el;
                                            }
                                            else {
                                                return el;
                                            }
                                        }));
                                    }}>-</button>
                                    <span className="mx-3">{numOfProducts[index]}</span>
                                    {/* <span className="mx-3">{product.number}</span> */}
                                    <button onClick={() => {
                                        dispatch(addToCartHandler(product));
                                        setNumOfProducts(numOfProducts.map((el, i) => {
                                            if (i === index) {
                                                return ++el;
                                            }
                                            else {
                                                return el;
                                            }
                                        }));
                                    }}>+</button>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            }));
        }
        else{
            content = <p className="m-auto text-stone-950 font-semibold">Your cart is empty.</p>
        }
    }
    return (

        <ul className='md:container xl:w-[65rem] grid-rows-2 divide-y mt-[5%] border rounded-lg shadow bg-white my-12 mx-8 md:mx-auto justify-items-center grid min-h-[35rem]' >
            {content}
        </ul>
    );
};
export default Cart;