import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WatchlistState = {
    watchedIds: string[];
};
const initialState: WatchlistState = {
    watchedIds: [],
};
const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addToWatchlist: (state, action: PayloadAction<string>) => {
            if (!state.watchedIds.includes(action.payload)) {
                state.watchedIds.push(action.payload);
            }
        },
        removeFromWatchlist: (state, action: PayloadAction<string>) => {
            if (state.watchedIds.includes(action.payload)) {
                state.watchedIds = state.watchedIds.filter((id) => id !== action.payload);
            }
        },
    },
});

export const watchlistActions = watchlistSlice.actions;
export default watchlistSlice.reducer;
