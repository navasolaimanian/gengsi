import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechOneProduct } from "../store/oneProduct-action";
import { addToCartHandler } from "../store/cart-action";
const ProductDetails = () => {
    const params = useParams();
    const dispach = useDispatch();
    const token = useSelector(state => state.token.token);
    const cart = useSelector(state => state.cart.cart);
    const product = useSelector((state) => state.oneProduct.item);
    const status = useSelector((state) => state.oneProduct.status);
    // console.log(product);
    // console.log(status);

    // console.log(params);

    useEffect(() => {
        dispach(fechOneProduct(params.productId));
    }, [dispach]);

    let content = <div role="state" className='animate-pulse divide-y md:divide-y-0 md:divide-x mt-[5%] p-10 border rounded-lg shadow bg-white my-12 xl:container mx-auto justify-items-center grid grid-cols-1 sm:grid-cols-2 h-[70rem] md:h-[40rem]'>
        <div className="flex items-center justify-center bg-gray-300 rounded dark:bg-gray-400 w-2/3">
            <svg className="p-4 w-12 max-h-[40rem] text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
        </div>
        <div className="p-20 w-full">
            <h1 className="h-6 bg-gray-200 rounded-full dark:bg-gray-400 mb-10"></h1>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 mb-32"></div>
            <div className='p-2 pb-4 grid h-48 items-end'>
                <div className="flex items-center">
                    <span className="text-3xl text-slate-800 font-bold">$</span>
                    <div className="ml-2 h-8 bg-gray-200 rounded-full dark:bg-gray-400 w-24"></div>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className='text-amber-400 mr-1' />
                    <div className="ml-1 h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-4 mr-2"></div>
                    <span className='text-slate-300'>|</span>
                    <div className="ml-2 h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-6 mr-2"></div>
                    <span className='text-xs mx-2'>Sold</span>
                </div>

            </div>
        </div>
    </div>;
    if (status !== 'loading') {
        content = <div className='md:container divide-y md:divide-y-0 md:divide-x mt-[5%] p-10 border rounded-lg shadow bg-white my-12 xl:container mx-8 md:mx-auto justify-items-center grid grid-cols-1 md:grid-cols-2 h-[70rem] md:h-[45rem]' >
            <div className="flex justify-center items-center min-h-fit max-w-max">
                <img className="p-1 lg:p-4 w-2/3 max-h-[40rem]" src={product.image} />
            </div>
            <div className="p-4 lg:p-16 w-full">
                <h1 className="font-bold text-zinc-900 text-2xl mb-10">{product.title}</h1>
                <p className="text-lg text-slate-800 mb-28" style={{
                    'WebkitLineClamp': '5',
                    'overflow': 'hidden',
                    'textOverflow': 'ellipsis',
                    'display': '-webkit-box',
                    'WebkitBoxOrient': 'vertical'
                }}>{product.description}</p>
                <h2 className="text-3xl text-slate-800 font-bold mb-10">${product.price}</h2>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className='text-amber-400 mr-1' />
                    <span className='text-lg mr-4'>{product.rating.rate}</span>
                    <span className='text-slate-300'>|</span>
                    <span className='text-lg mx-4'>{product.rating.count} Sold</span>
                </div>
                <button className='bg-secondary text-white p-2 text-center rounded-lg mt-8' onClick={() => dispach(addToCartHandler(product))}>Add to cart</button>
            </div>

        </div>;
    }

    return (
        <div> {content}</div>
    );
};

export default ProductDetails;