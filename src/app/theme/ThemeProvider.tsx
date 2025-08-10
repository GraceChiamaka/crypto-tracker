"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../store";
import { theme } from ".";

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>{children}</Provider>
        </ThemeProvider>
    );
};
