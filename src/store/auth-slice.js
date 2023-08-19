import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: '',
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload.token;
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;