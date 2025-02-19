import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;  // Fixed typo and assignment
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false; // Fixed typo and assignment
            state.userData = null;
        }
    }
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
