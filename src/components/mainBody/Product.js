import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCartHandler, fetchCart } from '../../store/cart-action';
const Product = (props) => {

    const status = useSelector(state => state.product.status);
    const isLoading = (status === 'loading') ? true : false;
    const token = useSelector(state => state.token.token);
    const cart = useSelector(state => state.cart.cart);

    const dispatch = useDispatch();

    return (
        <div className='border rounded-lg lg:m-3 xl:m-6 xl:mt-0 lg:m-2 xl:mb-1 max-w-xs w-56 shadow-md h-[24rem]'>
            {isLoading &&
                <div class="flex items-center justify-center h-48 bg-gray-300 rounded dark:bg-gray-400">
                    <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>
            }
            {!isLoading &&
                <NavLink to={`/${props.product.id}`}>
                    <img src={props.product.image} className='h-48 m-auto p-6'></img>
                </NavLink>
            }

            <div className='p-2 pb-4 border-t grid h-48 items-end'>
                <NavLink to={`/${props.product.id}`}>
                    <p className='text-stone-950 text-2xl font-semibold mb-2'>${props.product.price}</p>
                </NavLink>

                <NavLink to={`/${props.product.id}`}>
                    <p className='text-sm mb-4' style={{
                        'WebkitLineClamp': '2',
                        'overflow': 'hidden',
                        'textOverflow': 'ellipsis',
                        'display': '-webkit-box',
                        'WebkitBoxOrient': 'vertical'
                    }}>{props.product.title}</p>
                </NavLink>
                <div>
                    <FontAwesomeIcon icon={faStar} className='text-amber-400 mr-1' />
                    <span className='text-xs mr-4'>{props.product.rate}</span>
                    <span className='text-slate-300'>|</span>
                    <span className='text-xs mx-4'>{props.product.sold} Sold</span>
                </div>
                <button className='bg-secondary hover:bg-secondary/80 hover:translate-y-px text-white p-1 text-center rounded-lg' onClick={() => {
                    // dispatch(fetchCart(token));
                    dispatch(addToCartHandler(props.product));
                }}>Add to cart</button>
            </div>
        </div>

    );
};

export default Product;