import type { Metadata } from "next";
import { StoreProvider } from "@store/index";
import { AntThemeProvider, GlobalStyle } from "@theme/index";
import "@theme/globals.css";

export const metadata: Metadata = {
    title: "Cryphr",
    description: "Crypto Insights at your fingertips",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AntThemeProvider>
            <GlobalStyle />
            <StoreProvider>
                <html lang="en">
                    <body>{children}</body>
                </html>
            </StoreProvider>
        </AntThemeProvider>
    );
}
