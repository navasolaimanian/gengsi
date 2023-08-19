import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        categoryType: '',
        showBar:true,
        isChecked: new Array(4).fill(false),
    },
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload.categories;
        },
        setCategoryType(state,action) {
            state.categoryType = action.payload.categoryType;
        },
        setShowBar(state, action) {
            state.showBar = action.payload.showBar;
        },
        setIsChecked(state,action) {
            state.isChecked[action.payload.indexOfCategory] = !state.isChecked[action.payload.indexOfCategory];
        },
    }
})

export const categoriesActions = categoriesSlice.actions; 

export default categoriesSlice;