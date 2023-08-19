import LeftBar from '../components/leftBar/LeftBar';
import MainBody from '../components/mainBody/MainBody';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fechProducts } from '../store/product-ation';
import { useParams } from 'react-router-dom';
import { categoriesActions } from '../store/categories-slice';

const CategoryPage = () => {
    const dispatch = useDispatch();
    const param = useParams();
    
    useEffect(() => {
        dispatch(fechProducts(`/category/` + param.categoryId))
        dispatch(categoriesActions.setCategoryType({categoryType: param.categoryId}))
    },[dispatch,param])
    return (
        <div className='bg-primary pt-6'>
            <div className='xl:container mx-auto justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <LeftBar />
                <MainBody />
            </div>
        </div>);
}

export default CategoryPage;