import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './slices/itemSlice'
import CartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';
import addItemForOrderSlice from './slices/itemAddSlice';
import defaultAddressSlicce from './slices/defaultAddress';

export const Store = configureStore({
    reducer: {
        items: itemSlice,
        cart: CartSlice,
        Order: addItemForOrderSlice,
        user: userSlice,
        defaultAddress: defaultAddressSlicce,
    }
})