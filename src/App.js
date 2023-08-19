import { RouterProvider, createBrowserRouter, useRouteLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
// import LeftBar from './components/leftBar/LeftBar';
// import MainBody from './components/mainBody/MainBody';
import { useDispatch, useSelector } from 'react-redux';
import { fechProducts } from './store/product-ation';
import { fetchCategories } from './store/categories-action';
import Home, { loadProducts } from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CategoryPage from './pages/Category';
import Signup, { action } from './pages/Signup';
import { action as signupAction } from './pages/Signup';
import { action as loginAction } from './pages/Login';
import Login from './pages/Login';
import { getTokenLoder } from './Util/auth';
import Cart from './pages/Cart';
import { fetchCart } from './store/cart-action';


function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      loader: getTokenLoder,
      // action: fechProducts,
      children: [
        {
          index: true,
          element: <Home />,
          // loader: loadProducts(dispatch)
        },
        {
          path: ':productId',
          id: 'product-p',
          element: <ProductDetails />
        },
        {
          path: 'products/:categoryId',
          id: 'category-id',
          element: <CategoryPage />
        },
        {
          path: 'auth/signup',
          element: <Signup />,
          action: signupAction
        },
        {
          path: 'auth/login',
          element: <Login />,
          action: loginAction
        },
        {
          path: 'cart',
          element: <Cart />,
        }
      ]
    }
  ]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(fetchCart(token))
  //   dispatch(fechProducts(''));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    // <div className='bg-primary'>
    //   <Header />
    //   <div className='xl:container mx-auto justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
    //     <LeftBar />
    //     <MainBody />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
