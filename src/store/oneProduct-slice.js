import { createSlice } from "@reduxjs/toolkit";


const oneProductSlice = createSlice({
    name:'oneProduct',
    initialState: {
        item: {},
        status:'loading',
    },
    reducers: {
        loadProduct(state,action) {
            state.item = action.payload.item;
        },
        setStatus(state, action) {
            state.status = action.payload.status;
        }
    }
})

export const oneProductAction = oneProductSlice.actions;

export default oneProductSlice;