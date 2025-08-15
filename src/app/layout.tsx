"use client";
import { StyledThemeProvider, GlobalStyle } from "@theme/index";
import { StoreProvider } from "./store";
import { NotificationContextProvider } from "@context/index";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <StyledThemeProvider>
                        <GlobalStyle />
                        <NotificationContextProvider>{children}</NotificationContextProvider>
                    </StyledThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
