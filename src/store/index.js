import {configureStore} from '@reduxjs/toolkit'
import productSlice from './product-slice';
import categoriesSlice from './categories-slice';
import oneProductSlice from './oneProduct-slice';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: {product: productSlice.reducer, categories: categoriesSlice.reducer, oneProduct: oneProductSlice.reducer, token: authSlice.reducer, cart: cartSlice.reducer},
})

export default store;
