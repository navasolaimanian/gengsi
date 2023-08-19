import Filters from './Filters';
import Payment from './Payment';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesActions } from "../../store/categories-slice";
import { productAction } from '../../store/product-slice';



const LeftBar = () => {
    const dispatch = useDispatch();

    const showBar = useSelector(state => state.categories.showBar);
    const classes = showBar ? ' relative rounded-tr-none z-10' : ' absolute sm:relative -left-64 rounded-tr-0';
    // const classes = showBar ? 'border rounded-lg max-w-xs md:ml-8 w-64 shadow-md rounded-tr-none relative' : ' relative border rounded-lg max-w-xs md:ml-8 w-64 shadow-md absolute sm:relative -left-64 rounded-tr-0';
    //showbar? right = 0 -> button
    return (
        // <div className={`border rounded-lg max-w-xs md:ml-8 w-64 shadow-md h-[49.5rem]` + classes} onClick={() => {dispatch(categoriesActions.setShowBar(false))}}>
        <div className={`border rounded-lg max-w-xs md:ml-8 w-64 shadow-md h-[49.5rem]` + classes} >
            <button className="sm:hidden absolute -right-4 w-4 h-48 bg-white shadow-md rounded-r-lg" onClick={() => { dispatch(categoriesActions.setShowBar({ showBar: !showBar })); }}>cb</button>
            <Filters />
            <Payment />
        </div>
    );
};

export default LeftBar;