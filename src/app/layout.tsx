"use client";
import { StyledThemeProvider, GlobalStyle } from "@theme/index";
import { StoreProvider } from "./store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <StyledThemeProvider>
                        <GlobalStyle />
                        {children}
                    </StyledThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
