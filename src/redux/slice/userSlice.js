import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const fetchUsers = createAsyncThunk(
    'users',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        return await res.json();
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false
                state.error = 'Failed to fetch users.'
            })
    }
})


export default userSlice.reducer
