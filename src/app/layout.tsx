import type { Metadata } from "next";
import { StyledThemeProvider, GlobalStyle } from "@theme/index";
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
        <html lang="en">
            <body>
                <StyledThemeProvider>
                    <GlobalStyle />
                    {children}
                </StyledThemeProvider>
            </body>
        </html>
    );
}
