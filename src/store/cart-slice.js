import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        status: 'loading',
    },
    reducers: {
        pushCart(state, action) {
            console.log('1');
            state.cart.push(action.payload.cart);
        },
        setCart(state, action) {
            console.log('1');
            state.cart.splice(0, state.cart.length);
            state.cart.push(...action.payload.cart);
        },
        updateCart(state, action) {
            // state.cart[action.payload.index] = {
            //     ...state.cart[action.payload.index],
            //     number: ++state.cart[action.payload.index]
            // };
            state.cart = state.cart.map((el, i) => {
                if (action.payload.index === i) {
                    return {
                        ...el,
                        number: ++el.number
                    };
                }
                else {
                    return el;
                }
            });
        },
        decrementCart(state, action) {
            // state.cart[action.payload.index] = {
            //     ...state.cart[action.payload.index],
            //     number: --state.cart[action.payload.index]
            // };
            state.cart = state.cart.map((el, i) => {
                if (action.payload.index === i) {
                    return {
                        ...el,
                        number: --el.number
                    };
                }
                else {
                    return el;
                }
            });
        },
        removeFromCart(state,action) {
            state.cart = state.cart.filter((el, i) => action.payload.index !== i)
        },
        setStatus(state, action) {
            state.status = action.payload.status;
        },

    }

});

export const cartAction = cartSlice.actions;

export default cartSlice;