"use client";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from ".";

export const AntThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <ConfigProvider
                theme={{
                    components: {},
                }}
            >
                {children}
            </ConfigProvider>
        </ThemeProvider>
    );
};
