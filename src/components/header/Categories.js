import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import fourSquars from '../../img/four-squares.png';
import 'flowbite';
import { useDispatch, useSelector } from 'react-redux';
import { fechProducts } from '../../store/product-ation';
import { NavLink } from 'react-router-dom';
import { categoriesActions } from '../../store/categories-slice';

const Categories = () => {
    const categories2 = useSelector((state) => state.categories.categories);
    const dispach = useDispatch();

    const checkBoxHandler = (categoriy) => {
        dispach(fechProducts('/category/' + categoriy));
        dispach(categoriesActions.setCategoryType({ categoryType: categoriy }));
    };

    return (

        <button data-dropdown-toggle="dropdownCategories" className='flex items-center space-x-2 col-span-2 xl:col-span-1 justify-center mr-6 md:mr-0'>
            <img src={fourSquars} className='w-6' alt='categories icon'></img>
            <span>Categories</span>
            <FontAwesomeIcon icon={faChevronDown} />
            <ul id='dropdownCategories' className="hidden text-sm text-start space-y-2 bg-white w-36 pt-2 border rounded-lg flex flex-col items-start [&>*]:border-b-2 [&>*]:p-2 [&>*]:w-full shadow-md" style={{ 'marginLeft': '-4rem' }}>
                {categories2.map((category, index) => <NavLink  to={`products/${category}`}> <li key={index} onClick={event => checkBoxHandler(category)}>{category}</li></NavLink>)}
            </ul>
        </button>


    );
};

export default Categories;



