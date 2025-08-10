"use client";

import { ReactNode, useState, createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../store";
import { lightTheme, darkTheme } from ".";

type ThemeType = typeof lightTheme | typeof darkTheme;

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: (mode: "dark" | "light") => void;
    mode: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = (mode: "dark" | "light") => {
        setIsDark(mode === "dark");
    };
    const theme = isDark ? darkTheme : lightTheme;

    if (isDark === undefined) return null;
    return (
        <ThemeContext.Provider value={{ mode: isDark ? "dark" : "light", toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Provider store={store}>{children}</Provider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useThemeContext must be used inside ThemeProvider");
    return context;
};
