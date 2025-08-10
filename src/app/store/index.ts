import { configureStore, Middleware } from "@reduxjs/toolkit";
import { rootReducer } from "./slices";

const logger: Middleware = () => (next: any) => (action: any) => {
    console.group(`[REDUX] ${action.type}`);
    console.log("[Prev State]:", store.getState());
    console.log("Action:", action);

    console.log("Next State:", store.getState());
    console.groupEnd();
    return next(action);
};

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
