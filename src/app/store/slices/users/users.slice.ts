import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    id: string;
    email: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    id: "",
    email: "",
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export const userAction = userSlice.actions;
export const usersReducer = userSlice.reducer;
