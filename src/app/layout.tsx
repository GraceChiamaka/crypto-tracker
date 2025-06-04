import type { Metadata } from "next";
import { MantineThemeProvider } from "@mantine/core";
import { StoreProvider } from "@store/index";
import { theme } from "@theme/index";
import "@mantine/core/styles/global.css";
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
        <MantineThemeProvider inherit theme={theme}>
            <StoreProvider>
                <html lang="en">
                    <body>{children}</body>
                </html>
            </StoreProvider>
        </MantineThemeProvider>
    );
}
