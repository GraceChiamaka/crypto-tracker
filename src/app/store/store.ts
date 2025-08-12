import { configureStore, Middleware } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { rootReducer } from "./slices";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ts-ignore
const logger: Middleware = (store) => (next) => (action: any) => {
    console.group(`[REDUX] ${action.type}`);
    console.log("[Prev State]:", store.getState());
    console.log("Action:", action);

    console.log("Next State:", store.getState());
    console.groupEnd();
    return next(action);
};
const persistConfig = {
    key: "cyphyr",
    storage,
    whitelist: ["user", "ui"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor: Persistor = persistStore(store);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
