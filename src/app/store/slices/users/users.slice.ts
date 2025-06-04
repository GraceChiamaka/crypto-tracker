import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState = { value: 0 } satisfies CounterState as CounterState;

const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
export const users = userSlice.reducer;
