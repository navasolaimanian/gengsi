import LeftBar from '../components/leftBar/LeftBar';
import MainBody from '../components/mainBody/MainBody';
import { fechProducts } from '../store/product-ation';
import { fetchCategories } from '../store/categories-action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



const HomePage = () => {
  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    console.log('main');
    console.log(param);
    dispatch(fechProducts(''));
  }, [dispatch,param]);
  return (
    <div className='bg-primary pt-6'>
      <div className='xl:container mx-auto justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <LeftBar />
        <MainBody />
      </div>
    </div>);
};

export async function loadProducts(dispatch) {

  // useEffect(() => {
  dispatch(fechProducts(''));
  // }, [dispatch]);

  // useEffect(() => {
  dispatch(fetchCategories());
  // },[dispatch]);
}

// export function loader () {
//     return defer ({
//         events: loadProducts(),
//     })
// }

export default HomePage;