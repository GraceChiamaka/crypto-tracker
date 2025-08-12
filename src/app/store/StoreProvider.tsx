"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@store/index";
import { ReactNode } from "react";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} />
            {children}
        </Provider>
    );
};
