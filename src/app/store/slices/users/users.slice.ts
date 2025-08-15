import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: string;
    email: string;
    isLoggedIn: boolean;
    newUser: any;
    verifiedUser: any;
}

const initialState: UserState = {
    id: "",
    email: "",
    isLoggedIn: false,
    newUser: {},
    verifiedUser: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setNewUserInfo: (state, { payload }: PayloadAction<{ data: any }>) => {
            state.newUser = payload.data;
        },
        setVerifiedUser: (state, { payload }: PayloadAction<{ data: any }>) => {
            state.verifiedUser = payload.data;
        },
    },
});

export const userAction = userSlice.actions;
export const usersReducer = userSlice.reducer;
