import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productAction } from '../../store/product-slice';
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    const inputHandler = (event) => {

        setSearchInput(event.target.value);
        console.log(searchInput);
        console.log('yay');
    };
    return (
        <div className='grid col-span-5 xl:col-span-7 mx-2 md:mx-8  md:mt-0'>
            <form className='border rounded-lg h-12 max-w-3xl px-2 grid items-center -ml-10 mr-4 md:ml-0 relative left-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center w-full'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='py-2 pr-3' />
                        <input type="search" placeholder='search ...' className='p-1 m-1 w-full outline-0' onChange={inputHandler}></input>
                    </div>
                    <button className='bg-secondary text-white py-2 px-3 rounded-lg text-sm' onClick={(event) => {
                        event.preventDefault();
                        dispatch(productAction.setSearchInput({ searchInput: searchInput }));
                    }}>Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;