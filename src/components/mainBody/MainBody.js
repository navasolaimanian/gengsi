import { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Skeleton from "./Skeleton";
import { categoriesActions } from "../../store/categories-slice";
import { productAction } from "../../store/product-slice";
import {fechProducts} from '../../store/product-ation'
import { useParams } from "react-router-dom";



const MainBody = () => {
    // const [isLoding, setIsLoding] = useState(false);
    // const [products, setProducts] = useState([]);
    // console.log(status);
    // console.log(products2);
    // const fechProducts = async () => {
    //     setIsLoding(true);
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     // console.log(data);
    //     let products = [];
    //     data.forEach(product => {

    //         products.push(
    //             {
    //                 id: product.id,
    //                 title: product.title,
    //                 price: product.price,
    //                 imgPath: product.image,
    //                 rate: product.rating.rate,
    //                 sold: product.rating.count,
    //             }
    //         );
    //     });
    //     // console.log(products);
    //     setProducts(products);
    //     setIsLoding(false);
    // };

    // useEffect(() => {
    //     fechProducts();
    // }, []);

    const [curentPage, setCurentPage] = useState(1);
    function getCurrentDimension() {
        return {
            width: window.innerWidth,
        };
    }
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const showBar = useSelector(state => state.categories.showBar);
    const numOfProductsPerPage = useSelector((state) => state.product.numOfProductsPerPage);
    const dispatch = useDispatch();
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);
        if (screenSize.width > 1285) {
            console.log('1');
            dispatch(productAction.setNumOfProductsPerPage({ numOfProductsPerPage: 8 }));
        }
        if (screenSize.width < 1284) {
            console.log('2');
            dispatch(productAction.setNumOfProductsPerPage({ numOfProductsPerPage: 6 }));
        }
        if (screenSize.width < 1027) {
            console.log('3');
            dispatch(productAction.setNumOfProductsPerPage({ numOfProductsPerPage: 4 }));
        }
        if (screenSize.width < 760) {
            console.log('4');
            dispatch(productAction.setNumOfProductsPerPage({ numOfProductsPerPage: 2 }));
            dispatch(categoriesActions.setShowBar({ showBar: true }));
        }
        if (screenSize.width < 650) {
            dispatch(categoriesActions.setShowBar({ showBar: false }));
            console.log(showBar);
        }
        return (() => {
            window.removeEventListener('resize', updateDimension);
        });
    }, [screenSize]);
 

    let products2 = useSelector((state) => state.product.items);
    const searchInput = useSelector(state => state.product.searchInput);

    if (searchInput !== '') {
        products2 = products2.filter(product => (product.title.toLowerCase()).includes(searchInput.toLowerCase()));
        console.log(products2);
    }
    const numberOfProducts = products2.length;

    const indexOfLastProduct = curentPage * numOfProductsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - numOfProductsPerPage;
    let currentProducts = products2.slice(indexOfFirstProduct, indexOfLastProduct);
    const pagenateFront = () => setCurentPage(curentPage + 1);
    const pagenateBack = () => {
        currentProducts = [];
        setCurentPage(curentPage - 1);
    };

    const status = useSelector((state) => state.product.status);

    let content2 = <Skeleton />;

    const skeleton = [];
    for (let index = 0; index < 8; index++) {
        skeleton.push(content2);
    }

    let content = skeleton.map((element) => {
        return <div role="status" className='animate-pulse border rounded-lg lg:m-3 xl:m-6 xl:mt-0 lg:m-2 xl:mb-1 max-w-xs w-56 shadow-md h-[24rem]'>
            <div className="flex items-center justify-center h-48 bg-gray-300 rounded dark:bg-gray-400">
                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
            </div>
            <div className='p-2 pb-4 border-t grid h-48 items-end'>
                <div className="flex items-center">
                    <span>$</span>
                    <div className="ml-2 h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-24"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className='text-amber-400 mr-1' />
                    <div className="ml-1 h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-4 mr-2"></div>
                    <span className='text-slate-300'>|</span>
                    <div className="ml-2 h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-6 mr-2"></div>
                    <span className='text-xs mx-2'>Sold</span>
                </div>

            </div>
        </div>;
    });


    if (status !== 'loading') {
        content = currentProducts.map(element => {
            return (<Product product={element} />);
        });

    }

    return (
        <div className={`releteive p-5 pt-0 grid gap-5 sm:grid-cols-1 sm:col-span-1 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 xl:grid-cols-4 xl:col-span-4`}>
            {indexOfFirstProduct !== 0 &&
                <button className="absolute top-1/2 left-[9%] sm:left-[49%] md:left-[36%] lg:left-[26rem] xl:left-[32rem]" onClick={pagenateBack}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            }
            {content}
            {
                (indexOfLastProduct < numberOfProducts) &&
                <button className="absolute top-1/2 right-[8%]" onClick={pagenateFront}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            }
        </div>
    );
};

export default MainBody;