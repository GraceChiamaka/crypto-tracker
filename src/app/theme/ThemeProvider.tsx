"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "@hooks/useTheme";

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
    const { theme } = useTheme();

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
