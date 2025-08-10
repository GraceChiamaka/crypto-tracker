"use client";
import { StyledLayout } from "@components/core";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Cryphr",
//     description: "Crypto Tracker Dashboard",
// };

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <StyledLayout>{children}</StyledLayout>;
}
