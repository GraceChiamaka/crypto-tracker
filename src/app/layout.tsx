import type { Metadata } from "next";
import { StyledThemeProvider, GlobalStyle } from "@theme/index";
import "@theme/globals.css";
import { StoreProvider } from "./store";

export const metadata: Metadata = {
    title: "Cryphr",
    description: "Crypto Insights at your fingertips",
};

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
