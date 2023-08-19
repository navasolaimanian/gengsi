import logo from '../../img/logo.png';
import SearchBar from './SearchBar';
import Categories from './Categories';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFillBasketFill } from 'react-icons/bs';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import RightBar from './RightBar';
import { Link, Outlet, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTokenAction } from '../../store/auth-action';
import User from './User';

const Header = () => {
    // console.log(props.categories);
    const [showLeftBar, setShowLeftBar] = useState(false);
    // const token = useRouteLoaderData('root');
    const token = useLoaderData();
    // console.log(token);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(setTokenAction(token));
    },[dispatch])
    const token2 = useSelector(state => state.token.token);
    // console.log(token2);

    const leftBarHandler = () => {
        setShowLeftBar(!showLeftBar);
        // console.log(showLeftBar);
    };
    // useEffect(() => {
    //     dispatch(setToken(token));
    // },[setToken])
    return (
        <>
            <header className='hidden md:grid sticky top-0 bg-white border-b w-full' style={{ 'zIndex': '500' }}>
                <div className=' hidden md:grid xl:container mx-auto  grid-cols-6 md:grid-cols-12 grid-rows-2 md:grid-rows-1 py-2 items-center'>
                    {/* <Link to={'/'} className='w-full'> */}
                    <img src={logo} alt='logo' className='col-span-2 mt-1.5' ></img>
                    {/* </Link> */}
                    <Categories />
                    <SearchBar />
                    {!token2 && <div>
                        <Link to={'auth/login'}><button className='mr-2 text-lg text-gray-950'>login</button></Link>
                        <span>/</span>
                        <Link to={'auth/signup'}><button className='ml-2 text-lg text-gray-950'>signup</button></Link>
                    </div>}
                    {token2 && <User /> }
                </div>
            </header >
            <header className='z-50 md:hidden grid grid-rows-1 grid-cols-9 py-4 md:pr-7 items-center sticky top-0 bg-white border-b'>
                <img src={logo} alt='logo' className='col-span-2 mt-1.5' ></img>
                <SearchBar />
                <button className='mr-2.5 text-lg ml-2 sm:ml-8'>
                    <BsFillBasketFill />
                </button>
                <button onClick={leftBarHandler}>
                    <FontAwesomeIcon icon={faBars} className='text-3xl justify-self-end mr-3' />
                </button>

            </header>
            <Outlet />;
            {showLeftBar && <RightBar showLeftBar={showLeftBar} setShowLeftBar={setShowLeftBar} />}
        </>
    );
};

export default Header;