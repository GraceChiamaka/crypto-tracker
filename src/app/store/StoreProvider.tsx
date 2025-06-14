"use client";
import { Provider } from "react-redux";
import { store } from "@store/index";
import { ReactNode } from "react";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};
