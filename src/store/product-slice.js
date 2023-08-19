import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState: {
        items: [],
        status:'loading',
        numOfProductsPerPage: 8,
        searchInput: ''
    },
    reducers: {
        replaceProduct(state, action) {
            state.items = action.payload.items;
        },
        setStatus(state, action) {
            state.status = action.payload.status;
        },
        setNumOfProductsPerPage(state, action) {
            state.numOfProductsPerPage = action.payload.numOfProductsPerPage;
        },
        setSearchInput(state, action) {
            state.searchInput = action.payload.searchInput;
        }
    }
})

export const productAction = productSlice.actions;

export default productSlice;