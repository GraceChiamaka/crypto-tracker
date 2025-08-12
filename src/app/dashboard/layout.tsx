"use client";
import { StyledLayout } from "@components/core";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <StyledLayout>{children}</StyledLayout>;
}
