import { createSlice } from '@reduxjs/toolkit'
const initialState = [
]
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userUpdateToStore: (state, action) => {
            const { payload } = action;
            const data = { ...payload }
            state = data
        },
    }
})
export const { userUpdateToStore } = userSlice.actions
export default userSlice.reducer

