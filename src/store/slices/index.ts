import { combineReducers } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";
import { marketApiSlice } from "../../services";

export const rootReducer = combineReducers({
    [marketApiSlice.reducerPath]: marketApiSlice.reducer,
    watchlist: watchlistReducer,
});
