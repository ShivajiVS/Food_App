import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart: []
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //==================== add items to cart function :====================
        addItemToCart: (state, action) => {
            // console.log(action)
            const { payload } = action;
            const { id } = payload;
            console.log("state", state)
            const itemInCart = state.cart.find((item) => item.id === id);
            if (itemInCart) {
                itemInCart.quantity += 1;
            }
            else {
                state.cart.push({ ...payload, quantity: 1 })
            }

        },
        //==================== remove items from cart function :====================
        removeItemFromCart: (state, action) => {
            // const id = action.payload;
            // return state.filter(item => item.id !== id);
            const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = removeFromCart
        },

        //  ==================== clear all items from cart function : ====================      
        clearCart: (state) => {
            state.cart = [];
        },

        //==================== increment quantity function :====================
        incrementQuantity: (state, action) => {
            // const id = action.payload;
            // return state.map(item => {
            //     if (item.id === id) {
            //         return {
            //             ...item,
            //             quantity: item.quantity + 1
            //         }
            //     }
            // })
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            itemInCart.quantity += 1;

            if (itemInCart.quantity === 1) {
                const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = removeFromCart
            }

        },

        //==================== decrement quantity function :====================
        decrementQuantity: (state, action) => {
            // const id = action.payload;
            // return state.map(item => {
            //     if (item.id === id) {
            //         return {
            //             ...item,
            //             quantity: item.quantity - 1
            //         }
            //     }
            // })

            // ========= working logic ==================
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            itemInCart.quantity -= 1;
            if (itemInCart.quantity === 1) {
                const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = removeFromCart
            }
        },
    }
})


export const { addItemToCart, removeItemFromCart, clearCart, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer















// let currentCartItem;
// if (state.length > 0) {
//     currentCartItem = [...state.cartItems];
//     const index = currentCartItem.findIndex(item => item.id === id)
//     if (index === -1) {
//         currentCartItem.push({
//             ...payload,
//             quantity: 1
//         })
//     }
// }

// state = payload;