import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    Order: []
}
const addItemForOrderSlice = createSlice({
    name: 'Order',
    initialState,
    reducers: {
        //==================== add items to cart function :====================
        addItemToOrder: (state, action) => {
            const { payload } = action;
            const { id } = payload;
            console.log("state", state)
            const itemInCart = state.Order.find((item) => item.id === id);
            if (itemInCart) {
                itemInCart.quantity += 1;
            }
            else {
                state.Order.push({ ...payload, quantity: 1 })
            }

        },
        //==================== remove items from cart function :====================
        removeItemFromOrder: (state, action) => {
            const removeFromCart = state.Order.filter((item) => item.id !== action.payload.id)
            state.Order = removeFromCart
        },

        //  ==================== clear all items from cart function : ====================      
        clearorder: (state) => {
            state.Order = [];
        },

        //==================== increment quantity function :====================
        incrementQuantity: (state, action) => {
            const itemInCart = state.Order.find((item) => item.id === action.payload.id)
            itemInCart.quantity += 1;

            if (itemInCart.quantity === 1) {
                const removeFromCart = state.Order.filter((item) => item.id !== action.payload.id)
                state.Order = removeFromCart
            }
        },

        //==================== decrement quantity function :====================
        decrementQuantity: (state, action) => {
            // ========= working logic ==================
            const itemInCart = state.Order.find((item) => item.id === action.payload.id)
            itemInCart.quantity -= 1;
            if (itemInCart.quantity === 1) {
                const removeFromCart = state.Order.filter((item) => item.id !== action.payload.id)
                state.Order = removeFromCart
            }
        },
    }
})

export const { addItemToOrder, removeItemFromOrder, clearorder, incrementQuantity, decrementQuantity } = addItemForOrderSlice.actions;

export default addItemForOrderSlice.reducer
