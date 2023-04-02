import { createSlice } from '@reduxjs/toolkit'
const initialState = [
]
const defaultAddressSlicce = createSlice({
    name: 'defaultAddress',
    initialState,
    reducers: {
        updateDefaultAddress: (state, action) => {
            const { payload } = action;
            const data = { ...payload }
            state = data
        },
    }
})
export const { updateDefaultAddress } = defaultAddressSlicce.actions
export default defaultAddressSlicce.reducer

