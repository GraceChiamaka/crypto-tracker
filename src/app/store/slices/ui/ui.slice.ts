import { createSlice } from "@reduxjs/toolkit";

interface UIState {
    sidebarCollapsed: boolean;
    mode: "dark" | "light";
}

const initialState: UIState = {
    sidebarCollapsed: false,
    mode: "light",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleMode: (state) => {
            return {
                ...state,
                mode: state.mode === "dark" ? "light" : "dark",
            };
        },
        toggleSidebar: (state) => {
            return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
        },
    },
});

export const { toggleMode, toggleSidebar } = uiSlice.actions;
export const uiAction = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
